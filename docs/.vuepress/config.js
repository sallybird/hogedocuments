const moment = require('moment');

module.exports = {
  locales: {
    '/': {
      lang: 'ja'
    }
  },
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  plugins: [
    '@vuepress/back-to-top',
    [
    '@vuepress/medium-zoom',
          { selector: 'img'}
　　],
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // Don't forget to install moment yourself
          const moment = require('moment')
          require('moment-timezone')
          moment.tz.setDefault('Asia/Tokyo')
          return moment(timestamp).format('yyyy/MM/DD H:mm:ss') 
        }
      }
    ],[
        // Git Log/Details
        "git-log", { onlyFirstAndLastCommit: false }
      ]],
  themeConfig: {
    lastUpdated: '最終更新',
    nav:[
      {text:'Home', link:'/'},
      { text: 'GitHub', link: 'https://github.com/AI-RPA/KobotDocuments' }
    ],
    sidebar: [
    {
    title: 'HRコボット',   // required
    path: '/',      // optional, which should be a absolute path.
    collapsable: false, 
    sidebarDepth: 3, 
    children: [
  [ '/HRコボット/要件定義書/', '要件定義書' ],
  [ '/HRコボット/設計書/','システム設計書'],
  [ '/HRコボット/運用設計書/','運用設計書'],
  [ '/HRコボット/導入作業手順書/','導入作業手順書']
    ]
  },
  {
    title: '不動産コボット',   // required
    path: '/',      // optional, which should be a absolute path.
    collapsable: false, 
    sidebarDepth: 3, 
    children: [
  [ '/不動産コボット/要件定義書/','要件定義書'],
  [ '/不動産コボット/設計書/','システム設計書'],
  [ '/不動産コボット/運用設計書/','運用設計書'],
  [ '/不動産コボット/導入作業手順書/','導入作業手順書'],
  [ '/不動産コボット/撤去作業手順書/','撤去作業手順書']
    ]
  },
  {
    title: '面接コボット',   // required
    path: '/',      // optional, which should be a absolute path.
    collapsable: false, 
    sidebarDepth: 3, 
    children: [
  [ '/面接コボット/要件定義書/','要件定義書'],
  [ '/面接コボット/設計書/','システム設計書'],
  [ '/面接コボット/運用設計書/','運用設計書']
    ]
  },
  {
    title: 'インフラ仕様',   // required
    path: '/',      // optional, which should be a absolute path.
    collapsable: false, 
    sidebarDepth: 3, 
    children: [
  [ '/共通/','共通インフラ仕様'],
  [ '/HRコボット/設計書/共通/HRコボット_インフラ設計.md','HRコボット'],
  [ '/不動産コボット/設計書/共通/不動産コボット_インフラ設計.md','不動産コボット'],
  [ '/面接コボット/設計書/共通/面接コボット_インフラ設計.md','面接コボット']
    ]
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
