import { Equals } from '../../shared';
import { Increment } from './increment';

export type Range<Start extends number, End extends number> = Equals<Start, End> extends true
  ? Start
  : Start | Range<Increment<Start>, End>;
