window.$docsify.plugins.push((hook) => {
    hook.beforeEach(function(content) {
      // 每次开始解析 Markdown 内容时调用

      let urlHash = window.location.hash;
      let urlHashArr = urlHash.split('/');

      if (urlHashArr.includes('zh-cn')) {
        content += `

---

文档最后更新时间: {docsify-updated}

        `
      } else {
        content += `

---

Document last updated time: {docsify-updated}

        `
      }
      return content;
    });
});