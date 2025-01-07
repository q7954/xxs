var rule = {
author: '小可乐/240701/第一版',
title: '魔都动漫',
类型: '影视',
host: 'https://www.moduys02.com',
hostJs: '',
headers: {'User-Agent': 'MOBILE_UA'},
编码: 'utf-8',
timeout: 5000,

homeUrl: '/',
url: '/type/fyclass-fyfilter---addtime-fypage.html',
filter_url: '{{fl.class}}--{{fl.year}}',
detailUrl: '',
searchUrl: '/search/**/fypage.html',
searchable: 1, 
quickSearch: 1, 
filterable: 1, 

class_name: '国产动漫&日韩动漫&港台动漫&欧美动漫&动漫电影',
class_url: '1&2&3&4&5',
filter_def: {},

play_parse: true,
lazy: `js:
let kcode = JSON.parse(request(input).match(/var cms_player = (.*?);</)[1]);
let kjx = kcode.jiexi;
let kurl = kcode.url;
if (/\\.(m3u8|mp4)/.test(kurl)) {
input = { jx: 0, parse: 0, url: kurl };
} else {
input = { jx: 0, parse: 1, url: kjx+kurl };
}
`,

limit: 9,
double: false,
推荐: '.list-vod .public-list-exp;*;*;*;*',
一级: '.public-list-exp;img&&alt;img&&data-original;.hide&&Text;a&&href',
二级: {
title: 'h1--small&&Text;.slide-info-remarks&&Text',
img: '.detail-pic&&data-original',
desc: 'h1&&small&&Text;.slide-info-remarks&&a:eq(0)&&Text;.slide-info-remarks&&a:eq(1)&&Text;.mr-1:eq(1)&&Text;.mr-1:eq(0)&&Text',
content: '.text&&Text',
tabs: '.anthology-item',
tab_text: 'body&&Text',
lists: '.anthology-list-play:eq(#id)&&a',
list_text: 'body&&Text',
list_url: 'a&&href',
},
搜索: '*',

filter: 'H4sIAAAAAAAAA+2TzWrCQBSF93mMWacwN/4k8VXERSiual1UWhAJtIhFu2pL0ZZKKRSqLVQQrGBFnyaJ+BYdO5m5V1fdZ3Y538m9k5PktCwGrFS2Wuyk2mQldlwLGg1ms3pwWhUy7o2Sdkfoi6B2LkC5xeo73Blv2+MdFoKFtqSb7jS9GYXy4ptxtBqmXiq01x+Kc5QnhfKS7mP000u9VOjzRnfxYqnOk0Lv1A+OQu/8eo/Wr2qnFHru+n779KHmpNBzL5/iCdScFNq7uk0u+8qTQu9cTzYP3/FqqtZqre/ozONJW9lShJXQ1p+lWQ3O8Kskg/l2MPvnV3G4k0/Z3yXhOeQ5yh3kDuWAHCjnyDnh4GsuLgn3kHuUu8hdyovIi5QXkBcox7xA8wLmBZoXMC/QvIB5geYFzAs0L8e8fC8vPxIEhzjfG/R5vJhFy7fUB98Xr8vHBd6h7wnfQ9899F3hu+gnz7NkoH5p8Lhwi/7u97IqtsUc037TftP+jLY/Z9pv2m/an9H25037TftN+zPa/oJpv2m/aX8W22+FvzIko/f4EwAA'
}