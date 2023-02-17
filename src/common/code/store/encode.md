---
title: 编码
---

编码，数字的蜕变。

## 编码

所有数据在计算中存储的都是二进制，其中将二进制与数据相互转换的过程就是编解码，这个过程有很多种规则，每种规则就对应着一个编码方式。

## 字符编码

**详见字符章节**

## base64

Base64 编码将二进制数据转换为 ASCII 字符集中的可打印字符，使用 64 个字符来表示任意二进制数据。

**规则**

1. 将二进制数据从前往后每 3 个字节分成一组，每个字节占 8 位，即一组 24 位二进制数据。
2. 将这 24 位二进制数据分成 4 组，每组 6 位。
3. 将每组 6 位二进制数据转换为相应的可打印字符，0-25 用 A-Z 表示， 26-51 用 a-z 表示， 52-61 用 0-9 表示， 62 用+表示，
   63 用/表示。
4. 如果最后一组只有 1 个字节，会在末尾添加两个用于填充的“=”，如果最后一组只有 2 个字节，则在末尾添加一个“=”，如果没有多余的字节，则不需要填充。

**局限**

1. Base64 编码后的数据长度会比原始二进制数据长度增加约 33%。这意味着对于大型二进制数据，Base64 编码会占用更多的存储空间。
2. 不适合直接在 url 中作为参数传递，因为'='和'/'在 url 中代表着特殊含义，直接拼接在 url 中可能导致 url 解析失败。通常的解决方法是使用一种 url 适配的 base64，其原理是将'='和'/'替换为'-'和'\_'。

## urlencode

**url 中允许出现的字符**

包括 ASCII 字符集中的可打印字符和一些保留字符，

1. 大小写字母：AZ、az
2. 数字：0~9
3. 连字符：-
4. 下划线：\_
5. 句点：.
6. 波浪线：~
7. 保留字符：!、\*、'、(、)、;、:、@、&、=、+、$、,、/、?、#、[、]、%

**规则**

在允许范围内的字符，则需要通过一种方式转换为允许范围的字符的组合。这个转换方式就是 urlencode，其规则如下：

1. 范围内非保留字符不修改
2. 对于安全范围外的所有字符和保留字符，都会先转换为它们对应的 ASCII 码值，然后再将 ASCII 码值转换为%xx 的形式，其中 xx 表示 ASCII 码值的 16 进制表示。
3. 多字节字符，例如中文，会依照 utf-8 得到其多字节二进制表示，对每个字节参照第二点进行 urlencode。

## HTML 实体编码

在解释语言中，源代码通常与其他普通字符混合在一起，以 html 为例，"\<div\> \<div\> \</div\>"，有时候中间的'\<div\>'是在后端根据用户输入进行拼接的，这样的代码直接交给浏览器进行解析，浏览器会解析失败。

所以，需要有一种方法，将代码和普通文本区分开来，通常与代码的解析规则有关。

在针对 HTML 的场景下，使用的是 HTML 实体编码。一种将特殊字符转换为 HTML 实体的编码方式，它将特殊字符替换为类似 &lt; 和 &gt; 的字符串，这些字符串被称为 HTML 实体，浏览器会将它们解析为对应的特殊字符，从而避免 HTML 代码被误解释。

实体编码是一张表，上面讲一个字符和多个字符进行一一映射。这个表上面有很多字符，在实际开发中，我们通常可以只转换其中的部分字符，如 '\<' '\>'。