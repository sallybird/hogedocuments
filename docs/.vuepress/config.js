//.vuepress/config.js
require("dotenv").config();

module.exports = {
  locales: {
    '/': {
      lang: 'ja'
    }
  },
  base: '/',
  head: [["link", { rel: "icon", href: "/assets/img/favicon.ico" }]],
  title: "hogeDocuments",
  description:
    "The official knowledgebase for all hoge products Portal.",
  markdown: {
    lineNumbers: true
  },
  plugins: [
    '@vuepress/back-to-top',
    [
    '@vuepress/medium-zoom',
          { selector: 'img'}
　　],
[
        // Git Log/Details
        "git-log", {
          additionalArgs: '--no-merges',
          nlyFirstAndLastCommit: false }
      ]],
  themeConfig: {
    logo: "/assets/img/logo-grey.png",
    nav:[
      {text:'Home', link:'/'}
    ],
    sidebar:  {
    title: 'hoge',   // required
    path: '/HRコボット/設計書/'      // optional, which should be a absolute path.
    },
    repo: "https://github.com/sallybird/hogedocuments/docs",
    docsBranch: "master",
    docsDir: "docs",
    editLinks: true,
    nextLinks: false,
    prevLinks: false,
    editLinkText: "Help us improve this page!"
  }
}
