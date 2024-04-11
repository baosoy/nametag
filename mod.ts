import * as dictionary from "./words.ts";
import { v } from "./deps.ts";
const getRandomWord = (words: string[]) => {
  return words[Math.floor(Math.random() * words.length)];
};

export type NametagConfig = {
  delimiter?: string;
  words?: number;
  categories?: ("animals" | "food" | "adjectives")[];
};

const CATEGORIES = ["adjectives", "animals", "food"];

const inputVal = v.object({
  categories: v.optional(v.array(v.picklist(CATEGORIES)), CATEGORIES),
  words: v.optional(v.number(), 3),
  delimiter: v.optional(v.string(), "-"),
});

const nametag = (config?: NametagConfig) => {
  const { words, categories, delimiter } = v.parse(inputVal, config);
  const output = [];

  for (let i = 1; i <= words ?? 3; i++) {
    if (categories.includes("adjectives")) {
      if (i === 1) {
        output.push(getRandomWord(dictionary.adjectives));
      } else if (i === words) {
        const length = categories.filter((i) => i !== "adjectives").length;
        output.push(
          getRandomWord(
            dictionary[
              categories[
                Math.floor(Math.random() * length)
              ] as keyof typeof dictionary
            ]
          )
        );
      } else {
        output.push(
          getRandomWord(
            dictionary[
              categories[
                Math.floor(Math.random() * categories.length)
              ] as keyof typeof dictionary
            ]
          )
        );
      }
    } else {
      output.push(
        getRandomWord(
          dictionary[
            categories[
              Math.floor(Math.random() * categories.length)
            ] as keyof typeof dictionary
          ]
        )
      );
    }
  }

  return output.join(delimiter);
};

export { nametag };
