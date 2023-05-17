window.$docsify.plugins.push((hook) => {
    hook.beforeEach(function(content) {
      // 每次开始解析 Markdown 内容时调用

      let urlHash = window.location.hash;
      let urlHashArr = urlHash.split('/');

      let navObj = document.getElementsByTagName('nav')[0];
      // navObj.remove();
      // if (urlHashArr.length > 2) {
      //   navObj.style.setProperty('display', 'inherit');
      // } else {
      //   navObj.style.setProperty('display', 'none');
      // }
      
      return content;
    });
});