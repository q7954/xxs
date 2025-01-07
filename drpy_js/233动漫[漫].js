var rule = {
    title: '233动漫', //发布页：https://fb.omoo.tv/
    host: 'https://cn.233dm.com',
    url: '/type/fyclass-fypage.html',
    searchUrl: '/search/**----------fypage---.html',
    searchable: 2, //是否启用全局搜索,
    quickSearch: 0, //是否启用快速搜索,
    filterable: 0, //是否启用分类筛选,
    headers: {
        'User-Agent': 'UC_UA'
    },
    class_name: '国漫&日韩漫&欧美漫&特摄漫&动态漫',
    class_url: '2&1&3&4&5',
    play_parse: true,
    limit: 6,
    推荐: '*',
    double: true,
    sniffer: 1,
    isVideo: `js:log(input);if(/m3u8/.test(input)){
input = true}else{input = false}`,
    lazy: "js:\n  let html = request(input);\n  let hconf = html.match(/r player_.*?=(.*?)</)[1];\n  let json = JSON5.parse(hconf);\n  let url = json.url;\n  if (json.encrypt == '1') {\n    url = unescape(url);\n  } else if (json.encrypt == '2') {\n    url = unescape(base64Decode(url));\n  }\n  if (/\\.(m3u8|video_mp4|mp4|m4a|mp3)/.test(url)) {\n    input = {\n      parse: 1,\n      jx: 0,\n      url: url,\n    };\n  } else {\n    input;\n  }",
    一级: '.JIHA_djfJghJ li;a&&title;a&&data-original;.GDC_Fbfa&&Text;a&&href',
    二级: {
        "title": "h1&&Text",
        "img": ".stui-content__thumb .lazyload&&data-original",
        "desc": ".JIHA_fjjDajJ__hfdCee p:eq(0)&&Text;.JIHA_fjjDajJ__hfdCee p:eq(1)&&Text;.JIHA_fjjDajJ__hfdCee p:eq(2)&&Text",
        "content": ".detail&&Text",
        "tabs": ".channel-tab&&li",
        "lists": ".play-list-content:eq(#id)&&a"
    },
    搜索: '*'
}