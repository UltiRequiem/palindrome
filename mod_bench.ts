import {
  bench,
  runBenchmarks,
} from "https://deno.land/std@0.117.0/testing/bench.ts";

import palindrome, { naivePalindrome } from "./mod.ts";
import { PALINDROME } from "./test_data.ts";

bench({
  name: "palindrome",
  runs: 10000,
  func(b) {
    b.start();
    PALINDROME.forEach((word) => palindrome(word));
    b.stop();
  },
});

bench({
  name: "naivePalindrome",
  runs: 10000,
  func(b) {
    b.start();
    PALINDROME.forEach((word) => naivePalindrome(word));
    b.stop();
  },
});

runBenchmarks();
