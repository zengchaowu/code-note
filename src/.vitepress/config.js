import navHome from "./nav.home";
import sidebarHome from "./sidebar.home";
import sidebarJavascript from "./sidebar.javascript";

export default {
  lang: "zh-CN",
  title: "Code Note",
  description: "Some Note 4 Code",
  themeConfig: {
    logo: "/logo.svg",
    nav: navHome,
    sidebar: {
      "/": sidebarHome,
      "/javascript/": sidebarJavascript,
    },
  },
};
