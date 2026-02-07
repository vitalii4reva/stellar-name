# Changelog

## [1.1.0] - 2025-02-07

### Added

- `generate()` — returns `{ name, slug, adjective, star }` in one call
- `generateName()` — returns display name like `"Blazing Sirius"`
- `StellarResult` and `GenerateOptions` exported types
- 15 new stellar adjectives: `chromatic`, `collapsing`, `convective`, `eclipsing`, `flickering`, `helium`, `hydrogen`, `infrared`, `oscillating`, `receding`, `spectral`, `superluminal`, `ultraviolet`, `x-ray`
- `STAR_ADJECTIVE_CATEGORIES` expanded with `spectrum` and `composition` groups

## [1.0.0] - 2025-02-07

### Added

- Initial release
- `generateSlug()` — random slug from adjective + star name
- `generateUniqueSlug()` — guaranteed unique slug
- `getAllSlugs()` — all possible combinations
- `getRandomStar()`, `getRandomAdjective()`, `getTotalCombinations()`
- 530+ IAU named stars, 185+ stellar adjectives
- Dual CJS/ESM build with TypeScript types
