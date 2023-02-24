# 新增类型

## 联合

将多种类型进行联合取并集

```js
number | string;
```

## 交叉

交叉类型是指由多个类型组合而成的类型，它表示一个值具有多种类型的成员。交叉类型是将多个类型合并为一个类型，而不是在这些类型之间取交集。

```js
{ a: string } & { b: string };
```

**交叉类型与多接口继承**

多接口继承中，如果多接口中同名方法出现冲突，需要自己在实现中同时兼容多接口。交叉则会将冲突部分的类型改成它们的联合类型。

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

## 索引查询类型

可以通过索引获取对象的成员类型

```js
type Person = {
  name: string,
  age: number,
  gender: string,
};
let y: Person["name" | "age"] = "string";
```

## 索引约束类型

通过索引约束，可以对索引的类型进行约束，而不是对其个数和名词。

例如，使用如下方式约束对象的键，可以约束对象的所有属性必须为 string，并且值为数字。

```js
interface AnyObject {
  [key: string]: number;
}
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

语法与 c 语言相同，但是枚举运行时会被编译成一个对象。可以使用数字，字符串和常量以及它们混合进行枚举定义。

```js
enum Direction {
  Up,
  Down
}
```

## any 类型

对变量不限制类型时，可以使用 any，此时不会进行任何类型推断。any 类型可以被任意类型赋值，也可以赋值给任意类型。TypeScript 中的类型注解是可选的。若一个值没有明确的类型注解，编译器又无法自动推断出它的类型，那么这个值的默认类型为 any 类型。

## unknown 类型

任何其他类型都能够赋值给 unknown 类型，该行为与 any 类型是一致的。但 unknown 类型只允许赋值给 any 类型和 unknown 类型，而不允许赋值给任何其他类型，该行为与 any 类型是不同的。同时，在 unknown 类型上也不允许执行绝大部分操作，这也与 any 类型不同。

## never 类型

never 类型是所有其他类型的子类型。所以，never 类型允许赋值给任何类型，尽管并不存在 never 类型的值。除 never 类型自身外，所有其他类型都不能够赋值给 never 类型。

## ts 中的 typeof

ts 中的类型存在于类型声明空间中，而不是变量声明空间。所以，我们无法将一个类型赋值给一个变量。但有时我们需要获取某一个变量的类型声明，而不是其值类型。ts 对 typeof 语法进行了拓展，当 typeof 出现在指定位置时，编译器会去获取变量的类型声明。

typeof 出现在类型声明的位置，会被当作获取变量的类型声明，如果在其他位置，则会被当作普通的 typeof，获取的是变量的值类型。

## 从已有类型创建新类型

### keyof 和 key in

keyof 获取某个对象所有的键的字面量的联合类型。

```js
type Person = {
  name: string;
  age: number;
  gender: string;
}
let x: keyof Person = 'name'
```

key in 遍历联合类型，结合索引约束类型生成一个有确定键和值类型的新类型。

```js
type PersonKeys = 'x' | 'y' | 'z'
type x2 = { [key in PersonKeys] : number}
```

key in 和 keyof 结合，遍历接口类型中所有的键。

```js
interface I {
    x: number
    y: string
    z: symbol
}
type o2 = {
    [key in keyof I]: number
}

```
