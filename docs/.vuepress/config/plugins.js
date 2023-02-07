module.exports = [
    [
        {
            name: 'custom-plugins',
            globalUIComponents: ["Fantasy"]
        }
    ],
    ['@vuepress/medium-zoom',
        {
            selector: ".page img",
            options: {
                margin: 16,
                background: "#616161",
                scrollOffset: 0
            }
        }
    ],
    'reading-progress',
    [ '@vuepress/last-updated',
        {
            transformer: (timestamp, lang) => {
                const dayjs = require('dayjs') //https://day.js.org/
                return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
            },
        }
    ],
    [ 'one-click-copy',
        {
            copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'],
            copyMessage: '复制成功',
            toolTipMessage: '复制代码',
            duration: 1500,
            showInMobile: false,
        }
    ],
];