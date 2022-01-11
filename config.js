const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  // theme: 'vdoing', // 使用npm包主题
  theme: require.resolve('../../theme-vdoing'), // 使用本地主题

  title: "大数据中台帮助文档",
  description: '致力于精准细致全面的数据,协助为您服务。',
  base: '/myBlog/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
  },
  themeConfig: {
    //github.com/technologyBear/myBlog
    repo: 'technologyBear/myBlog', // Github仓库地址
    docsDir: 'docs', // .md文件放在了docs目录下
    editLinks: true, // 启用编辑链接
    editLinkText: '编辑',
  },

  head,
  plugins,
  themeConfig,
}
