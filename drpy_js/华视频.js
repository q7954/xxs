var rule = {
author: '小可乐/2409/第一版',
title: '华视频',
类型: '影视',
host: 'https://www.huatube.com',
hostJs: '',
headers: {'User-Agent': 'MOBILE_UA'},
编码: 'utf-8',
timeout: 5000,

homeUrl: '/',
url: '/fyfilter/page/fypage',
filter_url: '{{fl.cateId}}-{{fl.clsss}}-{{fl.year}}-{{fl.by}}',
detailUrl: '',
searchUrl: '/search/**/page/fypage',
searchable: 1, 
quickSearch: 1, 
filterable: 1, 

class_name: '全部&电影&国产剧&综艺&动漫&豆瓣Rank',
class_url: 'all/&all/11&all/3&all/13&all/12&douban/',
filter_def: {
'all/': {cateId: 'all/'},
'all/11': {cateId: 'all/11'},
'all/3': {cateId: 'all/3'},
'all/13': {cateId: 'all/13'},
'all/12': {cateId: 'all/12'},
'douban/': {cateId: 'douban/'}
},
pagecount: {'douban/': 1},

play_parse: true,
lazy: `js:
let kurl = input.split('?')[0];
let kname = input.split('?')[1];
let kjson =JSON.parse(request(kurl).split('playUrls = ')[1].split('};')[0]+'}');
if (kjson[kname]) {
    input = { jx: 0, parse: 0, url: kjson[kname] }
} else {
    input = { jx: 0, parse: 0, url: '无播放链接' }
}
`,

limit: 9,
double: false,
推荐: '*',
一级: `js:
if (/douban/.test(input)) { input = input.replace(/-+/,'') };
VODS = [];
let klists = pdfa(request(input), '.video-img-box:has(.sub-title)');
klists.forEach((it) => {
    VODS.push({
        vod_name: pdfh(it,'img&&alt'),
        vod_pic: pdfh(it,'img&&data-src'),
        vod_remarks: pdfh(it,'.label&&Text')||pdfh(it,'.sub-title&&Text'),
        vod_id: pdfh(it,'a:eq(0)&&href')
    })
})
`,
二级: `js:
let khtml = request(input);
VOD = {};
VOD.vod_id = input;
VOD.vod_name = pdfh(khtml, 'h1&&Text');
VOD.vod_pic = pdfh(khtml, '.detail-thumb&&img:eq(1)&&src');
VOD.type_name = pdfh(khtml, '.info-tags&&Text');
VOD.vod_remarks = pdfh(khtml, '.excerpt-remark&&Text');
VOD.vod_year = pdfh(khtml, '.excerpt-year&&Text');
VOD.vod_area = pdfh(khtml, '.excerpt-area&&Text');
VOD.vod_director = pdfh(khtml, '.info-directed--h6&&Text');
VOD.vod_actor = pdfh(khtml, '.info-stars--h6&&Text');
VOD.vod_content = pdfh(khtml, '.detail-content&&Text');

let jinput = pdfh(khtml, '.ep-btn&&href');
let jhtml = request(jinput);
let kjson =JSON.parse(jhtml.split('playUrls = ')[1].split('};')[0]+'}');
let ktabs = Object.keys(kjson);
VOD.vod_play_from = ktabs.join('$$$');

let kplists = [];
let plists = pdfa(jhtml, '.gutter-20:has(.ep-item)')
ktabs.forEach((tab) => {
    let plist = pdfa(plists[0], 'a').map((it) => { return pdfh(it, 'a&&Text') + '$' + pdfh(it, 'a&&href') + '?' + tab });
    plist = plist.join('#');
    kplists.push(plist)
});
VOD.vod_play_url = kplists.join('$$$')
`,
搜索: '*',

filter: 'H4sIAAAAAAAAA+2Y204aQRjH73mMvTbpzC578g36DMYLaklqpDYR28QYE8QjagSMRatETJXioR7w1IoFXmZPvEWXyuz/Q296pxfDFfv7dma+/zeH/2SnY0oilXqjDA7FppWx5JQyqIykEum0MqCMJz4mw0c3V/PmFsLnL4nU5xAMTSvjXbxw1Jk76uLwQZkZ6NHo5fDB0sFL5TAkuBFxf7mO93WO91eOnGa5xzlHwJtb8bI7vYCqxWkLf/OhFzANBLzsT79UFEMwDL1y4TdPRE+qhQazBS9TEmNrOsm2VnTvxRhxE3251SUSsMHP79zGWY9rFsl2caPz7VgEuIpA/jA4EAVRDRNZLW87jZwYQjdJbdcX3fyVyNe0ka/zZz84v4ykEyHlitNo+LVML2brJLXCmpcRU2Wg8n7lzM8ticx01KtTuXbuC6KBBi3e2Q+ntR8tBlL6xonb/IrebAu9ufNt/7QqGhExQbsQzrGQyUw6zlqwvBdFNJQmqLaxSA2LtAnm627+gFTAwKz5s63OTkv0p1oGI7OQ93ZFrbXwhyo8FIPclb956zbrYhXq3YU7PDMQba2pZGICO8vbuuts3fznzlKZGhfF7/4lXAPXKFfBVco5OKecgTPCuR1xblNugVuUm+Am5Qa4QbkOrlMOvZzq5dDLqV4OvZzq5dDLqV4OvZzqZdDLqF4GvYzqZdDLqF4GvYzqZdDLqF4GvYzqZdDLqF4GvYzqZdDLqF4GvQx6uW0Lvf/+Em6BW5Sb4CblBrhBuQ6uUx4Hj1OugWuUq+Aq5RycU87AWf8+fDdFduH6htvIP9uFXjkTtIve7o1XEicoToFyxj3cCWpZv7zai30YnUzTuNO87p4v34XxpEc+TSTpC53TbT97H9yKcys1OpbsJhkbHni05HCtSlOWpixNWZqyNGVpytKUlVdgylqfJycmk2/fI2m//uDurT4/OnabTqMGp33sJzrXWuv9IeIuW9X+ECaqUznuDxFr/X3RH8Ly8a4v+0PkhM8/CWGxeLe/3MNSf/TJESpvJ/J2Im8n8nYibyfydiJvJy/3yUCTnwykKUtTlqYsTVmasjTl12HKqjRlacrSlKUpS1OWpixN+WVNOTbzF31yj+ryJgAA'
}