import { assertEquals } from "https://deno.land/std@0.166.0/testing/asserts.ts";
import { palindrome } from "./mod.ts";

Deno.test("Palindrome, simple API.", () => {
  const racecar = palindrome("racecar");
  const hello = palindrome("hello");

  assertEquals(racecar, true);
  assertEquals(hello, false);
});

Deno.test("Palindrome, case insensitive", () => {
  const isPalindrome = palindrome({ text: "RaceCar", caseSensitive: false });

  assertEquals(isPalindrome, true);
});

Deno.test("Palindrome, verbose", () => {
  const { result, reversed } = palindrome({ text: "RaceCar" }, true);

  assertEquals(result, false);
  assertEquals(reversed, "raCecaR");
});
