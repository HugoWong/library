const nav = require('./navbar.js');

module.exports = {
    logo: '/assets/img/logo.png',
    nav,
    //navbar: false,
    repo: "https://github.com/wekbs/library",
    docsDir: 'docs',
    lastUpdated: '最近提交',
    editLinks: true,
    editLinkText: '网页编辑',
    //sidebar: auto,
    sidebarDepth: 2,
    searchMaxSuggestions: 10,
    //以下为第三方主题配置
    category: false,
    tag: false,
    archive: false,
    //categoryText: "闪念",//_posts 文件夹不参与自动生成目录页
    //contentBgStyle:1,//默认 undefined：1=>方格 | 2=>横线 | 3=>竖线 | 4=>左斜线 | 5=>右斜线 | 6=>点状
    bodyBgImg: "/assets/img/bg.png",
    bodyBgImgOpacity: 0.5,//body 背景图透明度，选值 0 ~ 1.0, 默认 0.5
    indexImg: {
        navColor: 2,//导航栏左侧名字、中间搜索框、右侧字体的颜色，1 是黑色，2 是白色。默认是 1
        switchNavColor: true,//页面移出大图片的位置后，navColor 是否变换，如由白色变黑色，黑色变白色。
        bgTimeColor: true,//是否开启图片的背景色随一天的不同时间而变化，并且开启时间窗口提示，默认是 false。时间分为四种：白天（原图）、黄昏（偏黄）、晚上（偏黑）、深夜（偏深黑）
        //bgTimeColorArray: ['transparent', 'rgba(255, 148, 48, .2)', 'rgba(0, 0, 0, .3)', 'rgba(0, 0, 0, .5)'],//第一个是白天的颜色（默认原图），第二个是黄昏的颜色，第三个是晚上的颜色，第四个是深夜的颜色。
        bgTimeColorArray: ['transparent', 'transparent', 'transparent', 'transparent'],//单独显示时间窗口提示效果
        descFade: true,//是否开启图片中间描述的淡入效果，默认为 false
        desc: ["君子温如玉 · 卑以自牧也", "精致生活 · 高效工作", "可以卑微如尘土 · 不可扭曲如蛆虫"],//多个描述，如果填写则覆盖 config.js 的 description，不填写默认读取 config.js 的 description，descFade 为 true 生效
        descFontSize: '1.4rem', //desc 的字体大小，默认 1.4rem。提示：原主题是 1.1rem
        descFadeInTime: 200,//描述的淡入效果持续时间，descFade 为 true 生效，默认 200 毫秒
        descFadeOutTime: 100,//描述的淡出效果持续时间，descFade 为 true 生效，默认 100 毫秒
        descNextTime: 1000,//当存在多个 desc 时，一个 desc 展示完后或准备开始时，多少秒后出现下一个 desc，默认 800 毫秒
        bubble: true,//图片的气泡效果，默认为 false
        bubblePosition: 0,//气泡效果的位置，范围：0-100，0 是整个图片，50 是半张图（一半的下方）；bubble 为 true 生效，默认是 0
        bubbleNum: 31,//气泡的个数，bubble 为 true 生效，默认 200 个
    },
    sidebar: 'structuring',
    updateBar: { //最近更新栏，
        showToArticle: false, //是否显示到文章页底部，默认 true
        moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    },
    extendFrontmatter: {
        author: {
            name: 'JunYu',
            link: 'https://yuwei.cc'
        },
        article: false,
    },
    footer: {
        createYear: 2011,
            copyrightInfo:
        '| <a href="https://yuwei.cc" target="_blank">君玉自牧</a> <br><a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备15057965号</a>',
    },
};