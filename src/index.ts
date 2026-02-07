import { NAMED_STARS, type StarName } from './stars.js';
import { STAR_ADJECTIVES, STAR_ADJECTIVE_CATEGORIES, type StarAdjective } from './adjectives.js';
import { slugify, randomElement } from './utils.js';

export interface GenerateOptions {
  adjective?: string;
  star?: string;
  separator?: string;
}

export interface StellarResult {
  name: string;
  slug: string;
  adjective: string;
  star: string;
}

function pickParts(options: GenerateOptions = {}) {
  const adjective = options.adjective ?? randomElement(STAR_ADJECTIVES);
  const star = options.star ?? randomElement(NAMED_STARS);
  return { adjective, star };
}

function titleCase(text: string): string {
  return text.replace(/\b\w/g, (c) => c.toUpperCase());
}

export function generate(options: GenerateOptions = {}): StellarResult {
  const { separator = '-' } = options;
  const { adjective, star } = pickParts(options);

  return {
    name: `${titleCase(adjective)} ${star}`,
    slug: `${slugify(adjective, separator)}${separator}${slugify(star, separator)}`,
    adjective,
    star,
  };
}

export function generateName(options: Omit<GenerateOptions, 'separator'> = {}): string {
  const { adjective, star } = pickParts(options);
  return `${titleCase(adjective)} ${star}`;
}

export function generateSlug(options: GenerateOptions = {}): string {
  const { separator = '-' } = options;
  const { adjective, star } = pickParts(options);
  return `${slugify(adjective, separator)}${separator}${slugify(star, separator)}`;
}

export function generateUniqueSlug(
  existing: Set<string>,
  options: Omit<GenerateOptions, 'adjective' | 'star'> = {},
): string {
  const totalCombinations = STAR_ADJECTIVES.length * NAMED_STARS.length;
  if (existing.size >= totalCombinations) {
    throw new Error('All possible slug combinations have been exhausted');
  }

  let slug: string;
  do {
    slug = generateSlug(options);
  } while (existing.has(slug));

  return slug;
}

export function getAllSlugs(separator = '-'): string[] {
  const slugs: string[] = [];
  for (const adjective of STAR_ADJECTIVES) {
    for (const star of NAMED_STARS) {
      slugs.push(`${slugify(adjective, separator)}${separator}${slugify(star, separator)}`);
    }
  }
  return slugs;
}

export function getRandomStar(): StarName {
  return randomElement(NAMED_STARS);
}

export function getRandomAdjective(): StarAdjective {
  return randomElement(STAR_ADJECTIVES);
}

export function getTotalCombinations(): number {
  return STAR_ADJECTIVES.length * NAMED_STARS.length;
}

export { NAMED_STARS, STAR_ADJECTIVES, STAR_ADJECTIVE_CATEGORIES };
export type { StarName, StarAdjective };
