import { Equals } from '../../shared';
import { LowercaseLetter } from './lowercase-letter';
import { NextLowercaseletter } from './next-lowercase-letter';

export type LowercaseLetterRange<Start extends LowercaseLetter, End extends LowercaseLetter> = Equals<
  Start,
  End
> extends true
  ? Start
  : Start | LowercaseLetterRange<NextLowercaseletter<Start>, End>;
