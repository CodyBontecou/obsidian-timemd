import { parseYaml as parseObsidianYaml } from 'obsidian';
import { Report, ReportMetadata, ReportSection, Row } from '../types';
import { applyFilterMetadata, canonicalSectionName, coerceRowValue, parseDate, parseDateRangeText } from '../utils';

interface YamlSectionLike {
	name?: unknown;
	display_name?: unknown;
	displayName?: unknown;
	title?: unknown;
	headers?: unknown;
	data?: unknown;
	rows?: unknown;
	items?: unknown;
}

const METADATA_KEYS = new Set([
	'title',
	'destination',
	'generated_at',
	'generatedAt',
	'generated',
	'date',
	'created',
	'date_range',
	'dateRange',
	'date_range_start',
	'dateRangeStart',
	'date_range_end',
	'dateRangeEnd',
	'granularity',
	'timezone',
	'schema_version',
	'schemaVersion',
	'filters',
	'total_hours',
	'totalHours',
	'total_minutes',
	'totalMinutes',
	'top_apps',
	'topApps',
	'tags',
	'metadata',
	'sections',
]);

export function parseYaml(content: string, path: string): Report {
	const data = parseObsidianYaml(content) as unknown;
	return reportFromYamlData(data, path, 'yaml');
}

export function reportFromYamlData(
	data: unknown,
	path: string,
	sourceFormat: 'yaml' | 'obsidian' = 'yaml',
): Report {
	if (Array.isArray(data)) {
		const rows = normalizeRows(data);
		return {
			sourcePath: path,
			sourceFormat,
			metadata: { title: basename(path) },
			sections: [
				{
					name: 'unknown',
					displayName: 'Data',
					headers: rows.length > 0 ? Object.keys(rows[0] ?? {}) : [],
					rows,
				},
			],
		};
	}

	if (isRecord(data)) {
		const metadata = buildMetadata(data, path);
		const explicitSections = normalizeSections(data.sections);
		const sections = explicitSections.length > 0 ? explicitSections : sectionsFromTopLevel(data);
		return { sourcePath: path, sourceFormat, metadata, sections };
	}

	throw new Error(`Unrecognized YAML shape in ${path}`);
}

function buildMetadata(obj: Record<string, unknown>, path: string): ReportMetadata {
	const metaObj = isRecord(obj.metadata) ? obj.metadata : obj;
	const metadata: ReportMetadata = {
		title: firstString(metaObj, ['title']) ?? firstString(obj, ['title']) ?? basename(path),
		destination: firstString(metaObj, ['destination']) ?? firstString(obj, ['destination']),
		generatedAt: parseDate(firstValue(metaObj, ['generated_at', 'generatedAt', 'generated', 'date', 'created'])),
		dateRangeStart: parseDate(firstValue(metaObj, ['date_range_start', 'dateRangeStart'])),
		dateRangeEnd: parseDate(firstValue(metaObj, ['date_range_end', 'dateRangeEnd'])),
		granularity: firstString(metaObj, ['granularity']),
		timezone: firstString(metaObj, ['timezone']),
		schemaVersion: stringifyOptional(firstValue(metaObj, ['schema_version', 'schemaVersion'])),
		filters: firstString(metaObj, ['filters']),
	};

	const rangeValue = firstValue(metaObj, ['date_range', 'dateRange']);
	if (isRecord(rangeValue)) {
		metadata.dateRangeStart = metadata.dateRangeStart ?? parseDate(firstValue(rangeValue, ['start', 'from', 'date_range_start', 'dateRangeStart']));
		metadata.dateRangeEnd = metadata.dateRangeEnd ?? parseDate(firstValue(rangeValue, ['end', 'to', 'date_range_end', 'dateRangeEnd']));
	} else {
		const range = parseDateRangeText(rangeValue);
		metadata.dateRangeStart = metadata.dateRangeStart ?? range.start;
		metadata.dateRangeEnd = metadata.dateRangeEnd ?? range.end;
	}

	const totalHours = firstValue(metaObj, ['total_hours', 'totalHours']);
	if (typeof totalHours === 'number') metadata.totalHours = totalHours;
	const totalMinutes = firstValue(metaObj, ['total_minutes', 'totalMinutes']);
	if (typeof totalMinutes === 'number') metadata.totalMinutes = totalMinutes;
	metadata.topApps = firstStringArray(metaObj, ['top_apps', 'topApps']);
	metadata.tags = firstStringArray(metaObj, ['tags']);

	applyFilterMetadata(metadata);
	return metadata;
}

