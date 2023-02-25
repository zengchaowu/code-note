export default [
  {
    text: "通用知识",
    activeMatch: `^/common/`,
    items: [
      {
        text: "通用编程基础",
        link: "/common/code/store/fundation",
      },
      {
        text: "网络编程指南",
        link: "/common/network/connect",
      },
      { text: "混合应用架构设计", link: "/common/hybrid/connect" },
      { text: "工程化实践", link: "/common/engineered/connect" },
      { text: "架构实例", link: "/common/architect/auth" },
    ],
  },
  {
    text: "编程语言",
    activeMatch: `^/language/`,
    items: [
      { text: "javascript", link: "/language/javascript/foundation/type" },
      { text: "typescript", link: "/language/typescript/foundation/intro" },
      { text: "objc", link: "/language/objc/data-type" },
      { text: "swift", link: "/language/swift/data-type" },
      { text: "c++", link: "/language/cpp/data-type" },
      { text: "java", link: "/language/java/data-type" },
    ],
  },
  {
    text: "框架学习",
    activeMatch: `^/framework/`,
    items: [
      { text: "node", link: "/framework/node/intro" },
      { text: "vue", link: "/framework/vue/component" },
      { text: "react", link: "/framework/react/component" },
      { text: "electron", link: "/framework/electron/component" },
      { text: "rx", link: "/framework/rx/component" },
    ],
  },
];
