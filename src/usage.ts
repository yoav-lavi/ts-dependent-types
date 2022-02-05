import {
  HexadecimalDigit,
  Letter,
  SpecialCharacter,
  PowerOf2Range,
  Range,
  UppercaseLetterRange,
  LowercaseLetterRange,
} from './index';

type SomePowersOf2 = PowerOf2Range<4>; // 2 | 4 | 8 | 16

type SupportedPowersOf2 = PowerOf2Range; // 2 | 4 | ... | 281474976710656

const logNumberInRange = (value: Range<0, 10>) => console.log(value);

logNumberInRange(9);

logNumberInRange(10);

// @ts-expect-error
logNumberInRange(11); // this will error

// Math.random returns 0..<1, multiplying by 10 and flooring will give us a 0..9 range number
const randomInRange = Math.floor(Math.random() * 10) as Range<0, 9>;

logNumberInRange(randomInRange);

let supportedRange: Range<-24, 24>; // -24 | -23 | ... | 24

// @ts-expect-error
let unsupportedRange: Range<0, 100>; // this will error

type AtoD = UppercaseLetterRange<'A', 'D'>; // "A" | "B" | "C" | "D"

type AtoDLowercase = LowercaseLetterRange<'a', 'd'>; // "a" | "b" | "c" | "d"

type SomeString = `${SpecialCharacter}${Letter}`; // " A" | " B" | ... | "~z"

type TwoDigitHexadecimal = `${HexadecimalDigit}${HexadecimalDigit}`; // "00" | "01" | .. | "FF"
