将循环次数放在寄存器中，每执行完一次就对寄存器减一。

## 普通 for

大部分语言都支持 c 语言中的 for 循环，称为普通 for，通过 break 和 continue 进行循环的控制。

## while 循环

while 循环来自于 c 语言，也得到了大部分语言的支持。它产生的场景是并不知道循环次数和出口的情况，提供更加可读的代码。

## 迭代器遍历集合

迭代就是指可以从一个数据集中按照一定的顺序，不断取出数据的过程。

迭代器是一种设计模式，它通常被设计成一个接口，用来标识某个对象是否可以被迭代。这将我们的内部实现与外部访问进行了解耦，即便我们将内部存储从数组的形式修改为链表也不会影响外部的使用。

迭代器接口通常有 next、hasNext 方法和 done 标识。

### js 的 for of 迭代器

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

## 跳出循环

### break

普通 for 和 while 都可以通过 break 跳出当前循环。

### return

return 用于函数体内，用于结束当前函数调用栈。在部分语言中，使用 return 跳出当前迭代。

### goto

在支持 goto 的语言中，可以使用 goto 跳出循环。

### 抛出异常

在迭代器中，如果语言本身没有提供中断迭代的方式，可以通过抛出异常进行跳出。
