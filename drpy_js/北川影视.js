//发布页https://www.bcyingshi.ink/fb/
var rule =  {
            title: '北川影视',
            模板: 'mxpro',
            host: 'http://www.bcys.xyz', // homeUrl:'/',
            url:'/vodshow/fyclassfyfilter/',
            searchUrl: '/vodsearch/page/fypage/wd/**/',
            searchable: 2,//是否启用全局搜索,
            quickSearch: 0,//是否启用快速搜索,
            filterable: 1,//是否启用分类筛选,
            filter: 'H4sIAAAAAAAAA+2ZbU8TWRTHv4qZt2DCFJ/Wd4DgouVBxSc2vjCGRLO7brK6m2wMSaEUWxbkIUhFiCSrWDSUFiVsmabwZTp32m+xM73n/M/tRidkA2QT5938/v/eO/fcez3nMD6zbOviD8+sH0f+sC5abiankimr1Xp8/+cRk3+//9NvI40fPg7k1EY9uRHIPlijraQurfq/J5WAPS+9TRMJsKfG5lRiiTwCzDm1Ua2s8pwaMGdu3t0r85waMA4LF8C4qYJX+cjjNGDc+nOZkwDrHN/0luZ5nRrgJafU+Gv2NGDOrV3XyfOcGuBNLtSXP7CnAd7ctEpgPzWwVzuY83eDPAKsJf2q6mR4LRoQ+9h+/fU+x66Bve87B8gInljt7Ow6NdDfTY5PLQGx29HXMSwuE2a8Gb/JUwaPGDU4GO8+NXSLhwXY4iP7PQN3yAqeRu8FOl3Q1aI77RgXlPlQF/Rdrr48yRuqgb36+2VVKpBHgHGzRbXHm0aADd1/4a5UeEM14CCy62p1kw9CA9639kHGEeB9M0XXec/v04CD/3NbxhHgfZ9fikeAdc6/cVMlXqcG9qoHE14lq5Y4fGGZuWjO3ADzWGqFfG0jIccCPtSxrFT833O4GoxwxSNASJ/eiUeA7c1W3Jms2MLGARi2BuPgxCMwNtnwNCCS/b+NSDTAS+26W0n2NDTd7L2darli3Gzmw2xhrC12hrTGo6G3i95u6jHRY6Zui26bepvobYZufwfdfzT0C6JfMPXzop839XOinzP1s6KfNXWJ1zbjtSVe24zXlnhtM15b4rXNeG2J139sOqh8VhVmjINi/tdBQTYPqoNTnuRXzqxQukjpgnKJlEtQOONKru3hjAnlMimXJR9zMobSS0ovlCukXIFylZSrUOKkxKH0kdIHpZ+UfihcXaS2DJIyCOUaKdegXCflOpQbpNyAMkTKEBQuO1JzuNhIlblNym0oXHXuQLlLyl0ow6QMQ2k7zf8Gmi+KerHgOrNyUcDNF0Vld+vZHTF96ekjfwCys+Oo4mKT//DR0yeSIgsTbnqyyX/y4JdfR4K13Gu1YkfV3nlreWnvWoi+ld7vv/ZpYT2j53x0Ky+9zHNeDvg4u7z+7qGeeC/fdKb/fQ/Iq+/k7Bg8HV1nOJnyf4/jbcBxdoZh3V9Y1/jFPuwQnWFIh/dtdnFRN2ZF3VjUjVlRN3ay3Vj7UXVj9UTGyyU48WlA4kum1MQaJz4NWN/WQa2Y5lSsAeMW8mpqncdpkGSaUiX+fkAgSfhzdW8OSbgBRhWsv+W1EJgN0NYbo/vxAe9b+VTLOPw+DRi3uKZ20PxpwLhSSaVnq86CNE5NEvZh5y+vzCdEgDm2x2tj0zxaw4m0Gn5r4TcRWHYDjGrm1zepZgHA28z5W8uehqiwR4Xdigp7VNijwn4Shf3MSfwvWuhXiJCvJaFfNkK+lvjTeItlmTMApPeQLzBf+cZwZCV0pVJ1sEUajNrw9b+ev1QmpW5Uy/whiiAqoVEJtaISGpXQqIQefwkd/QcqVdoziiIAAA==',
            filter_url: '-{{fl.地区}}-{{fl.排序}}-{{fl.剧情}}-{{fl.语言}}-{{fl.字母}}---fypage---{{fl.年份}}',
            headers: {//网站的请求头,完整支持所有的,常带ua和cookies
                'User-Agent': 'MOBILE_UA', // "Cookie": "searchneed=ok"
            },
            class_parse: '.navbar-items&&li:gt(1):lt(6);a&&Text;a&&href;.*/(.*?)/',
            play_parse: true,
            lazy: '',
            limit: 6,
            double: true, // 推荐内容是否双层定位
            二级: {
                title: 'h1&&Text;.module-info-tag-link:eq(2)&&Text',
                "img": ".lazyload&&data-original",
                "desc": ".module-info-item:eq(2)&&Text;.module-info-tag-link&&Text;.module-info-tag-link:eq(1)&&Text;;",
                "content": ".module-info-introduction&&Text",
                "tabs": ".module-tab-item",
                "lists": ".module-play-list:eq(#id) a"
            },
        }