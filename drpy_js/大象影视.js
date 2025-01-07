var rule = {
            title: '大象影视',
            host: 'https://slzc.cn',
            url: '/vodshow/fyclass--------fypage---.html',
            searchUrl: '/vodsearch/**----------fypage---.html',
            headers: {'User-Agent': 'UC_UA'},
            searchable: 1,quickSearch: 0,
class_name: '电影&电视剧&动漫&综艺&短剧',
class_url: '1&2&4&3&36',
 play_parse: true,limit: 6,推荐:'*',tab_exclude:'热播榜|友情|猜你喜欢',
            lazy: `js: 
let pclick = 'document.querySelector("#playleft iframe").contentWindow.document.querySelector("#start").click()';
input = { parse: 1, url: input, js: pclick, click: pclick}`,
            一级: '.hl-vod-list li;a&&title;.hl-lazy&&data-original;.hl-pic-text&&Text;a&&href',
            二级: {
                title: '.hl-dc-content&&.hl-dc-title&&Text',
                img: '.hl-lazy&&data-original',
                desc: '.hl-dc-content&&.hl-col-xs-12:eq(1)&&Text;.hl-dc-content&&.hl-col-xs-12:eq(4)&&Text;.hl-dc-content&&.hl-col-xs-12:eq(5)&&Text;.hl-dc-content&&.hl-col-xs-12:eq(2)&&Text;.hl-dc-content&&.hl-col-xs-12:eq(3)&&Text',
                content: '.hl-dc-content&&.blurb&&Text',
                tabs: '.hl-plays-from a',
                lists: '.hl-plays-list:eq(#id)&&li a'
            },
            搜索:'.hl-one-list li;*;*;*;*;.hl-item-content&&p:eq(0)&&Text',
        }