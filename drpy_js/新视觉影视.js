var rule = {
  title: '新视觉',
  host: 'https://www.6080z.com/',
  url: '/vodshow/fyclass--------fypage---.html',
  searchUrl:'/vodsearch/**----------fypage---.html',
  searchable: 2,
  quickSearch: 0,
  filterable: 0,
  headers: {
    'User-Agent': 'MOBILE_UA',
  },
  class_parse: '.navbar-items li:gt(0):lt(6);a&&Text;a&&href;/(\\d+).html',
  play_parse: true,
  lazy:$js.toString(()=>{
    input = {parse:1,url:rule.host+input.match("'(.*?)'")[1],js:''};
  }),
  limit: 6,
  推荐: '.tab-list.active;a.module-poster-item.module-item;a&&title;.lazyload&&data-original;.module-item-note&&Text;a&&href',
  double: true,
  一级: 'body a.module-poster-item.module-item;a&&title;.lazyload&&data-original;.module-item-note&&Text;a&&href',
  二级: {
    title: 'h1&&Text;.module-info-tag&&Text',
    img: '.lazyload&&data-original',
    desc: '.module-info-item:eq(1)&&Text;.module-info-item:eq(2)&&Text;.module-info-item:eq(3)&&Text',
    content: '.module-info-introduction&&Text',
    tabs: '.hisSwiper .module-tab-item',
    lists: '.module-play-list:eq(#id) a',
  },
  搜索: 'body .module-item;.module-card-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href;.module-info-item-content&&Text',
}