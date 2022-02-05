import { DecrementUnsigned } from '../unsigned';
import { Equals } from '../../shared';
import { NextPowerOf2 } from './next-power-of-2';

export type PowerOf2Range<Times extends number = 48, T extends number = 2> = Equals<Times, 1> extends true
  ? T
  : T | PowerOf2Range<DecrementUnsigned<Times>, NextPowerOf2<T>>;
