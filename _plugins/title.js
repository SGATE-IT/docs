window.$docsify.plugins.push((hook) => {
    hook.doneEach(function() {
        // 每次路由切换时数据全部加载完成后调用，没有参数。

        // 动态修改文档标题
        let urlHash = window.location.hash;
        let urlHashArr = urlHash.split('/');
        let nameObj = document.getElementById('doc-name');
        if (urlHashArr.length > 2) {
            let name = urlHashArr[2].toUpperCase();
            nameObj.innerHTML = name;
        } else {
            nameObj.innerHTML = window.$docsify.name;
        }
    });
});