export type NextPowerOf2<T extends number> = T extends 2
  ? 4
  : T extends 4
  ? 8
  : T extends 8
  ? 16
  : T extends 16
  ? 32
  : T extends 32
  ? 64
  : T extends 64
  ? 128
  : T extends 128
  ? 256
  : T extends 256
  ? 512
  : T extends 512
  ? 1024
  : T extends 1024
  ? 2048
  : T extends 2048
  ? 4096
  : T extends 4096
  ? 8192
  : T extends 8192
  ? 16384
  : T extends 16384
  ? 32768
  : T extends 32768
  ? 65536
  : T extends 65536
  ? 131072
  : T extends 131072
  ? 262144
  : T extends 262144
  ? 524288
  : T extends 524288
  ? 1048576
  : T extends 1048576
  ? 2097152
  : T extends 2097152
  ? 4194304
  : T extends 4194304
  ? 8388608
  : T extends 8388608
  ? 16777216
  : T extends 16777216
  ? 33554432
  : T extends 33554432
  ? 67108864
  : T extends 67108864
  ? 134217728
  : T extends 134217728
  ? 268435456
  : T extends 268435456
  ? 536870912
  : T extends 536870912
  ? 1073741824
  : T extends 1073741824
  ? 2147483648
  : T extends 2147483648
  ? 4294967296
  : T extends 4294967296
  ? 8589934592
  : T extends 8589934592
  ? 17179869184
  : T extends 17179869184
  ? 34359738368
  : T extends 34359738368
  ? 68719476736
  : T extends 68719476736
  ? 137438953472
  : T extends 137438953472
  ? 274877906944
  : T extends 274877906944
  ? 549755813888
  : T extends 549755813888
  ? 1099511627776
  : T extends 1099511627776
  ? 2199023255552
  : T extends 2199023255552
  ? 4398046511104
  : T extends 4398046511104
  ? 8796093022208
  : T extends 8796093022208
  ? 17592186044416
  : T extends 17592186044416
  ? 35184372088832
  : T extends 35184372088832
  ? 70368744177664
  : T extends 70368744177664
  ? 140737488355328
  : T extends 140737488355328
  ? 281474976710656
  : never;
