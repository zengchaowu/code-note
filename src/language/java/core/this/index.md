# js 中的 this

# 默认绑定

```javascript
var obj1 = {};
function func1() {
  console.log(this); // 在 node 下，this 默认绑定的是 global 对象。[严格模式下，this 会默认绑定到 undefined。]
  console.log(this.a); // node 下为 undefined。
}
var a = 2;
func1();
```

# 隐式绑定

```javascript
var obj2 = {
  a: 2,
  func: function func2() {
    console.log(this);
  },
};
obj2.func(); // 因为存在 obj2 上下文，this 会绑定到 obj2。

// 隐式丢失 某些情况下，隐式绑定会丢失绑定对象，this 会执行默认绑定。
function func3() {
  console.log(this);
}
var obj3 = {
  func: func3,
};
var bar3 = obj3.func; // 此时 bar3 代表的就是 fun3 函数，此处是值传递
bar3(); // 这里直接调用 func3，并没有传入上下文对象。

// 显式绑定 我们可以在某个对象上强制调用函数。
function func4() {
  console.log(this);
}
var obj4 = {
  func: func4,
};
var number4 = 2;
func4.apply(number4); // 如果传入基本类型，会提升为对象形式。
func4.call(obj4); // 也可以使用 func4.apply(obj4)。
```

# 硬绑定

```javascript
function func5() {
  console.log(this);
}
var obj5 = {
  func: func5,
};
var bar = function () {
  // 本质是使用 bar 装饰了 func 方法。但是，如果我们直接使用 func5.call 也会修改绑定对象。
  func5.call(obj5);
};
var bar2 = func5.bind(obj5); // 这是 es 提供的硬绑定方法，原理就是上面的代码。
bar();
bar.call(globalThis); // 使用显式绑定无法修改硬绑定的绑定对象。
func5.call(2);
bar();
```

## 显式绑定

强制在某个对象上面调用函数，这个对象本来不包含此方法。
这种情况下，this 指的就是 obj。

```javascript
var obj = {};
function func() {}
func.call(obj);
```

## 硬绑定

显式绑定仍然可能会丢失绑定，所以我们引入硬绑定。

```javascript
function func() {}
var obj = {};
var func1 = function () {
  func.call(obj);
};
bar();
```
