module.exports = {
  title: 'lu',
  description: 'It\'s time to change...',
  theme: 'reco',
  dest: './dist',
  base: '/vuepress-blog/',
  head: [
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no',
      }],
  ],
  themeConfig: {
    logo: '/img/logo.jpg',
    sidebar: 'auto',//在所有页面中启用自动生成侧栏
    type: 'blog',
    author: 'lu',
    themePicker: false,
    huawei: true,
    nav: [
      {text: '主页', link: '/', icon: 'reco-home'},
      {text: '时间轴', link: '/timeLine/', icon: 'reco-date'},
      {
        text: '外链',
        items: [
          {text: 'Google', link: 'https://google.com'},
          {text: 'Baidu', link: 'https://baidu.com'},
        ],
      },
    ],
    // // 博客配置
    // blogConfig: {
    //   category: {
    //     location: 2,     // 在导航栏菜单中所占的位置，默认2
    //     text: '分类', // 默认文案 “分类”
    //   },
    //   tag: {
    //     location: 3,     // 在导航栏菜单中所占的位置，默认3
    //     text: '标签',      // 默认文案 “标签”
    //   },
    // },
  },
  head: [
    ['link', {rel: 'icon', href: '/img/logo1.png'}],
    ['link', {rel: 'manifest', href: '/manifest.json'}],
    ['meta', {name: 'theme-color', content: '#3eaf7c'}],
    ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
    ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
    [
      'link',
      {rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png'}],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/icons/safari-pinned-tab.svg',
        color: '#3eaf7c',
      }],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/icons/msapplication-icon-144x144.png',
      }],
    ['meta', {name: 'msapplication-TileColor', content: '#000000'}],
  ],
  plugins: {
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: {
        message: '发现新内容可用',
        buttonText: '刷新',
      },
      // popupComponent: 'MySWUpdatePopup',
      // generateSWConfig: {
      //   skipWaiting: true
      // }
    },
  },
  // configureWebpack: (config, isServer) => {
  //   console.log(config)
  //   config.devtool = '#eval-source-map '
  // },
}
