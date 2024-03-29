## 泛型

泛型最早出现在强类型语言中，用来提供一个弱类型。因为在很多算法和数据结构中，都能够处理多种数据类型。这时候如果限制为某一个具体类型，则会导致冗余代码的产生。

## ts 中的泛型

ts 中泛型常用于 class 和 function 中，用于约束参数或者属性的类型。

## 约束泛型

泛系不加约束的话，基本相当于 any 类型，但是在表现上则类似于 none 类型，对声明为泛型的参数读取任何属性都会编译器警告。这样我们就无法在编译阶段对类型进行检查。在某些场景下，我们还是希望能收缩一下泛型的范围，例如实现了某些接口的类型，拥有某个属性或者方法的类型。这样能够给编译器提供更多信息。

## extends 约束

extends 用于收缩泛型到接口级别，这样能够告知编译器，类型必须符合某个结构。extends 可以用于联合类型，用于声明是属于联合类型的子集。

## 泛型工具

泛型工具是指在类型系统中使用的一系列特殊类型，这些类型可以用来创建和操作其他类型，从而提高代码的可重用性和类型安全性。

以下是 TypeScript 中常见的泛型工具及其作用：

1. Partial\<T\>：将类型 T 中的所有属性设置为可选属性；
2. Required\<T\>：将类型 T 中的所有属性设置为必选属性；
3. Pick\<T, K\>：从类型 T 中选取部分属性 K 组成新的类型；
4. Omit\<T, K\>：从类型 T 中排除部分属性 K 组成新的类型；
5. Exclude\<T, U\>：从类型 T 中排除可以赋值给类型 U 的类型；
6. Extract\<T, U\>：从类型 T 中提取可以赋值给类型 U 的类型；
7. Record\<K, T\>：创建一个键为 K，值为 T 的新对象类型；
8. ReturnType\<T\>：获取函数类型 T 的返回值类型；
9. Parameters\<T\>：获取函数类型 T 的参数类型组成的元组类型；
10. ConstructorParameters\<T\>：获取构造函数类型 T 的参数类型组成的元组类型；
11. ThisParameterType\<T\>：获取函数类型 T 中的 this 参数类型；
12. OmitThisParameter\<T\>：移除函数类型 T 中的 this 参数；
13. ThisType\<T\>：指定函数类型 T 中的 this 类型。
