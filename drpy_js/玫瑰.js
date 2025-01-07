var rule = {
title: '玫瑰影视',
host: 'https://www.mjgss.com',
headers: {'User-Agent': 'PC_UA'},
编码: 'utf-8',
timeout: 5000,
homeUrl: '/',
url: '/mgys/fyclass-fypage/',
searchUrl: '/vod-search-pg-fypage-wd-**.html',
searchable: 1, quickSearch: 1, filterable: 0, 
class_name: '邵氏电影&Ⅱ级电影&动作&爱情&喜剧&恐怖&惊悚&悬疑&犯罪&剧情&战争&灾难&科幻&奇幻&冒险&纪录&其他&国产剧&港台剧&韩国剧&日本剧&欧美剧&泰国剧&短剧&其他剧&国产动漫&日韩动漫&港台动漫&欧美动漫&动漫电影&其他动漫&动漫电影&内地综艺&港台综艺&日韩综艺&欧美综艺&电影解说',
class_url: 'shaos&%E2%85%A1jdy&dongz&aiq&xij&kongb&jings&xuany&fanz&juq&zhanz&zain&keh&qih&maox&jil&qita&guocj&gangtj&hangj&ribj&oumj&taigj&duanj&qitj&guocdm&rhdm&gtdm&omdm&dmdy&qtdm&donghdy&neidzy&gangtazy&rihzy&oumzy&dianyjs',
play_parse: true,limit: 9,double: false,
lazy: ``,
推荐: '*',
一级: '.stui-vodlist li;a&&title;.lazyload&&data-original;.pic-text&&Text;a&&href',
二级: {
title: 'h1&&Text',
img: 'img&&src',//主要信息;年代;地区;演员;导演
desc: '.stui-content__detail&&p:eq(0)&&span:eq(5)&&Text;.stui-content__detail&&p:eq(0)&&span:eq(2)&&Text;.stui-content__detail&&p:eq(0)&&span:eq(1)&&Text;.stui-content__detail&&p:eq(1)&&Text;.stui-content__detail&&p:eq(2)&&Text',
content: '.stui-content__detail&&p:eq(4)&&Text',
tabs: 'h3',
lists: '.stui-content__playlist:eq(#id)&&li a'
},
搜索: '*'
}