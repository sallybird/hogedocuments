exports.genSidebarConfig = function (title) {
    return [
{
    title: 'HRコボット',   // required
    path: '/',      // optional, which should be a absolute path.
    collapsable: false, 
    children: [
  [ '/HR/要件定義書/', '要件定義書' ],
  [ '/HR/設計書/','システム設計書'],
  [ '/HR/運用設計書/','運用設計書']
  [ '/HR/導入手順/','導入手順書']
    ]
  },
  {
    title: '不動産コボット',   // required
    path: '/',      // optional, which should be a absolute path.
    collapsable: false, 
    children: [
  [ '/不動産/要件定義書/','要件定義書'],
  [ '/不動産/設計書/','システム設計書'],
  [ '/不動産/運用設計書/','運用設計書'],
  [ '/不動産/導入手順書/','導入手順書']
    ]
  },
  {
    title: '面接コボット',   // required
    path: '/',      // optional, which should be a absolute path.
    collapsable: false, 
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
    children: [
  [ '/共通/','共通インフラ仕様'],
  [ '/HR/設計書/共通/HRコボット_インフラ設計.md','HRコボット'],
  [ '/不動産/設計書/共通/不動産コボット_インフラ設計.md','不動産コボット'],
  [ '/面接コボット/設計書/共通/面接コボット_インフラ設計.md','面接コボット']
    ]
  }
 ]
} 