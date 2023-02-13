固定个数的基本类型的组合就是元组

## 元组

一个变量只能存储一个值，有时我们需要管理多个相关项。这种情况下，最简单的就是元组。其语法通常是(int, char, ...)。将多个相同或者不同类型的变量组合到一起，就形成了一个自定义的元组类型。

### 实现原理

在部分语言中，没有提供语言级别的元组类型，可以使用类似的类型如结构体来模拟。swift 中有内置的元组类型，其底层实现也类似于结构体，内存连续。

### 使用场景

不同于结构体，元祖使用起来更为简单，不需要先进行定义就可以使用，通常有类似数组的下标访问功能。

这种特性让它很适合作为参数或者返回值。

```swift
// 定义一个函数，返回宽度和高度的元组
func getScreenSize() -> (width: Int, height: Int) {
    let width = 100
    let height = 200
    return (width, height)
}

// 调用该函数并存储其返回值
let screenSize = getScreenSize()

// 使用元素命名访问元组中的元素
print("Screen width: \(screenSize.width)")
print("Screen height: \(screenSize.height)")

// 使用下标语法访问元组中的元素
print("Screen width: \(screenSize.0)")
print("Screen height: \(screenSize.1)")

// 定义一个元组并将其分配给常量
let point = (x: 10, y: 20)

// 使用元素命名访问元组中的元素
print("Point x: \(point.x)")
print("Point y: \(point.y)")
```
