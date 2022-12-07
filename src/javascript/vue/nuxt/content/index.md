---
title: Nuxt/Content
params:
  - parma1
  - parma2
---

# Nuxt/Content

特征
视频

# 介绍

基于 Nuxt 的 Content 模块

# 特征

Nuxt 可以通过此模块获取 Content 模块下 Markdown，Json，Yaml，Csv，然后进一步解析。

<!--more-->

# 优势

- 实时刷新
- 在 markdown 中可以使用 vue 的组件
- 全文本搜索
- 支持静态化
- QueryBuilder API
- markdown 中代码块语法高亮
- content 生成器
- 能操作 Markdown csv yaml json xml
- 自定义解析器
- 钩子

## 文本

- `# h1`
- `## h2`

## 链接

- `<nuxt-link>`
- `<a>`
- `[Markdown](/articles)`

## 脚注

- `[^1]: This is first footnote`
  Here's a simple footnote,[^1] and here's a longer one.[^bignote]
  [^1]: This is first footnote
  [^bignote]: Here's one with multiple paragraphs and code.

      Indent paragraphs to include them in the footnote.

      `{ my code }`

      Add as many paragraphs as you like.

## 代码块

```javascript
const http = require("http");
const bodyParser = require("body-parser");

http
  .createServer((req, res) => {
    bodyParser.parse(req, (error, body) => {
      res.end(body);
    });
  })
  .listen(3000);
```

## HTML

<p><span class="note">A mix of <em>Markdown</em> and <em>HTML</em>.</span></p>

## 混合 markdown 和 HTML

必须在 markdown 上下添加空行
添加空行可以打破 html 连续解析

<div class="note">

_Markdown_ and <em>HTML</em>.

</div>

<span class="note">_Markdown_ and <em>HTML</em>.</span>

## Vue 组件

可以使用全局的 Vue 组件，或者也可以在页面局部注册组件。

```
<my-component>替代<MyComponent>
<my-component></my-component>替代<my-component/>
```

<logo></logo>

## 组件传参

可以在顶部定义参数。

## 模板

<my-component>
  <template #named-slot>
    <p>Named slot content.</p>
  </template>
</my-component>
