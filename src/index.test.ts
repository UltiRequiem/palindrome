import { expect, it } from "vitest";
import { palindrome } from "./index.js";

it("Palindrome, simple API.", () => {
  const racecar = palindrome("racecar");
  const hello = palindrome("hello");

  expect(racecar).toEqual(true);
  expect(hello).toEqual(false);
});

it("Palindrome, case insensitive", () => {
  const isPalindrome = palindrome({ text: "RaceCar", caseSensitive: false });

  expect(isPalindrome).toEqual(true);
});

it("Palindrome, verbose", () => {
  const { result, reversed } = palindrome({ text: "RaceCar" }, true);

  expect(result).toEqual(false);
  expect(reversed).toEqual("raCecaR");
});
