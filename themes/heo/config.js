const CONFIG = {
  HOME_BANNER_ENABLE: true,

  SITE_CREATE_TIME: '2023-10-08', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  NOTICE_BAR: [
    { title: '欢迎来到我的博客', url: 'https://cragent.xyz' },
    { title: '访问文档中心获取更多帮助', url: 'https://cragent.xyz' }
  ],

  // 英雄区(首页顶部大卡)
  HERO_TITLE_1: '分享AI智能体',
  HERO_TITLE_2: '与思维认知',
  HERO_TITLE_3: 'cragent.xyz',
  HERO_TITLE_4: '',
  HERO_TITLE_5: '一个努力不被时代淘汰的干饭人',
  HERO_TITLE_LINK: 'https://cragent.xyz',

  // 英雄区显示三个置顶分类
  HERO_CATEGORY_1: { title: 'AI智能体项目', url: '/tag/AI智能体项目' },
  HERO_CATEGORY_2: { title: '思维认知', url: '/tag/思维认知' },
  HERO_CATEGORY_3: { title: '大模型', url: '/tag/大模型' },
  HERO_CATEGORY_4: { title: '我的研究', url: '/tag/我的研究' },

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HERO_RECOMMEND_POST_TAG: '推荐',
  HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  INFOCARD_GREETINGS: [
    '你好！我是',
    '🔍 分享与热心帮助',
    '🏃 脚踏实地行动派',
    '🏠 智能家居小能手',
    '🤖️ 数码科技爱好者',
  ],
  INFO_CARD_URL: 'https://github.com/tangly1024/NotionNext', // 个人资料底部按钮链接

  // 用户技能图标
  GROUP_ICONS: [
    {
      title_1: 'CAMEL',
      img_1: '/images/heo/camel_logo.png',
      color_1: '#989bf8',
      title_2: 'AutoGPT',
      img_2: '/images/heo/autoGPT_logo.png',
      color_2: '#ffffff'
    },
    {
      title_1: 'AgentGPT',
      img_1: '/images/heo/agentGPT_logo.png',
      color_1: '#57b6e6',
      title_2: 'HuggingGPT',
      img_2: '/images/heo/huggingGPT_logo.png',
      color_2: '#4082c3'
    },
    {
      title_1: 'Git',
      img_1: '/images/heo/2023ffa5707c4e25b6beb3e6a3d286ede4c6071102.webp',
      color_1: '#df5b40',
      title_2: 'Python',
      img_2: '/images/heo/20235c0731cd4c0c95fc136a8db961fdf963071502.webp',
      color_2: '#ffffff'
    },
    {
      title_1: 'metaGPT',
      img_1: '/images/heo/metaGPT_logo.png',
      color_1: '#f7cb4f',
      title_2: 'xlang',
      img_2: '/images/heo/xlang_logo.png',
      color_2: '#e9572b'
    },
  ],

  SOCIAL_CARD: false, // 是否显示右侧，点击加入社群按钮
  SOCIAL_CARD_TITLE_1: '交流频道',
  SOCIAL_CARD_TITLE_2: '加入我们的社群讨论分享',
  SOCIAL_CARD_TITLE_3: '点击加入社群',
  SOCIAL_CARD_URL: 'https://docs.tangly1024.com/article/how-to-question',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  MENU_INDEX: true, // 显示首页
  MENU_CATEGORY: true, // 显示分类
  MENU_TAG: true, // 显示标签
  MENU_ARCHIVE: true, // 显示归档
  MENU_SEARCH: true, // 显示搜索

  POST_LIST_COVER: true, // 列表显示文章封面
  POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  POST_LIST_SUMMARY: true, // 文章摘要
  POST_LIST_PREVIEW: false, // 读取文章预览
  POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  ARTICLE_RECOMMEND: true, // 文章关联推荐

  WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  WIDGET_ANALYTICS: false, // 显示统计卡
  WIDGET_TO_TOP: true,
  WIDGET_TO_COMMENT: true, // 跳到评论区
  WIDGET_DARK_MODE: true, // 夜间模式
  WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
