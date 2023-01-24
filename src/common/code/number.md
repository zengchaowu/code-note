数字，是计算机的根本。

## 进制

通过给单个符号所处的位置赋予权重，产生了进制。进制让我们可以通过简单的几个符号加上不同的排列组合方法，表达出几乎所有的数量。人类常用的进制是十进制，一般认为是因为人类有十个手指头。而二进制因为其状态只有 0 和 1，最容易被计算机模拟。

不同进制之间是可以相互转换的，因为不同进制的数字只是每个位置的权重不同。

![ten](./assets/ten.png)

## 整数

整数是离散的，在指定范围内的整数个数是确定的，是**唯一**一种计算机天然能够存储的数据。计算机中的整数有如下特点：

1. 根据所占用的空间大小，可以对整数进行区分。例如 short、int、long 等。
2. 可以通过约定某些位带有固定含义，提供更多类型。例如将第一位约定为符号位用来存储负数。
3. 整数类型一般都有范围，占用空间大小决定了其范围大小，计算只能在一定范围内正确。

## 小数

小数由整数除以进制产生，小数部分只有结合进制才有意义。例如整数 1 在不同进制下表达的数量相同，而 0.1 在不同进制下表达的却不一样。同时小数是连续的，0 到 1 之间的小数是无限的，所以计算机通过精度来控制需要表达的小数的数量。

由于计算机只能存储整数，只能通过赋予不同位不同意义来描述一个小数，一般通过 IEEE754 标准用二进制表示一个小数。IEEE754 提供了**四种**精度标准，最常使用的是**单精度浮点数**和**双精度浮点数**。IEEE754 通过三个部分来描述一个小数，分别为：

1. 符号位，用来表示是正数还是负数，单双精度都只占用 1bit。
2. 偏移指数位，32 位单精度占用 8 位，64 位双精度占用 11 位，用来存储指数部分。
3. 其余为尾数位，32 位单精度 23 位，64 位双精度 52 位。

以 32 位单精度为例

![float](./assets/float.png)

使用这种方法存储的数字都是不精确的，即便是整数。