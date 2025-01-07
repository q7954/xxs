var rule={
  title: "乌卡猫影院",
  模板: "自动",
  host: "https://wukamao.com",
  url: "/vodshow/fyfilter.html",
  searchUrl: "/vodsearch/**----------fypage---.html",
  filterable: 1,
  filter: "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",
  filter_url: "{{fl.分类}}-{{fl.地区}}--{{fl.类型}}-{{fl.语言}}-{{fl.字母}}---fypage---{{fl.年份}}",
  filter_def: {
    1: {
      分类: "1"
    },
    2: {
      分类: "2"
    },
    3: {
      分类: "3"
    },
    4: {
      分类: "4"
    },
    20: {
      分类: "20"
    }
  },
  class_parse: ".hl-nav&&li;a&&Text;a&&href;(\\d+)",
  cate_exclude: "论里片|体育|解说|邵氏",
  //二级: {
   // title: "vod_name;vod_type",
  //  img: "图片链接",
  //  desc: "主要信息;年代;地区;演员;导演",
  //  content: "简介",
 //   tabs: "",
  //  lists: "",
  //  tab_text: "body&&Text",
  //  list_text: "body&&Text",
   // list_url: "a&&href"
  //},
  //搜索: ""
}