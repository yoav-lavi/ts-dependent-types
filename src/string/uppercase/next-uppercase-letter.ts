export type NextUppercaseLetter<T> = T extends 'A'
  ? 'B'
  : T extends 'B'
  ? 'C'
  : T extends 'C'
  ? 'D'
  : T extends 'D'
  ? 'E'
  : T extends 'E'
  ? 'F'
  : T extends 'F'
  ? 'G'
  : T extends 'G'
  ? 'H'
  : T extends 'H'
  ? 'I'
  : T extends 'I'
  ? 'J'
  : T extends 'J'
  ? 'K'
  : T extends 'K'
  ? 'L'
  : T extends 'L'
  ? 'M'
  : T extends 'M'
  ? 'N'
  : T extends 'N'
  ? 'O'
  : T extends 'O'
  ? 'P'
  : T extends 'P'
  ? 'Q'
  : T extends 'Q'
  ? 'R'
  : T extends 'R'
  ? 'S'
  : T extends 'S'
  ? 'T'
  : T extends 'T'
  ? 'U'
  : T extends 'U'
  ? 'V'
  : T extends 'V'
  ? 'W'
  : T extends 'W'
  ? 'X'
  : T extends 'X'
  ? 'Y'
  : T extends 'Y'
  ? 'Z'
  : never;
