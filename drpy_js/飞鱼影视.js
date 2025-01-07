var rule = {
  title: '飞鱼影视',
  host: 'https://www.kufeiyu.com',
  url: '/list/fyclass-fypage.html',
  searchUrl: '/vodsearch/page/fypage/wd/**.html',
  class_parse: '.top_nav li;a&&Text;a&&href;/(\\d+).html',
  searchable: 2,
  quickSearch: 0,
  filterable: 0,
  headers: {
    'User-Agent': 'MOBILE_UA',
  },
  play_parse: true,
  lazy: '',
  limit: 6,
  推荐: '.cbox_list;*;*;*;*;*',
  double: true,
  一级: 'ul.vodlist li;a&&title;a&&data-original;.pic_text&&Text;a&&href',
  二级: {
    重定向: $js.toString(() => {
            log('执行重定向:' + MY_URL);
            // let html = request(MY_URL);
            MY_URL = pd(html, '.playbtn&&a&&href', MY_URL);
            log('二级重定向到:' + MY_URL);
            html = request(MY_URL);
        }),
    title: 'h2&&Text;.detail_list&&ul:eq(1)&&li&&a:eq(2)&&Text',
    img: '.vodlist_thumb&&data-original',
    desc: '.content_detail&&li:eq(1)&&Text;.detail_list&&ul:eq(1)&&li&&a&&Text;.detail_list&&ul:eq(1)&&li&&a:eq(1)&&Text;.detail_list&&ul:eq(1)&&li:eq(2)&&Text;.detail_list&&ul:eq(1)&&li:eq(3)&&Text',
    content: '.content_desc&&span&&Text',
    tabs: '.play_source_tab&&a',
    lists: '.content_playlist:eq(#id) li',
  },
  搜索: '*',
}