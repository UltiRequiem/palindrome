import { assert } from "https://deno.land/std@0.117.0/testing/asserts.ts";

import { NOT_PALINDROME, PALINDROME } from "./test_data.ts";
import palindrome from "./mod.ts";

Deno.test("palindrome", () => {
  PALINDROME.forEach((word) => assert(palindrome(word)));
});

Deno.test("not palindrome", () => {
  NOT_PALINDROME.forEach((word) => assert(!palindrome(word)));
});
