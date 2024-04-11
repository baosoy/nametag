# NameTag

NameTag is a simple username generator with a dictionary of safe words to use to generate. You can choose the categories of words used when generating, but it also comes with some hard-coded defaults such as always starting with an adjective and ending with a noun.

## How to use

```ts
import { nametag } from "https://deno.land/x/nametag@0.0.1/mod.ts";

const friendlyName = nametag();
```

Or with a configuration:

```ts
import {
  nametag,
  type NametagConfig,
} from "https://deno.land/x/nametag@0.0.1/mod.ts";

const config: NametagConfig = {
  words: 5,
  delimiter: "_",
  categories: ["adjectives", "food"],
};

const friendlyName = nametag(config);
```
