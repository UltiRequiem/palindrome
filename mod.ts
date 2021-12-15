export function naivePalindrome(text: string) {
  return text.split("").reverse().join("") === text;
}

export default function palindrome(text: string) {
  for (let i = 0; i < Math.floor(text.length / 2); i++) {
    if (text[i] !== text[text.length - 1 - i]) {
      return false;
    }
  }

  return true;
}
