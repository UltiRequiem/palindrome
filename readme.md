# palindrome

> A word, phrase, or sequence that reads the same backward as forward.

## Usage

```typescript
import randomItem, {
  randomMultipleItems,
} from "https://deno.land/x/random_item/mod.ts";

randomItem(["🐴", "🦄", "🌈"]);
//=> '🦄'

randomMultipleItems(["🐴", "🦄", "🌈"], 2);
//=> ['🌈', '🦄']
```

## License

This project is licensed under the [MIT License](./license).
