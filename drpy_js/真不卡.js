muban.首图2.二级.desc = ';;;.stui-content__detail p:eq(1)&&Text;.stui-content__detail p:eq(2)&&Text';
//muban.首图2.二级.tabs = '.stui-pannel__head.bottom-line.active.clearfix h3';
muban.首图2.二级.tabs = 'ul.nav-tabs.active&&li';
var rule = {
	title:'真不卡',
	模板:'首图2',
	host:'http://www.hootop.com/',
	//发布地址 http://52kan.info/
//	hostJs:'print(HOST);let html=request(HOST,{headers:{"User-Agent":PC_UA}});let src=jsp.pdfh(html,"li:eq(0)&&a:eq(0)&&href");print(src);HOST=src',
	url:'/films/fyclass_fypage.html',
//	http://www.hootop.com/films/3_2.html
    lterable:1,//是否启用分类筛选,
    filter_def:{
        1:{cateId:'1'},
        2:{cateId:'2'},
        4:{cateId:'4'},
        3:{cateId:'3'}
    },
    class_name:'电影&剧集&综艺&动漫',
	class_url:'1&2&4&3',
	//class_parse:'.stui-header__menu .dropdown li:gt(0):lt(5);a&&Text;a&&href;.*/(.*?).html',
	// searchUrl:'/vodsearch/**----------fypage---.html',
}