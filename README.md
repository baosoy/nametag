# NameTag

NameTag is a simple username generator with a dictionary of safe words to use to generate. You can choose the categories of words used when generating, but it also comes with some hard-coded defaults such as always starting with an adjective and ending with a noun.

## How to use

```ts
<<<<<<< Updated upstream
import { nametag } from "https://deno.land/x/nametag@0.0.2/mod.ts";
=======
import { nametag } from "https://deno.land/x/nametag@0.0.3/mod.ts";
>>>>>>> Stashed changes

const friendlyName = nametag();
```

Or with a configuration:

```ts
import {
  nametag,
  type NametagConfig,
<<<<<<< Updated upstream
} from "https://deno.land/x/nametag@0.0.2/mod.ts";
=======
} from "https://deno.land/x/nametag@0.0.3/mod.ts";
>>>>>>> Stashed changes

const config: NametagConfig = {
  words: 5,
  delimiter: "_",
  categories: ["adjectives", "food"],
};

const friendlyName = nametag(config);
```
