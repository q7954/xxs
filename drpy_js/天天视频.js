var rule = {
  title: '天天视频',
  host: 'https://www.ttsp.tv/',
  url: '/vodshow/fyclass--------fypage---.html',
  searchUrl: '/**----------fypage---.html',
  class_parse: '.top_nav li;a&&Text;a&&href;.*/(.*?).html',
  cate_exclude: '午夜剧场',
  searchable: 2,
  quickSearch: 0,
  filterable: 0,
  headers: {
    'User-Agent': 'MOBILE_UA',
  },
  play_parse: true,
  lazy:$js.toString(()=>{
    input = {parse:1,url:rule.host+input.match("'(.*?)'")[1],js:''};
  }),
  limit: 6,
  推荐: '.cbox_list;*;*;*;*;*',
  double: true,
  一级: 'ul.vodlist li;a&&title;a&&data-original;.pic_text&&Text;a&&href',
  二级: {
    title: 'h2&&Text;.detail_list&&ul:eq(1)&&li&&a:eq(2)&&Text',
    img: '.vodlist_thumb&&data-original',
    desc: '.content_detail&&li:eq(1)&&Text;.detail_list&&ul:eq(1)&&li&&a&&Text;.detail_list&&ul:eq(1)&&li&&a:eq(1)&&Text;.detail_list&&ul:eq(1)&&li:eq(2)&&Text;.detail_list&&ul:eq(1)&&li:eq(3)&&Text',
    content: '.content_desc&&span&&Text',
    tabs: '.play_source_tab&&a',
    lists: '.content_playlist:eq(#id) li',
  },
  搜索: '*',
}