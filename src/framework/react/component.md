## 组件实例化原理

**为什么 data 不能为对象**

当我们定义一个组件时，如果 data 选项是一个对象，那么这个对象会在组件被定义的时候被创建，而不是在组件实例化的时候被创建。这意味着所有使用该组件的实例都将引用同一个数据对象，因为它们都是在组件被定义的时候共享同一个 data 对象的引用。
