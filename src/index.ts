import { NAMED_STARS, type StarName } from './stars.js';
import { STAR_ADJECTIVES, STAR_ADJECTIVE_CATEGORIES, type StarAdjective } from './adjectives.js';
import { slugify, randomElement } from './utils.js';

export interface SlugOptions {
  adjective?: string;
  star?: string;
  separator?: string;
}

export function generateSlug(options: SlugOptions = {}): string {
  const { separator = '-' } = options;
  const adjective = options.adjective ?? randomElement(STAR_ADJECTIVES);
  const star = options.star ?? randomElement(NAMED_STARS);

  return `${slugify(adjective, separator)}${separator}${slugify(star, separator)}`;
}

export function generateUniqueSlug(
  existing: Set<string>,
  options: Omit<SlugOptions, 'adjective' | 'star'> = {},
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
