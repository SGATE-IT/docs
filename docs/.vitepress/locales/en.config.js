const sidebarPayoutApi = require("./en.sidebar.payoutApi.json");
const sidebarPayinApi = require("./en.sidebar.payinApi.json");
const virtualAccountApi = require("./en.sidebar.virtualAccountApi.json");

export default {
  label: "English",
  lang: "en",
  link: "/en/",
  themeConfig: {
    nav: [
      { text: "Home", link: "/en/" },
      { text: "Acquiring", link: "/en/payinApi/", activeMatch: "/payinApi/" },
      { text: "Payment", link: "/en/payoutApi/", activeMatch: "/payoutApi/" },
      { text: "Virtual Account", link: "/en/virtualAccountApi/", activeMatch: "/virtualAccountApi/" },
    ],
    sidebar: {
        ...sidebarPayoutApi,
        ...sidebarPayinApi,
        ...virtualAccountApi
    },
    outline: "deep",
    outlineTitle: "Document introduction",
    footer: {
      copyright: "All rights reserved © 2020 - 2024 SGate",
    },
  },
};