var rule = {
    title: '萌道动漫',
    host: 'https://www.mddm.tv',
    //url: '/search.php?page=fypage&searchtype=5&tid=fyclass',
    url: 'https://www.mddm.tv/search.php?page=fypage&searchtype=5&fyfilter',
    searchUrl: '/search.php?page=fypage&searchword=**&searchtype=',
    filter_url: 'order={{fl.by}}&tid={{fl.cateId}}&area=&year={{fl.year}}&letter=&yuyan=&state=&money=&ver=&jq={{fl.class}}',
    filter_def: {
        '1': {
            cateId: '1'
        },
        '2': {
            cateId: '2'
        },
        '3': {
            cateId: '3'
        },
        '4': {
            cateId: '5'
        },
        '5': {
            cateId: '4'
        }
    },
    class_name: '日本动漫&国产动漫&欧美动漫&剧场电影&次元影视',
    class_url: '1&2&3&4&5',
    searchable: 2,quickSearch: 0,filterable: 1,
    headers: {
        'User-Agent': 'MOBILE_UA'
    },
    play_parse: true,limit: 6,double: true,
    lazy: '',
    推荐: '.index-list;li;a&&title;.lazy&&data-original;.bzjq&&Text;a&&href',
    一级: '.index-tj li;.li-hv&&title;.lazy&&data-original;.bzjq&&Text;a&&href',
    二级: {
        title: 'h1&&Text;.detail_list&&ul:eq(1)&&li&&a:eq(2)&&Text',
        img: '.vodlist_thumb&&data-original',
        desc: '.info&&dd:eq(1)&&Text;.info&&dd:eq(2)&&Text;.info&&dd:eq(3)&&Text;.info&&dd:eq(4)&&Text',
        content: '.desdd&&Text',
        tabs: '.pfrom&&li',
        lists: '.urlli:eq(#id) li',
        list_url: 'a&&href'
    },
    搜索: '.index-tj li;.li-hv&&title;.lazy&&data-original;.bz&&Text;a&&href',
    filter: 'H4sIAAAAAAAAA3WT3UoCQRiG72WPO9ixNPNWooMtFoqsQC0QESqzzMA0wk0MSUI01MiS8IfqZprZvIvWZr6fgs72eZ/dmXlnZjOWsGKrGWvbTVsxayPuJJPWgrXr7LgByvO2yuUDPnDi++7Pe7vzON+Z5Tokg8jKLmjn5/pfzUOTGkDXrsjxFJwGcOq451crxhlAV7hRVQ+cBnRHF35hAE4DOHl6Nas9GGcA3VNFtl7AaUBXLsnHLjgNON9dU9b7MJ8GdOWG38MOGnDM1hl1N4DfPU/VSQG+04B71mrM+tewZxrQdRuqiHutAdzXR1kWO8YZwPluJ8Euwnwa0HktORqB04AdigP5AedgANdSe5dl6GAA13L45r+XYC0acEx+iwxk1+ZW38i06yTYhRwPP6f3/1xI5b3OvOHfCxmyQ0sm+3lk+SLlizwPUR7iuaBc8Nym3Ga5WME8eGR5lPIoz5cpX+Z5hPIIz8OUh3lOfQXvK6iv4H0F9RW8r6C+gvcV1Ffwvjb1tXlfm/ra1FfVh8qDn3NnL+H+Ovb1NB26Kl3JyeV/h46SH/qvq5DaCoYB8zmZqCf4nza3UvNZ17LfwdFuEQYFAAA='
}