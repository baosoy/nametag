import { assertEquals } from "https://deno.land/std@0.163.0/testing/asserts.ts";
import { describe, it } from "https://deno.land/std@0.163.0/testing/bdd.ts";
import * as dictionary from "./words.ts";
import { nametag } from "./mod.ts";

const config = describe({ name: "Configuration options" });

it(config, "uses the correct number of words when passed in the config", () => {
  const output = nametag({ words: 10 });

  assertEquals(output.split("-").length, 10, "should equal 10.");
});

it(config, "uses the provided delimiter", () => {
  const output = nametag({ delimiter: "_" });
  assertEquals(output.includes("_"), true);
});

it(config, "uses only the provided dictionaries", () => {
  const output = nametag({ categories: ["animals"] });

  const words = output.split("-");
  words.map((word) => {
    assertEquals(dictionary.adjectives.includes(word), false);
    assertEquals(dictionary.food.includes(word), false);
  });
});

it(config, "can set all options at once", () => {
  const output = nametag({
    words: 2,
    categories: ["adjectives"],
    delimiter: "_",
  });
  assertEquals(output.includes("_"), true);
  assertEquals(output.split("_").length, 2);

  const words = output.split("-");
  words.map((word) => {
    assertEquals(dictionary.animals.includes(word), false);
    assertEquals(dictionary.food.includes(word), false);
  });
});
