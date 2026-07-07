import { parseYaml as parseObsidianYaml } from 'obsidian';
import { Report, ReportMetadata } from '../types';
import { applyFilterMetadata, parseDate, parseDateRangeText } from '../utils';
import { parseMarkdownBody } from './markdown';
import { reportFromYamlData } from './yaml';

export function parseObsidian(content: string, path: string): Report {
	const { frontmatter, body, isObsidianFormat } = extractFrontmatter(content);

	if (isObsidianFormat && containsReportSections(frontmatter)) {
		return reportFromYamlData(frontmatter, path, 'obsidian');
	}

	const metadata: ReportMetadata = buildMetadataFromFrontmatter(frontmatter, path);
	return parseMarkdownBody(body, path, isObsidianFormat ? 'obsidian' : 'markdown', metadata);
}

type Frontmatter = Record<string, unknown>;

function extractFrontmatter(content: string): {
	frontmatter: Frontmatter;
	body: string;
	isObsidianFormat: boolean;
} {
	const lines = content.split(/\r?\n/);
	if (lines[0]?.trim() !== '---') {
		return { frontmatter: {}, body: content, isObsidianFormat: false };
	}
	let end = -1;
	for (let i = 1; i < lines.length; i++) {
		if (lines[i]?.trim() === '---') { end = i; break; }
	}
	if (end === -1) return { frontmatter: {}, body: content, isObsidianFormat: false };

	const frontmatterText = lines.slice(1, end).join('\n');
	const body = lines.slice(end + 1).join('\n');
	return {
		frontmatter: parseFrontmatter(frontmatterText),
		body,
		isObsidianFormat: true,
	};
}

function parseFrontmatter(frontmatterText: string): Frontmatter {
	try {
		const parsed = parseObsidianYaml(frontmatterText) as unknown;
		return isRecord(parsed) ? parsed : {};
	} catch (err) {
		console.warn('[time.md] Failed to parse Obsidian frontmatter YAML', err);
		return {};
	}
}

function containsReportSections(frontmatter: Frontmatter): boolean {
	const sections = frontmatter.sections;
	if (Array.isArray(sections)) {
		return sections.some(
			(section) =>
				isRecord(section) &&
				('data' in section || 'rows' in section || 'items' in section || 'headers' in section),
		);
	}
	if (isRecord(sections)) return Object.keys(sections).length > 0;
	return false;
}

function buildMetadataFromFrontmatter(fm: Frontmatter, path: string): ReportMetadata {
	const metaSource = isRecord(fm.metadata) ? fm.metadata : fm;
	const meta: ReportMetadata = {
		title: stringifyOptional(metaSource.title) ?? stringifyOptional(fm.title) ?? basename(path),
	};

	meta.generatedAt = parseDate(firstValue(metaSource, ['date', 'created', 'generated_at', 'generatedAt']));
	meta.destination = stringifyOptional(firstValue(metaSource, ['destination']));
	meta.filters = stringifyOptional(firstValue(metaSource, ['filters']));
	meta.granularity = stringifyOptional(firstValue(metaSource, ['granularity']));
	meta.timezone = stringifyOptional(firstValue(metaSource, ['timezone']));
	meta.schemaVersion = stringifyOptional(firstValue(metaSource, ['schema_version', 'schemaVersion']));

	const totalHours = firstValue(metaSource, ['total_hours', 'totalHours']);
	if (typeof totalHours === 'number') meta.totalHours = totalHours;
	const totalMinutes = firstValue(metaSource, ['total_minutes', 'totalMinutes']);
	if (typeof totalMinutes === 'number') meta.totalMinutes = totalMinutes;

	meta.topApps = stringArray(firstValue(metaSource, ['top_apps', 'topApps']));
	meta.tags = stringArray(firstValue(metaSource, ['tags']));

	const rangeValue = firstValue(metaSource, ['date_range', 'dateRange']);
	if (isRecord(rangeValue)) {
		meta.dateRangeStart = parseDate(firstValue(rangeValue, ['start', 'from']));
		meta.dateRangeEnd = parseDate(firstValue(rangeValue, ['end', 'to']));
	} else if (rangeValue !== undefined) {
		const range = parseDateRangeText(rangeValue);
		meta.dateRangeStart = range.start;
		meta.dateRangeEnd = range.end;
	}

	meta.dateRangeStart =
		parseDate(firstValue(metaSource, ['date_range_start', 'dateRangeStart'])) ?? meta.dateRangeStart;
	meta.dateRangeEnd =
		parseDate(firstValue(metaSource, ['date_range_end', 'dateRangeEnd'])) ?? meta.dateRangeEnd;

	applyFilterMetadata(meta);
	return meta;
}

function firstValue(obj: Record<string, unknown>, keys: string[]): unknown {
	for (const key of keys) {
		if (obj[key] !== undefined && obj[key] !== null) return obj[key];
	}
	return undefined;
}

function stringArray(value: unknown): string[] | undefined {
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
