export default [
  {
    text: "通用知识",
    activeMatch: `^/common/`,
    items: [
      {
        text: "通用编程基础",
        activeMatch: `^/common/code/`,
        link: "/common/code/store",
      },
      { text: "网络编程指南", link: "/common/network" },
      { text: "混合应用架构设计", link: "/common/hybrid" },
      { text: "工程化实践", link: "/common/engineered" },
    ],
  },
  {
    text: "编程语言",
    activeMatch: `^/language/`,
    items: [
      { text: "javascript", link: "/language/javascript/base-data-type" },
      { text: "typescript", link: "/language/typescript/index" },
      { text: "objc", link: "/language/objc/index" },
      { text: "swift", link: "/language/swift/index" },
      { text: "c&c++", link: "/language/c&c++/index" },
      { text: "java", link: "/language/java/index" },
    ],
  },
  {
    text: "框架学习",
    activeMatch: `^/framework/`,
    items: [
      { text: "vuejs", link: "/guide/introduction" },
      { text: "reactjs", link: "/guide/introduction" },
      { text: "nuxtjs", link: "/guide/introduction" },
      { text: "electron", link: "/guide/introduction" },
    ],
  },
];
