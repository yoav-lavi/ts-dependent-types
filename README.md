# ts-dependent-types

An experimental collection of dependent type definitions in TypeScript

[Dependent types](https://en.wikipedia.org/wiki/Dependent_type) are types that rely on the value of variables rather than only on types. These can be useful to further restrict contracts. 

For example: 

> Given a function that retries and operation, we want to limit the number of retries to a range of 1 to 5

TypeScript supports a limited number of members for a single union and a limited recursion depth, so these types have some limitations if used in conjunction (e.g. a YYYY-MM-DD template string would be well over the limit). This is also the reasoning for some of the provided ranges of numbers. One of the [changes](https://github.com/microsoft/TypeScript/pull/44997) for TypeScript 4.6.1 will allow to change this limit.

# Usage

```ts
import { Range } from "ts-dependent-types";

const logNumberInRange = (value: Range<0, 10>) => console.log(value);
```

```ts
type TwoDigitHexadecimal = `${HexadecimalDigit}${HexadecimalDigit}`; // "00" | "01" | .. | "FF"

const x64AssemblyCallInstruction: TwoDigitHexadecimal = "FF";
```

# Exports

## Numbers

### `Increment`

`Increment` takes a number in the range of -24 to 24 and produces a literal of the following number

```ts
type Five = Increment<4>; // 5
```

### `IncrementUnsigned`

`IncrementUnsigned` takes a number in the range of 0 to 48 and produces a literal of the following number

```ts
type FourtyEight = IncrementUnsigned<47>; // 48
```

### `Decrement`

`Decrement` takes a number in the range of -24 to 24 and produces a literal of the previous number

```ts
type Three = Decrement<4>; // 3
```

### `DecrementUnsigned`

`DecrementUnsigned` takes a number in the range of 0 to 48 and produces a literal of the previous number

```ts
type FourtySix = Decrement<47>; // 46
```

### `Digit`

A type corresponding to the range of `0` to `9`

### `Range`

```ts
const logNumberInRange = (value: Range<0, 10>) => console.log(value);

logNumberInRange(9);

logNumberInRange(10);

logNumberInRange(11); // this will error

type SupportedRange = Range<-24, 24>; // -24 | -23 | ... | 24

type UnsupportedRange = Range<0, 100>; // this will error
```

### `RangeUnsigned`

```ts
const logNumberInRange = (value: RangeUnsigned<30, 48>) => console.log(value);

logNumberInRange(35);

logNumberInRange(40);

logNumberInRange(11); // this will error

type SupportedRange = RangeUnsigned<0, 48>; // 0 | 1 | ... | 48

type UnsupportedRange = RangeUnsigned<0, 100>; // this will error
```

### `NextPowerOf2`

```ts
type SomePowerOf2 = NextPowerOf2<4>; // 8
```

### `PowerOf2Range`

```ts
type FourPowersOf2 = PowerOf2Range<4>; // 2 | 4 | 8 | 16

type SupportedPowersOf2 = PowerOf2Range; // 2 | 4 | ... | 281474976710656
```

## Strings

### `Character`

A type corresponding to any printable ASCII character

### `HexadecimalDigit`

```ts
type TwoDigitHexadecimal = `${HexadecimalDigit}${HexadecimalDigit}`; // "00" | "01" | .. | "FF"
```

### `UppercaseLetter`

Any uppercase ASCII letter

### `LowercaseLetter`

Any lowercase ASCII letter

### `Letter`

Any ASCII letter

### `SpecialCharacter`

Any printable special ASCII letter

### `NextUppercaseLetter`

`Increment` takes a `Letter` and produces the follwing letter

```ts
type B = NextUppercaseLetter<'A'>; // "B"
```

### `PreviousUppercaseLetter`

`Increment` takes an `UppercaseLetter` and produces the previous letter

```ts
type A = PreviousUppercaseLetter<'B'>; // "A"
```

### `NextLowercaseLetter`

`Increment` takes a `LowercaseLetter` and produces the previous letter

```ts
type LowercaseB = NextLowercaseLetter<'a'>; // "b"
```

### `PreviousLowercaseLetter`

`Increment` takes an `UppercaseLetter` and produces the previous letter

```ts
type LowercaseA = PreviousLowercaseLetter<'b'>; // "a"
```

### `UppercaseLetterRange`

Produces a range of `UppercaseLetter`s between two given `UppercaseLetter`s

```ts
type AtoD = UppercaseLetterRange<'A', 'D'>; // "A" | "B" | "C" | "D"
```

### `LowercaseLetterRange`

Produces a range of `LowercaseLetter`s between two given `LowercaseLetter`s

```ts
type LowercaseAtoD = LowercaseLetterRange<'a', 'd'>; // "a" | "b" | "c" | "d"
```

# Prior Art

(TODO: add links and examples)
