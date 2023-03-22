module.exports = [
    {
        text: "首页", link:"/"
    },
    {
        text: "信息运维",
        items: [
            { text: "Linux", link:"/pages/linux-centos/"},
            { text: "Nginx", link:"/pages/nginx/"},
            { text: "MySQL", link:"/pages/mysql/"},
            { text: "Redis", link:"/pages/redis/"},
            { text: "Kafka", link:"/pages/kafka/"},
            { text: "Docker", link:"/pages/docker/"},
            { text: "Jenkins", link:"/pages/jenkins/"},
        ]
    },
    {
        text: "自建服务",
        items: [
            { text: "Oneindex", link:"/pages/oneindex/"},
            { text: "Bitwarden", link:"/pages/bitwarden/"},
            { text: "Confluence", link:"/pages/confluence/"},
            { text: "Photogallery", link:"/pages/photogallery/"},
        ]
    },
    {
        text: "游戏娱乐",
        items: [
            { text: "智能手机", link:"/pages/mi-10/"},
            { text: "上古卷轴", link:"/pages/eso/"},
            { text: "健身记录", link:"/pages/fit-note/"},
        ]
    },
    {
        text: "关于", link:"/about/",
        items: [
            { text: "站点相关", link:"/pages/vuepress/"},
            { text: "未完待续", link:"/more/"},
        ]
    },
];