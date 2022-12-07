js 中的 class，js 中是没有类的，只有一些类似类的工具方法。例如 new 和 instanceof.
但是我们可以通过一些方法模拟面向对象的一些特性。

## 混入 Mixin

混入提供了类似继承的功能，但是其实是相当于将两个对象合并为一个对象。更像是一种组合方式。

## js 对象到底是什么？

```javascript
// 定义对象
var obj1 = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};
console.log(obj1);

var obj2 = Object();
obj2.key1 = "value1";
obj2.key2 = "value2";
obj2.key3 = "value3";
console.log(obj2);

var obj3 = obj1;

console.log(obj1 == obj2); // false
console.log(obj3 == obj1); // true

// javascript 中的主要类型

// 其中，string,number,boolean,null,undefined 为简单基本数据类型。
var string1 = "";
console.log(typeof string1);
var number1 = 1;
var boolean1 = true;
var null1 = null;
console.log(typeof null);
var undefined1 = undefined;
console.log(typeof undefined);
var object1 = Object();

// 函数为特殊的对象类型，是对象的一个子类型。
// 数组也是对象的一种。

// 内置对象
// String Number Boolean Object Function Array Date RegExp Error
// js 中的内置对象，类似于其他语言中的类，但其本质只是一些构造函数而已。用来生成对应类型的子对象。

// 字面量与对象，字面量是语法糖，是用来减少创建对象再赋值的代码。
var string2 = "string2"; // string2 就是字面量
console.log(typeof string2);
var string3 = String("string3");
console.log(typeof String); // 字面量就是语法躺

// js 中的对象与类的区别
// js 对象更像一个 map，内部不能包含方法。方法也必须以 keyvalue 的方式挂载在上面。
var object5 = {
  key: "",
  vaulue: "",
};
```
