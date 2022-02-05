import { UppercaseLetterRange } from '../uppercase';
import { Range } from '../../number';

export type HexadecimalDigit = `${Range<0, 9> | UppercaseLetterRange<'A', 'F'>}`;
