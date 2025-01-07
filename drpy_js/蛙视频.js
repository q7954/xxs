var rule = {
  模板: '海螺3',
  title: '[影]蛙视频',
  host: 'https://www.wvod.tv',
  searchUrl: '/vodsearch/page/fypage/wd/**.html',
  url: '/vodshow/id/fyclass/page/fypage.html',
  headers: {
    'User-Agent': 'MOBILE_UA',
  },
  timeout: 5000,
  class_parse: 'body&&.hl-nav li:gt(0);a&&Text;a&&href;/\\w+/(\\d+).html',
  cate_exclude: 'TV直播|午夜场',
  limit: 40,
  play_parse: true,
  lazy: $js.toString(() => {
    let html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
    let url = html.url;
    if (html.encrypt == '1') {
      url = unescape(url)
    } else if (html.encrypt == '2') {
      url = unescape(base64Decode(url))
    }
    if (/\.m3u8|\.mp4/.test(url)) {
      input = {
        jx: 0,
        url: url,
        parse: 0
      }
    } else {
      input
    }
}),
  double: true,
  推荐: '.hl-vod-list;li;a&&title;a&&data-original;.remarks&&Text;a&&href',
  一级: '.hl-vod-list&&.hl-list-item;a&&title;a&&data-original;.remarks&&Text;a&&href',
  二级: {
    title: '.hl-dc-title&&Text;.hl-dc-content&&li:eq(6)&&Text',
    img: '.hl-lazy&&data-original',
    desc: '.hl-dc-content&&li:eq(10)&&Text;.hl-dc-content&&li:eq(4)&&Text;.hl-dc-content&&li:eq(5)&&Text;.hl-dc-content&&li:eq(2)&&Text;.hl-dc-content&&li:eq(3)&&Text',
    content: '.hl-content-text&&Text',
    tabs: '.hl-tabs&&a',
    tab_text: 'a--span&&Text',
    lists: '.hl-plays-list:eq(#id)&&li',
  },
  搜索: '.hl-list-item;a&&title;a&&data-original;.remarks&&Text;a&&href',
  searchable: 2,
  quickSearch: 0,
  filterable: 0,
}