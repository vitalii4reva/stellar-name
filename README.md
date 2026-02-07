# stellar-name

Generate unique slugs from star adjective + named star combinations.

530+ IAU named stars × 200+ stellar adjectives = **100,000+ unique slugs**.

## Install

```bash
npm install stellar-name
```

## Usage

```ts
import { generate, generateName, generateSlug } from 'stellar-name';

// Get everything at once
generate();
// => { name: "Blazing Sirius", slug: "blazing-sirius", adjective: "blazing", star: "Sirius" }

// Just the name
generateName();
// => "Ancient Vega"

// Just the slug
generateSlug();
// => "cosmic-antares"

// With options
generate({ adjective: 'ancient', star: 'Polaris' });
// => { name: "Ancient Polaris", slug: "ancient-polaris", adjective: "ancient", star: "Polaris" }

generateSlug({ separator: '_' });
// => "radiant_polaris"
```

### Unique slugs

```ts
const used = new Set<string>();

const slug1 = generateUniqueSlug(used);
used.add(slug1);

const slug2 = generateUniqueSlug(used);
used.add(slug2);
```

### Data access

```ts
import {
  NAMED_STARS,
  STAR_ADJECTIVES,
  STAR_ADJECTIVE_CATEGORIES,
  getRandomStar,
  getRandomAdjective,
  getTotalCombinations,
  getAllSlugs,
} from 'stellar-name';

getRandomStar();        // => "Betelgeuse"
getRandomAdjective();   // => "luminous"
getTotalCombinations(); // => 106530
```

## API

| Function | Returns | Description |
|---|---|---|
| `generate(options?)` | `StellarResult` | Name, slug, adjective, and star in one call |
| `generateName(options?)` | `string` | Display name like `"Blazing Sirius"` |
| `generateSlug(options?)` | `string` | Slug like `"blazing-sirius"` |
| `generateUniqueSlug(existing, options?)` | `string` | Slug not in the `existing` Set |
| `getAllSlugs(separator?)` | `string[]` | All possible slug combinations |
| `getRandomStar()` | `string` | Random star name |
| `getRandomAdjective()` | `string` | Random adjective |
| `getTotalCombinations()` | `number` | Total possible combinations |

### `GenerateOptions`

| Option | Type | Default | Description |
|---|---|---|---|
| `adjective` | `string` | random | Force a specific adjective |
| `star` | `string` | random | Force a specific star name |
| `separator` | `string` | `"-"` | Separator between words |

## Author

**Vitalii Petrenko** — [vitalii4reva.com](https://vitalii4reva.com)

## License

MIT
