import navHome from "./nav.home";
import sidebarHome from "./sidebar.home";
import sidebarLanguageJavascript from "./sidebar.language.javascript";

export default {
  lang: "zh-CN",
  title: "笔记",
  description: "一些笔记",
  themeConfig: {
    logo: "/logo.svg",
    nav: navHome,
    sidebar: {
      "/": sidebarHome,
      "/language/javascript/": sidebarLanguageJavascript,
    },
  },
};
