# palindrome

A word, phrase, or sequence that reads the same backward as forward.

[![npm](https://img.shields.io/npm/v/@ultirequiem/palindrome?logo=npm&color=cb3837)](https://www.npmjs.com/package/@ultirequiem/palindrome)
[![npm downloads](https://img.shields.io/npm/dm/@ultirequiem/palindrome?color=cb3837)](https://www.npmjs.com/package/@ultirequiem/palindrome)
[![CI](https://github.com/UltiRequiem/palindrome/actions/workflows/ci.yaml/badge.svg)](https://github.com/UltiRequiem/palindrome/actions/workflows/ci.yaml)
[![codecov](https://codecov.io/gh/UltiRequiem/palindrome/graph/badge.svg)](https://codecov.io/gh/UltiRequiem/palindrome)

## Install

```sh
npm install @ultirequiem/palindrome
```

## Usage

ESM only, types included: the same import works in Node.js, Bun and browsers.

```javascript
import { palindrome } from "@ultirequiem/palindrome";

palindrome("racecar"); //=> true
palindrome("Lol"); //=> false
palindrome({ text: "LoL", caseSensitive: false }); //=> true
palindrome("hero", true); //=> { reversed: "oreh", result: false }
```

## Support

Open an Issue, I will check it as soon as possible 👀

If you want to hurry me up a bit
[send me a tweet](https://twitter.com/UltiRequiem) 😆

Don't forget to star the repo ⭐

## Versioning

We use [Semantic Versioning](http://semver.org). For the versions available, see
the [tags](https://github.com/UltiRequiem/palindrome/tags) 🏷️

## Authors

[Eliaz Bobadilla](https://ultirequiem.com) - Creator and Maintainer 💪

See also the full list of
[contributors](https://github.com/UltiRequiem/palindrome/contributors) who
participated in this project ✨

## Licence

Licensed under the MIT License 📄
