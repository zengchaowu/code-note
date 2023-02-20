# 新增类型

## 联合

将多种类型进行联合取并集

```js
number | string;
```

## 数组

基础语法为，类型[]，例如：

```js
number[]、 string[]
```

联合类型的数组：

```js
(number | string)[]
```

也可以使用泛型的方式：

```js
Array<string> 或者 Array<number|string>
```

## 别名

当一个自定义类型被多处使用时，可以使用类型别名简化书写。

```js
type MyType = number | string;
```

## 函数类型

语法基本与其他语言相同

```js
const add(x: number): number {
  return x + 1;
}

const add: (x: number) => number = (x) => x + 1;
```

第二个 add 的类型就是其函数的类型

## 对象类型

类似于直接声明一个只包含声明和类型注解的对象

```js
let x: { name: string, age: number, speak: (x: number, y: number) => number };
```

## 接口类型

对于对象或者类，我们可以定义一个接口来描述。

```js
interface x {
  name: string;
  age: number;
  speak: (x: number, y: number) => number;
}
```

**interface 和类型别名的主要区别**

interface 与其他语言中的概念更类似，用于描述一个对象的结构，type 没有那么语意化。接口可以实现继承，type 无法被 extends。

```js
interface x {}
interface y extends x {}
```

## 元组类型

确定数量和顺序的多个类型的组合。

```js
type x = [number, string];
```

需要注意元组的书写方式很容易和数组混淆，数组的类型是写在中括号前面的。

## 类型断言

强制为对象指定类型。

```js
let x: number;

(x as unknown as string).length

```

## 字面量类型

const 通过类型来提示数据变化，例如：

```js
const str1: "Hello TS" = "Hello TS";
```

str1 的类型为字符串"Hello TS"，常常被用于其他组合类型。

```js
type One = "up" | "down";
type Two = 18 | "up";
```

## 枚举类型

语法与 c 语言相同，枚举会被编译成一个对象。

```js
enum Direction {
  Up,
  Down
}
```

## any 类型

对此变量不限制类型时，可以使用 any，此时不会进行任何类型推断。
