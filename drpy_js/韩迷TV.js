var rule={
            title: '韩迷tv',
            host: 'https://www.hmtv8.cc/',
            url: '/fyclass/page/fypage',
            searchUrl: '/page/fypage?s=**',
            searchable: 2,//是否启用全局搜索,
            quickSearch: 0,//是否启用快速搜索,
            filterable: 0,//是否启用分类筛选,
           // class_parse: '.nav&&li;a&&Text;a&&href;.*/(.*?).html',
    class_name:'韩剧&韩综&韩影',      
     class_url:'hanju&zongyi&dianying',         play_parse: true,
            lazy: '',
            limit: 6,
           推荐: '*',
            double: true, // 推荐内容是否双层定位
            一级: '.m-movies .u-movie;h2&&a&&Text;img&&data-original;.zhuangtai&&Text;a&&href',
            二级: {
                "title": "h1&&span&&Text",
                "img": "img&&data-original",
                "desc": ".video_info:eq(3)&&Text;.video_info:eq(6)&&Text;.video_info:eq(4)&&Text;.video_info:eq(2)&&Text;.video_info:eq(0)&&Text",
                "content":"p&&span&&Text",

                "tabs":`js:TABS=['在线播放']`,
                "lists": ".vlink:eq(#id)&&a",
                "list_url": "a&&href"
            },
            搜索: '*',
        }