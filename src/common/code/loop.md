将循环次数放在寄存器中，每执行完一次就对寄存器减一。

## 普通 for

大部分语言都支持 c 语言中的 for 循环，称为普通 for，通过 break 和 continue 进行循环的控制。

## while 循环

while 循环来自于 c 语言，也得到了大部分语言的支持。它产生的场景是并不知道循环次数和出口的情况，提供更加可读的代码。

### 迭代器遍历集合

迭代就是指可以从一个数据集中按照一定的顺序，不断取出数据的过程。

迭代器是一种设计模式，它通常被设计成一个接口，用来标识某个对象是否可以被迭代。这将我们的内部实现与外部访问进行了解耦，即便我们将内部存储从数组的形式修改为链表也不会影响外部的使用。

迭代器接口通常有 next、hasNext 方法和 done 标识。

#### js 的 for of 迭代器

js 语言中的迭代器比较特殊，迭代器在 es6 才引入，并且 js 中没有类的概念，所以通过在对象上挂载迭代器方法属性实现对象可迭代。

```javascript
var myIterator = function () {
  var done = false;
  return {
    next: function () {
      if (done) {
        return { value: "done", done: true };
      } else {
        done = true;
        return { value: "hasNext", done: false };
      }
    },
  };
};

var obj = {};
obj[Symbol.iterator] = myIterator;

for (var i of obj) {
  console.log(i);
}
```

### if else 语句

将代码分为多个不同的代码块，在编译时，记录下每个代码块的首地址。运行时，通过比较指令判断跳转到哪一行执行。

### 三元运算符?:

如果代码块里面只有一条语句，则可以将 if else 简写成三元表达式。

### switch

if else 如果分支过多可读性变差，如果分支之间无依赖关系，可以使用 switch 语句。switch 除了让多分支结构更可读外，更重要的是它支持字符串类型（大部分语言支持）。

在 c 系列语言中，switch 在匹配到 case 后，需要 break 才会跳出 switch，这是为了方便多 case 对应一个代码块的情况。现代语言如 swift、go 则有所不同，默认只会命中一个 case，除非使用 fallthrough 特别声明直接继续 执行下一个 case，这里 case 本身的表达式甚至没执行。

switch 中如果所有 case 都不匹配的话，则会命中 default。
