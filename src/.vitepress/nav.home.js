export default [
  {
    text: "通用知识",
    activeMatch: `^/common/`,
    items: [
      { text: "网络编程指南", link: "/guide/introduction" },
      { text: "混合应用架构设计", link: "/guide/introduction" },
      { text: "工程化实践", link: "/guide/introduction" },
    ],
  },
  {
    text: "编程语言",
    activeMatch: `^/language/`,
    items: [
      { text: "javascript", link: "/guide/introduction" },
      { text: "typescript", link: "/guide/introduction" },
      { text: "objc", link: "/guide/quick-start" },
      { text: "swift", link: "/guide/quick-start" },
      { text: "c&c++", link: "/guide/quick-start" },
      { text: "java", link: "/guide/quick-start" },
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
