window.$docsify.plugins.push((hook) => {
    hook.beforeEach(function(content) {
      // 每次开始解析 Markdown 内容时调用
      
      // 清空文档索引，重新生成，隔离各个文档
      localStorage.removeItem('docsify.search.expires');
      localStorage.removeItem('docsify.search.index');
      return content;
    });
});