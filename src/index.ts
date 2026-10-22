export interface PalindromeOptions {
  text: string;
  caseSensitive?: boolean;
}

export interface PalindromeResult {
  result: boolean;
  reversed: string;
}

export function palindrome(options: PalindromeOptions | string): boolean;
export function palindrome(
  options: PalindromeOptions | string,
  verbose: boolean,
): PalindromeResult;
export function palindrome(
  options: PalindromeOptions | string,
  verbose = false,
) {
  if (typeof options === "string") {
    options = { text: options };
  }

  const { caseSensitive = true } = options;

  let { text } = options;

  if (!caseSensitive) {
    text = text.toLowerCase();
  }

  const reversed = [...text].reverse().join("");
  const result = text === reversed;

  if (verbose) {
    return { reversed, result };
  }

  return result;
}
