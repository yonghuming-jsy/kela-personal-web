# JSY Personal Web

一个可直接部署到 GitHub Pages 的单页个人主页。

## 快速自定义

- 在 `index.html` 替换姓名、简介、作品信息、邮箱和社交链接。
- 在 `styles.css` 修改颜色变量即可调整整站视觉风格。
- 在 `script.js` 中保留移动端菜单与复制邮箱交互。

## 发布到 GitHub Pages

1. 新建一个 GitHub 仓库，将这些文件上传到仓库根目录。
2. 打开仓库的 **Settings → Pages**。
3. 在 **Build and deployment** 中选择 **Deploy from a branch**，分支选 `main`，目录选 `/ (root)`。
4. 保存后，GitHub 会生成类似 `https://你的用户名.github.io/仓库名/` 的网站地址。

页面使用纯 HTML、CSS 和 JavaScript，无需构建步骤或额外依赖。
