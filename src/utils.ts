const DIACRITICS_MAP: Record<string, string> = {
  'Á': 'A', 'á': 'a', 'À': 'A', 'à': 'a', 'Ã': 'A', 'ã': 'a', 'Â': 'A', 'â': 'a', 'Ä': 'A', 'ä': 'a',
  'É': 'E', 'é': 'e', 'È': 'E', 'è': 'e', 'Ê': 'E', 'ê': 'e', 'Ë': 'E', 'ë': 'e',
  'Í': 'I', 'í': 'i', 'Ì': 'I', 'ì': 'i', 'Î': 'I', 'î': 'i', 'Ï': 'I', 'ï': 'i',
  'Ó': 'O', 'ó': 'o', 'Ò': 'O', 'ò': 'o', 'Ô': 'O', 'ô': 'o', 'Ö': 'O', 'ö': 'o', 'Õ': 'O', 'õ': 'o',
  'Ú': 'U', 'ú': 'u', 'Ù': 'U', 'ù': 'u', 'Û': 'U', 'û': 'u', 'Ü': 'U', 'ü': 'u',
  'Ñ': 'N', 'ñ': 'n', 'Ç': 'C', 'ç': 'c', 'Ž': 'Z', 'ž': 'z', 'Š': 'S', 'š': 's',
  'Ň': 'N', 'ň': 'n', 'Ř': 'R', 'ř': 'r', 'Ť': 'T', 'ť': 't', 'Ď': 'D', 'ď': 'd',
  'ā': 'a', 'ē': 'e', 'ī': 'i', 'ō': 'o', 'ū': 'u',
  'ũ': 'u', 'ĩ': 'i',
};

export function slugify(text: string, separator = '-'): string {
  let result = '';
  for (const char of text) {
    result += DIACRITICS_MAP[char] ?? char;
  }

  return result
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/[\s]+/g, separator)
    .replace(new RegExp(`[${separator}]+`, 'g'), separator)
    .replace(new RegExp(`^${separator}|${separator}$`, 'g'), '');
}

export function randomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

export function randomElement<T>(array: readonly T[]): T {
  return array[randomInt(array.length)];
}
