var rule = {
author: '小可乐/240601/第一版',
title: '影视大全网',
类型: '影视',
host: 'https://www.waffleboy.com.cn',
hostJs: '',
headers: {'User-Agent': 'MOBILE_UA'},
编码: 'utf-8',
timeout: 5000,

homeUrl: '/',
url: '/vodshow/fyfilter.html',
filter_url: '{{fl.cateId}}-{{fl.area}}-{{fl.by}}-{{fl.class}}-{{fl.lang}}-{{fl.letter}}---fypage---{{fl.year}}',
detailUrl: '',
searchUrl: '/vodsearch/**----------fypage---.html',
searchable: 1, 
quickSearch: 1, 
filterable: 1, 

class_name: '电影&剧集&综艺&动漫&短剧',
class_url: '1&2&3&4&38',
filter_def: {
1: {cateId: '1'},
2: {cateId: '2'},
3: {cateId: '3'},
4: {cateId: '4'},
38: {cateId: '38'}
},

play_parse: true,
parse_url: '',
lazy: `js:
var kcode = JSON.parse(request(input).match(/var player_.*?=(.*?)</)[1]);
var kurl = kcode.url;
if (/m3u8|mp4/.test(kurl)) {
input = { jx: 0, parse: 0, url: kurl }
} else {
input = { jx: 0, parse: 1, url: kurl }
}`,

limit: 9,
double: false,
推荐: '*',
一级: '.lazyload:has(.text-right);a&&title;a&&data-original;.text-right&&Text;a&&href',
二级: {
//名称;类型
title: 'h1&&Text;.data--span:eq(-2)&&Text',
//图片
img: 'a.v-thumb&&img&&data-original',
//主要描述;年份;地区;演员;导演
desc: '.data:eq(-1)&&Text;.data:eq(-2)&&a:eq(-1)&&Text;.data:eq(-2)&&a:eq(-2)&&Text;.data--span:eq(0)&&Text;.data--span:eq(1)&&Text',
//简介
content: '.detail-content&&Text',
//线路数组
tabs: '.bottom-line:has(span) h3',
//线路标题
tab_text: 'body&&Text',
//播放数组 选集列表
lists: '.stui-content__playlist:eq(#id)&&a',
//选集标题
list_text: 'body&&Text',
//选集链接
list_url: 'a&&href',
//链接处理
list_url_prefix: ''
},
搜索: '.v-thumb;*;*;*;*',

filter: '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'
}