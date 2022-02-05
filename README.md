# ts-dependent-types

An experimental definition of dependent types in TypeScript

# Numbers

## `Increment`

`Increment` takes a number in the range of -24 to 24 and produces a literal of the following number

```ts
type Five = Increment<4>; // 5
```

## `IncrementUnsigned`

`IncrementUnsigned` takes a number in the range of 0 to 48 and produces a literal of the following number

```ts
type FourtyEight = IncrementUnsigned<47>; // 48
```

## `Decrement`

`Decrement` takes a number in the range of -24 to 24 and produces a literal of the previous number

```ts
type Three = Decrement<4>; // 3
```

## `DecrementUnsigned`

`DecrementUnsigned` takes a number in the range of 0 to 48 and produces a literal of the previous number

```ts
type FourtySix = Decrement<47>; // 46
```

## `Digit`

A type corresponding to the range of `0` to `9`

## `Range`

```ts
const logNumberInRange = (value: Range<0, 10>) => console.log(value);

logNumberInRange(9);

logNumberInRange(10);

logNumberInRange(11); // this will error

type SupportedRange = Range<-24, 24>; // -24 | -23 | ... | 24

type UnsupportedRange = Range<0, 100>; // this will error
```

## `RangeUnsigned`

```ts
const logNumberInRange = (value: RangeUnsigned<30, 48>) => console.log(value);

logNumberInRange(35);

logNumberInRange(40);

logNumberInRange(11); // this will error

type SupportedRange = Range<0, 48>; // 0 | 1 | ... | 48

type UnsupportedRange = Range<0, 100>; // this will error
```

## `NextPowerOf2`

```ts
type SomePowerOf2 = NextPowerOf2<4>; // 8
```

## `PowerOf2Range`

```ts
type FourPowersOf2 = PowerOf2Range<4>; // 2 | 4 | 8 | 16

type SupportedPowersOf2 = PowerOf2Range; // 2 | 4 | ... | 281474976710656
```

# Strings

## `Character`

A type corresponding to any printable ASCII character

## `HexadecimalDigit`

```ts
type TwoDigitHexadecimal = `${HexadecimalDigit}${HexadecimalDigit}`; // "00" | "01" | .. | "FF"
```

## `UppercaseLetter`

Any uppercase ASCII letter

## `LowercaseLetter`

Any lowercase ASCII letter

## `Letter`

Any ASCII letter

## `SpecialCharacter`

Any printable special ASCII letter

## `NextUppercaseLetter`

`Increment` takes a `Letter` and produces the follwing letter

```ts
type B = NextUppercaseLetter<'A'>; // "B"
```

## `PreviousUppercaseLetter`

`Increment` takes an `UppercaseLetter` and produces the previous letter

```ts
type A = PreviousUppercaseLetter<'B'>; // "A"
```

## `NextLowercaseLetter`

`Increment` takes a `LowercaseLetter` and produces the previous letter

```ts
type LowercaseB = NextLowercaseLetter<'a'>; // "b"
```

## `PreviousLowercaseLetter`

`Increment` takes an `UppercaseLetter` and produces the previous letter

```ts
type LowercaseA = PreviousLowercaseLetter<'b'>; // "a"
```

## `UppercaseLetterRange`

Produces a range of `UppercaseLetter`s between two given `UppercaseLetter`s

```ts
type AtoD = UppercaseLetterRange<'A', 'D'>; // "A" | "B" | "C" | "D"
```

## `LowercaseLetterRange`

Produces a range of `LowercaseLetter`s between two given `LowercaseLetter`s

```ts
type LowercaseAtoD = LowercaseLetterRange<'a', 'd'>; // "a" | "b" | "c" | "d"
```
