const sidebarPayinApi = require("./zh.sidebar.payinApi.json");

export default {
  label: "简体中文",
  lang: "zh",
  link: "/zh/",
  themeConfig: {
    nav: [
      { text: "首页", link: "/zh/" },
      {
        text: '收单',
        activeMatch: "/payin[A-Za-z]*/",
        items: [
          { text: "收单 API 文档", link: "/zh/payinApi/", activeMatch: "/payinApi/" },
          { text: "收单系统手册", link: "/zh/payinSystem/", activeMatch: "/payinSystem/" },
        ]
      },
      { text: "付款", link: "/zh/payoutApi/", activeMatch: "/payoutApi/" },
    ],
    sidebar: {
      ...sidebarPayinApi
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    outline: "deep",
    outlineTitle: "文档导读",
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                searchBox: {
                  resetButtonTitle: "清除查询条件",
                  resetButtonAriaLabel: "清除查询条件",
                  cancelButtonText: "取消",
                  cancelButtonAriaLabel: "取消",
                },
                startScreen: {
                  recentSearchesTitle: "搜索历史",
                  noRecentSearchesText: "没有搜索历史",
                  saveRecentSearchButtonTitle: "保存至搜索历史",
                  removeRecentSearchButtonTitle: "从搜索历史中移除",
                  favoriteSearchesTitle: "收藏",
                  removeFavoriteSearchButtonTitle: "从收藏中移除",
                },
                errorScreen: {
                  titleText: "无法获取结果",
                  helpText: "你可能需要检查你的网络连接",
                },
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                  searchByText: "搜索提供者",
                },
                noResultsScreen: {
                  noResultsText: "无法找到相关结果",
                  suggestedQueryText: "你可以尝试查询",
                  reportMissingResultsText: "你认为该查询应该有结果？",
                  reportMissingResultsLinkText: "点击反馈",
                },
              },
            },
          },
        },
      },
    },
    footer: {
      copyright: "版权所有 © 2020 - 2023 SGate",
    },
  },
};
