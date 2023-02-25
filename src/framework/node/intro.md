## 渲染引擎

渲染引擎的作用是解析HTML和CSS文档，构建DOM树和CSSOM树，将它们合并成渲染树，然后进行页面布局和绘制的计算，最终得到的是一份描述页面布局和样式的渲染树。这份渲染树并不是一个真实的图像，它只是一个描述页面元素如何排列组合的树状结构。最终的绘制和显示是由浏览器另外一个组件UI后端来完成的，它将渲染树转换成实际的像素图像，并将它显示在屏幕上。

### 引擎种类

1. blink：它是 WebKit 引擎的一个分支。Blink 引擎主要用于 Google Chrome 和其他 Chromium 系浏览器。安卓系统上通常使用此引擎，腾讯x5也是基于blink。但是一些第三方浏览器也会使用webkit引擎。安卓4.4版本后的系统的webview api也是基于blink。
2. WebKit：WebKit 是最早的浏览器渲染引擎之一，最初由苹果公司开发，后来成为开源项目。目前主要用于 Safari 浏览器和一些基于 WebKit 的浏览器。iOS系统强制使用此引擎。
3. Trident：Trident 是由微软开发的浏览器渲染引擎，主要用于 Internet Explorer 浏览器。

## js引擎

js引擎的主要作用是解析和执行JavaScript代码。如果没有js引擎，浏览器就只能通过html和css实现静态网页。

### 引擎种类

1. v8引擎，用于chrome和node，安卓手机4.4之后系统webview使用的是此引擎。
2. JavaScriptCore，用于safari和webkit，苹果手机强制使用此引擎。
3. Chakra，主要用于ie。

### Dom和Bom

浏览器解析HTML文档时，它会根据文档的结构创建DOM树，然后将DOM树暴露给JavaScript引擎。

JavaScript引擎将DOM树封装在全局对象window下的Document对象中。开发者可以使用JavaScript中的Document对象和其他相关的API来访问和操作DOM树。

BOM（Browser Object Model）是由浏览器提供的JavaScript API集合，用于控制浏览器窗口和与浏览器交互的对象。通常包括下面几个部分：

1. Window对象：代表浏览器窗口，并提供了操作浏览器窗口的API，例如打开、关闭、移动、调整大小等。
2. Location对象：代表当前文档的URL，并提供了API来获取和设置URL的不同部分，例如主机、路径、哈希等。
3. Navigator对象：提供了有关浏览器的信息，例如浏览器的名称、版本、平台、语言等。
4. Screen对象：提供了有关用户屏幕的信息，例如屏幕分辨率、可用高度、可用宽度等。
5. History对象：提供了访问浏览器历史记录的API，例如后退、前进、刷新等。
6. Document对象：代表当前文档，并提供了操作文档内容的API，例如获取、创建、修改、删除元素等。

## node与浏览器的区别

1. node只是基于v8JS引擎进行包装，所以不存在渲染引擎。
2. node运行于主机上，提供了文件和操作系统的api，但是没有dom和bom对象。
3. nodejs能够完全控制整台设备，而浏览器中的js则被js引擎限制在一定的安全范围内。
4. node是单线程的，但是可以创建子进程。