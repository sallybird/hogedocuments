//.vuepress/config.js
require("dotenv").config();
const webpack = require("webpack");

module.exports = {
  locales: {
    '/': {
      lang: 'ja'
    }
  },
  base: '/',
  dest: 'docs',
  head: [["link", { rel: "icon", href: "/assets/img/favicon.ico" }]],
  title: "hogeDocuments",
  description:
    "The official knowledgebase for all hoge products Portal.",
  markdown: {
    lineNumbers: true
  },
  configureWebpack: config => {
    // Set environment variables based on NODE_ENV
    const env =
      process.env.NODE_ENV === "production"
        ? { ...process.env }
        : { ...process.env.development };
    return { plugins: [new webpack.EnvironmentPlugin(env)] };
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
          additionalArgs: '--no-merge',
          nlyFirstAndLastCommit: false }
      ]],
  themeConfig: {
    logo: "/assets/img/logo-grey.png",
    nav:[
      {text:'Home', link:'/'},
      { text: 'GitHub', link: 'https://github.com/AI-RPA/KobotDocuments' }
    ],
    sidebar: [
    {
    title: 'hoge',   // required
    path: '/',      // optional, which should be a absolute path.
    collapsable: false, 
    sidebarDepth: 2
    }
  ],
    repo: "https://github.com/AI-RPA/KobotDocuments/docs",
    docsBranch: "master",
    docsDir: "site",
    editLinks: true,
    nextLinks: false,
    prevLinks: false,
    editLinkText: "Help us improve this page!"
  }
}
