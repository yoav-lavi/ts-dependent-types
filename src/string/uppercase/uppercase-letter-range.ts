import { Equals } from '../../shared';
import { UppercaseLetter } from './uppercase-letter';
import { NextUppercaseLetter } from './next-uppercase-letter';

export type UppercaseLetterRange<Start extends UppercaseLetter, End extends UppercaseLetter> = Equals<
  Start,
  End
> extends true
  ? Start
  : Start | UppercaseLetterRange<NextUppercaseLetter<Start>, End>;
