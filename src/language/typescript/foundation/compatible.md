## 结构化类型

ts 通过结构判断其类型，如果两个类型具有相同结构，尽管其名称不同，但他们的值可以互相赋值。这主要原因是，在 js 中变量是没有类型的，只有值有类型，在进行赋值等操作时，无法直接通过其值而得到其实现了多少个接口，继承自哪个类等信息。只能通过值得到其结构，从而判断是否能够赋值。

```js
class D {
  x: "Nice" = "Nice";
  ask(s: number) {
    return s;
  }
}
class E {
  x: "Nice" = "Nice";
  ask(s: number) {
    return s;
  }
}
let o1 = new D();
let o2 = new E();
o1 = o2;
```

但是，如果其中任何一项有冲突，则当作不同类型，会出现类型不匹配错误。

```js
class D {
  x: "Nice" = "Nice";
  ask(s: number) {
    return s;
  }
}
class E {
  x: "Nice" = "Nice";
  ask(s: string) {
    return s;
  }
}
let o1 = new D();
let o2 = new E();
o1 = o2;
```

## 类型兼容

类似于面相对象语言中的父类型变量能接收子类型的值。ts 中存在如下兼容规则

**对象和接口类型**

子类型值能够被赋值给父类型变量，这里的子类型类似于继承的概念，在父类型的基础上进行拓展。也就是成员多的，可以赋值给成员少的。

**函数类型**

1. 函数的类型由参数和返回值决定，参数少的可以赋值给参数多的，因为函数与对象不同，不存在继承，但是可能会有可选参数等减少函数的参数个数。
2. 同位置的参数类型要兼容，也要适应 ts 的兼容规则。
3. 返回值类型要兼容，与第二点相同。
