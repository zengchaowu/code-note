import navHome from "./nav.home";
import sidebarCommonCode from "./sidebar.common.code";
import sidebarCommonNetwork from "./sidebar.common.network";
import sidebarCommonHybrid from "./sidebar.common.hybrid";
import sidebarCommonEngineered from "./sidebar.common.engineered";
import sidebarLanguageJavascript from "./sidebar.language.javascript";
import sidebarLanguageTypescript from "./sidebar.language.typescript";
import sidebarLanguageObjc from "./sidebar.language.objc";
import sidebarLanguageSwift from "./sidebar.language.swift";
import sidebarLanguageCpp from "./sidebar.language.cpp";
import sidebarLanguageJava from "./sidebar.language.java";

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
      "/common/hybrid/": sidebarCommonHybrid,
      "/common/engineered/": sidebarCommonEngineered,
      "/language/javascript/": sidebarLanguageJavascript,
      "/language/typescript/": sidebarLanguageTypescript,
      "/language/objc/": sidebarLanguageObjc,
      "/language/swift/": sidebarLanguageSwift,
      "/language/cpp/": sidebarLanguageCpp,
      "/language/java/": sidebarLanguageJava,
    },
  },
};
