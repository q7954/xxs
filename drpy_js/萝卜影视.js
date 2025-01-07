var rule = {
author: '小可乐/240601/第一版',
title: '萝卜影视',
类型: '影视',
host: 'https://cj.lbbb.cc',
hostJs: '',
headers: {'User-Agent': 'MOBILE_UA'},
编码: 'utf-8',
timeout: 5000,

homeUrl: '/',
url: '/index.php/vod/show/fyfilter.html',
filter_url: '{{fl.area}}{{fl.by}}{{fl.class}}/id/{{fl.cateId}}{{fl.lang}}{{fl.letter}}/page/fypage{{fl.year}}',
detailUrl: '',
searchUrl: '/index.php/vod/search/page/fypage/wd/**.html',
searchable: 1, 
quickSearch: 1, 
filterable: 1, 

class_name: '电影&剧集&综艺&动漫&短剧',
class_url: '1&2&3&4&42',
filter_def: {
1: {cateId: '1'},
2: {cateId: '2'},
3: {cateId: '3'},
4: {cateId: '4'},
42: {cateId: '42'}
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
一级: '.module-item:has(.module-item-note);a&&title;img&&data-original;.module-item-note&&Text;a&&href',
二级: {
//名称;类型
title: 'h1&&Text;.module-info-tag-link:eq(2)&&Text',
//图片
img: '.module-info-poster&&img&&data-original',
//主要描述;年份;地区;演员;导演
desc: '.module-info-item:eq(-2)&&Text;.module-info-tag-link:eq(0)&&Text;.module-info-tag-link:eq(1)&&Text;.module-info-item-content:eq(1)&&Text;.module-info-item-content:eq(0)&&Text',
//简介
content: '.show-desc&&Text',
//线路数组
tabs: '.tab-item',
//线路标题
tab_text: 'body--small&&Text',
//播放数组 选集列表
lists: '.module-play-list:eq(#id)&&a',
//选集标题
list_text: 'body&&Text',
//选集链接
list_url: 'a&&href',
//链接处理
list_url_prefix: ''
},
搜索: '.module-card-item-poster;img&&alt;*;*;*',

filter: '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'
}