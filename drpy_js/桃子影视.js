var rule = {
author: '小可乐/240701/第一版',
title: '桃子影视',
类型: '影视',
host: 'https://ios.taozi007.com',
hostJs: '',
headers: {'User-Agent': 'MOBILE_UA'},
编码: 'utf-8',
timeout: 5000,

homeUrl: '/',
url: '/show/fyclass-fyfilter.html',
filter_url: '{{fl.area}}-{{fl.by}}-{{fl.class}}-{{fl.lang}}-{{fl.letter}}---fypage---{{fl.year}}',
detailUrl: '/detail/fyid.html',
searchUrl: '/index.php/ajax/suggest?mid=1&wd=**&page=fypage&limit=30',
searchable: 1, 
quickSearch: 1, 
filterable: 1, 

class_name: '电影&剧集&综艺&动漫&短剧',
class_url: '1&2&4&3&5',
filter_def: {},

play_parse: true,
lazy: `js:
let kcode = JSON.parse(request(input).match(/var player_.*?=(.*?)</)[1]);
let kurl = kcode.url;
let kjiexi = '';
if (/m3u8|mp4/.test(kurl)) {
input = { jx: 0, parse: 0, url: kurl };
} else if (/qq|iqiyi|youku|mgtv/.test(kurl)) {
kjiexi='https://jx.xmflv.cc/?url=';
input = { jx: 0, parse: 1, url: kjiexi+kurl };
} else {
kjiexi= HOST + '/player/?url=';
input = { jx: 0, parse: 1, url: kjiexi+kurl }
}`,

limit: 9,
double: false,
推荐: '*',
一级: '.module-item:has(.module-item-note);a&&title;img&&data-original;.module-item-note&&Text;a&&href',
二级: {
title: 'h1&&Text;.module-info-tag-link:eq(2)&&Text',
img: 'img.ls-is-cached&&data-original',
desc: '.module-info-item:eq(4)&&Text;.module-info-tag-link:eq(0)&&Text;.module-info-tag-link:eq(1)&&Text;.module-info-item-content:eq(1)&&Text;.module-info-item-content:eq(0)&&Text',
content: '.show-desc&&Text',
tabs: '.tab-item span',
tab_text: 'body&&Text',
lists: '.module-play-list:eq(#id)&&a',
list_text: 'body&&Text',
list_url: 'a&&href'
},
搜索: 'json:list;name;pic;en;id',

filter: 'H4sIAAAAAAAAA+2ZW08bRxTH3/kYfqbSLoQkzVvu9/s9UR7cyGqjUioBrYQQEmBMDAHbIIJDbW4Nt1AM5lIKpsZfxrNrf4uMPefmtqyslrZKtG/+/c/O7JwzOzt/z3Y3BOzAmecN3YFvQ12BM4GXrcGOjkBjoC34XUijGlp2whHNPwZbf9DC8+5AW0WOrJTDKxVZQ6CnEdTJtL4eVACMudFN6IgBY05fwumdhBgA9Tm8UsynsU8D1OfymNo/wD4NUDsaOAPdL/qumBvC+xnAWCmzpEZWIQZA9xvecPMYAxDjdCcOeJwVoNjiax4nAI0ls1Q8nMOxGKB2g+PlqQ/YzgC1m1nVI8d2Buqpp9O/5k6OYcwAxcLDTv9PGDNAuR/EVWQPczeAsfL0uPNuEWIA1Ofk69JQDvs0QPkdrrsTv6r8JqZITFfEF0rvaRYNUCw2qOJbGDNAs1hI6DnAWTTAVU0702NU1SpQbKDg/oKZAFAF8mPuQbpmwDVSz4ueRlpGwfZQUKyidFaN5OpdRQvL5alBHIMBqvTSlLO3gZU2wLXKOvuHVKsq0NgPYyqVx1EboBnafssxAKrjm02OAVC75KKTXsN2Bmicsx+4HQDP+m8cA+CxZOVYsjXtRrMqt4TtDFC7gbiulIriYmGmTBYLbjzjDk1hMsS8guecNwXdjBYxMl0R2S0e4LoCqJn11mDb1zzrpY1MaaW33llP5fX12LcBMQscA6CZ3VrgGADNQjKvRpMcZhbzJMIGxPxyDEA8MyJmQMyvyMSAqKBaD3MFK1BTwa5QsJ0r6CR3y8mdOivYZDWdAK36U+jNrDdLvYn1JqnbrNtSt1i3hG5/Sbr+KfTTrJ+W+inWT0n9JOsnpd7CeovUOV9b5mtzvrbM1+Z8bZmvzfnaMl+b87Vlvhbna8l8Lc7XkvlanJcl87I4L0vmZXFe+mftCgt1dobEE6IySWdjtM4n5CwIZ0k5B8o5Us6Dcp6UC6BcIOUiKBdJuQTKJVIug3KZlCugXCHlKihXSbkGyjVSroNynZQboNwg5SYoN0m5BcotUm6DcpuUO6DcIeUuKHdJuQfKPVLug3KflAegPCDlISgPSXkEyiNSHoPymJQnoDwh5SkoT0l5BsozUqwv8GGs/Kp5Vr7qEm+S2LjKxf/0nPALRkPnK30p9lvM5ZzsBES+edXZwW/jjQEVxf254+X37aHKbRteNDYEmo7NSXv4Hi/3asyX6ttV4XiNHwOpHqeu1ndVjt7fBup0wEc6dS8H7OXUvTyelyMt7s+zxwNglxtxptBDAdD93g6yqwYQ/o9rBlC3M/gnfnAwoq8nv1qFenzW3/WKXr7O20ce7d08feRkVlstNT1PfxKQfd/1R9/l+yffP/n+yfdPn6l/OnFc/qncO+Qu9+L71YDc/wdmxf6vgca2Xihlo/jGN0DtxjPOMJ4NAfA7O+LsoRcB4Hf9dnE/Qe/6Koj9tPwexwJAsdyqWp/BmAG6X2pLnKoZoHYTs84OnYoaoHZ7e040XsyN8+lYjUR12PlZOyqsgwHqY7O/1DeCrQ38F15H+xftVGjUVRB7pt5Fec+sAMXWlnVlMWbAdw++e/Ddg+8efPfwGbmH5uNyD14OweuboxvOlObRdQBQn7EVN4HjBqBYYsZdo29yBnhHPPobYCkxXYrhSRAA9Tk3r1K0DxigPj1Oapx0TnxXNED38/iq5nUqpbK6TDjPADK2uC1iGqieC4fF3/F7JAC1i82qaArbGeCnZ0tl0HEBUJ+pYWcKnRMA12VTFZJUlyqIvfPfO+FJ5Ys5Oo0zIPbzI09j/tLZ1Dte3/X4rsd3Pb7r8V1P4JN2PS3S9fyfrzJ/yfhL5hNYMg09HwExlx+D8ygAAA=='
}