// 可在此添加交互功能代码
console.log('博客脚本已加载');

// 添加点击文章标题展开/折叠内容的交互功能
const articleTitle = document.querySelector('h2');
const articleContent = document.querySelector('p');

articleTitle.addEventListener('click', () => {
    if (articleContent.style.display === 'none') {
        articleContent.style.display = 'block';
    } else {
        articleContent.style.display = 'none';
    }
});