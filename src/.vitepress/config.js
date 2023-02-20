import navHome from "./nav.home";
import sidebarCommonCode from "./sidebar.common.code";
import sidebarCommonNetwork from "./sidebar.common.network";
import sidebarLanguageJavascript from "./sidebar.language.javascript";

export default {
  lang: "zh-CN",
  title: "笔记",
  description: "一些笔记",
  themeConfig: {
    logo: "/logo.svg",
    nav: navHome,
    sidebar: {
      "/common/code/": sidebarCommonCode,
      "/common/network/": sidebarCommonNetwork,
      "/language/javascript/": sidebarLanguageJavascript,
    },
  },
};
