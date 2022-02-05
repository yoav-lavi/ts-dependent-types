import { Equals } from '../../shared';
import { IncrementUnsigned } from './increment-unsigned';

export type RangeUnsigned<Start extends number, End extends number> = Equals<Start, End> extends true
  ? Start
  : Start | RangeUnsigned<IncrementUnsigned<Start>, End>;