function normalizeSections(input: unknown): ReportSection[] {
	if (Array.isArray(input)) {
		return input
			.map((item, index) => sectionFromUnknown(item, `Section ${index + 1}`))
			.filter((section): section is ReportSection => section !== null);
	}
	if (isRecord(input)) {
		return Object.entries(input)
			.map(([name, value]) => sectionFromUnknown(value, name))
			.filter((section): section is ReportSection => section !== null);
	}
	return [];
}

function sectionsFromTopLevel(obj: Record<string, unknown>): ReportSection[] {
	return Object.entries(obj)
		.filter(([key]) => !METADATA_KEYS.has(key))
		.map(([name, value]) => sectionFromUnknown(value, name))
		.filter((section): section is ReportSection => section !== null);
}

function sectionFromUnknown(input: unknown, fallbackName: string): ReportSection | null {
	if (Array.isArray(input)) {
		const rows = normalizeRows(input);
		return buildSection(fallbackName, fallbackName, [], rows);
	}

	if (!isRecord(input)) return null;
	const section = input as YamlSectionLike;
	const displayName =
		stringifyOptional(section.display_name) ??
		stringifyOptional(section.displayName) ??
		stringifyOptional(section.name) ??
		stringifyOptional(section.title) ??
		fallbackName;
	const sectionName = stringifyOptional(section.name) ?? displayName;
	const headers = normalizeHeaders(section.headers);
	const rowInput = section.data ?? section.rows ?? section.items ?? [];
	const rows = normalizeRows(rowInput, headers);
	const inferredHeaders = headers.length > 0 ? headers : rows.length > 0 ? Object.keys(rows[0] ?? {}) : [];
	return buildSection(sectionName, displayName, inferredHeaders, rows);
}

function buildSection(
	sectionName: string,
	displayName: string,
	headers: string[],
	rows: Row[],
): ReportSection {
	const display = displayName || sectionName;
	const displayCanonical = canonicalSectionName(display);
	const nameCanonical = canonicalSectionName(sectionName);
	return {
		name: displayCanonical !== 'unknown' ? displayCanonical : nameCanonical,
		displayName: display,
		headers,
		rows,
	};
}

function normalizeRows(data: unknown, preferredHeaders: string[] = []): Row[] {
	if (!Array.isArray(data)) return [];
	return data
		.map((item) => normalizeRow(item, preferredHeaders))
		.filter((row): row is Row => row !== null);
}

function normalizeRow(item: unknown, preferredHeaders: string[]): Row | null {
	if (isRecord(item)) {
		const row: Row = {};
		const keys = new Set<string>(preferredHeaders);
		for (const key of Object.keys(item)) keys.add(key);
		for (const key of keys) row[key] = coerceRowValue(item[key], key);
		return row;
	}

	if (Array.isArray(item) && preferredHeaders.length > 0) {
		const row: Row = {};
		preferredHeaders.forEach((header, index) => {
			row[header] = coerceRowValue(item[index], header);
		});
		return row;
	}

	return null;
}

function normalizeHeaders(value: unknown): string[] {
	if (!Array.isArray(value)) return [];
	return value.map((item) => String(item).trim()).filter(Boolean);
}

function firstValue(obj: Record<string, unknown>, keys: string[]): unknown {
	for (const key of keys) {
		if (obj[key] !== undefined && obj[key] !== null) return obj[key];
	}
	return undefined;
}

function firstString(obj: Record<string, unknown>, keys: string[]): string | undefined {
	return stringifyOptional(firstValue(obj, keys));
}

function firstStringArray(obj: Record<string, unknown>, keys: string[]): string[] | undefined {
	const value = firstValue(obj, keys);
	if (!Array.isArray(value)) return undefined;
	const strings = value.map((item) => stringifyOptional(item)).filter((item): item is string => item !== undefined);
	return strings.length > 0 ? strings : undefined;
}

function stringifyOptional(value: unknown): string | undefined {
	if (value == null) return undefined;
	if (value instanceof Date) return value.toISOString();
	if (typeof value !== 'string' && typeof value !== 'number' && typeof value !== 'boolean') {
		return undefined;
	}
	const s = String(value).trim();
	return s ? s : undefined;
}

function isRecord(value: unknown): value is Record<string, unknown> {
	return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function basename(path: string): string {
	const parts = path.split('/');
	const name = parts[parts.length - 1] ?? path;
	return name.replace(/\.[^.]+$/, '');
}
