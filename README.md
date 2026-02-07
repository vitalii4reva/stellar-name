# stellar-name

Generate unique slugs from star adjective + named star combinations.

530+ IAU named stars × 200+ stellar adjectives = **100,000+ unique slugs**.

## Install

```bash
npm install stellar-name
```

## Usage

```ts
import { generateSlug, generateUniqueSlug, getRandomStar, getRandomAdjective } from 'stellar-name';

generateSlug();
// => "blazing-sirius"

generateSlug({ adjective: 'ancient' });
// => "ancient-vega"

generateSlug({ star: 'Polaris' });
// => "radiant-polaris"

generateSlug({ separator: '_' });
// => "cosmic_antares"
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
} from 'stars-names';

getRandomStar();        // => "Betelgeuse"
getRandomAdjective();   // => "luminous"
getTotalCombinations(); // => 106530
```

## API

| Function | Description |
|---|---|
| `generateSlug(options?)` | Generate a random slug |
| `generateUniqueSlug(existing, options?)` | Generate a slug not in the `existing` Set |
| `getAllSlugs(separator?)` | Return all possible slug combinations |
| `getRandomStar()` | Random star name |
| `getRandomAdjective()` | Random adjective |
| `getTotalCombinations()` | Total number of possible combinations |

### `SlugOptions`

| Option | Type | Default | Description |
|---|---|---|---|
| `adjective` | `string` | random | Force a specific adjective |
| `star` | `string` | random | Force a specific star name |
| `separator` | `string` | `"-"` | Separator between words |

## License

MIT
