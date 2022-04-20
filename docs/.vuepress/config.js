module.exports = {
    base: '/tc_blog/',
    theme: 'reco',
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    description: '...',
    themeConfig: {
        subSidebar: 'auto',
        nav: [
            {
                text: 'HOME',
                link: '/'
            }
        ],
        sidebar: [
            {
                title: 'list',
                path: '/',
                collapsable: true, // 不折叠
                children: [
                    {
                        title: "数据采集",
                        path: '/',
                        collapsable: true, // 不折叠
                        children: [
                            {title: "数据采集源", path: "/"},
                            {title: "数据处理生产", path: "/"}
                        ],
                    }
                ]
            },

        ]
    }
}
