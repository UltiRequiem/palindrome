import { palindrome } from "./mod.ts";

console.log(palindrome("racecar"));
console.log(palindrome("Lol"));
console.log(palindrome({ text: "LoL", caseSensitive: false }));
console.log(palindrome("hero", true));
