export type PreviousLowercaseLetter<T> = T extends 'z'
  ? 'y'
  : T extends 'y'
  ? 'x'
  : T extends 'x'
  ? 'w'
  : T extends 'w'
  ? 'v'
  : T extends 'v'
  ? 'u'
  : T extends 'u'
  ? 't'
  : T extends 't'
  ? 's'
  : T extends 's'
  ? 'r'
  : T extends 'r'
  ? 'q'
  : T extends 'q'
  ? 'p'
  : T extends 'p'
  ? 'o'
  : T extends 'o'
  ? 'n'
  : T extends 'n'
  ? 'm'
  : T extends 'm'
  ? 'l'
  : T extends 'l'
  ? 'k'
  : T extends 'k'
  ? 'j'
  : T extends 'j'
  ? 'i'
  : T extends 'i'
  ? 'h'
  : T extends 'h'
  ? 'g'
  : T extends 'g'
  ? 'f'
  : T extends 'f'
  ? 'e'
  : T extends 'e'
  ? 'd'
  : T extends 'd'
  ? 'c'
  : T extends 'c'
  ? 'b'
  : T extends 'b'
  ? 'a'
  : never;
