globalThis.getdata = function() {}
globalThis.getjl = []
globalThis.getobj = {}
globalThis.isHiker = typeof MY_NAME !== "undefined";
var rule = {
    author: '嗷呜',
    title: '夸克合集',
    host: 'https://drive.quark.cn',
    url: '/1/clouddrive/share/sharepage/token?pr=ucpro&fr=pc',
    filterable: 1,
    searchable: 2,
    quickSearch: 0,
    homeListCol:"avatar",
    hikerClassListCol:"avatar",
    headers: {
        'Origin': 'https://pan.quark.cn',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) quark-cloud-drive/2.5.20 Chrome/100.0.4896.160 Electron/18.3.5.12-a038f7b798 Safari/537.36 Channel/pckk_other_ch',
        'Referer': 'http://pan.quark.cn/',
        'Content-Type': 'application/json',
        'Cookie': ''
    },
    play_parse: true,
    lazy: $js.toString(() => {
        function sleep(milliseconds) {
            var start = new Date().getTime();
            var end = 0;
            while ((end - start) < milliseconds) {
                end = new Date().getTime();
            }
        }
        let fg = input.split(getobj['wc'])
        let save_as_top_fids = fg[1]

        function findValue(char) {
            if (getjl.length === 0) {
                return null;
            }
            for (let item of getjl) {
                if (item.key === char) {
                    return item.value;
                }
            }
            return null;
        }
        let play = findValue(fg[1])
        if (fg[0] !== 'self' && !play) {
            if (!getobj['zctoken']) {
                let pdirpath = '/1/clouddrive/file/sort?pr=ucpro&fr=pc&uc_param_str&pdir_fid=0&_page=1&_size=50&_fetch_total=1&_fetch_sub_dirs=0&_sort=file_type:asc,file_name:asc'
                let pdirdata = getdata(pdirpath, 'GET', '').data.list
                for (let i = 0; i < pdirdata.length; i++) {
                    if (pdirdata[i].file_name === '0000temp' || pdirdata[i].file_name === '来自：分享') {
                        getobj['zctoken'] = pdirdata[i].fid
                        break;
                    }
                }
            }
            let pdir = getobj['zctoken']
            let body = {
                "fid_list": [fg[1]],
                "fid_token_list": [fg.slice(-1)[0]],
                "to_pdir_fid": pdir,
                "pwd_id": fg[0],
                "stoken": getobj[fg[0]].stoken,
                "pdir_fid": "0"
            }
            let task_path = '/1/clouddrive/share/sharepage/save?pr=ucpro&fr=pc'
            let task_id = getdata(task_path, 'POST', body).data.task_id
            for (let i = 0; i < 10; i++) {
                sleep(1000)
                let datapath = `/1/clouddrive/task?pr=ucpro&fr=pc&task_id=${task_id}&retry_index=1`
                let data = getdata(datapath, 'GET', '').data.save_as.save_as_top_fids
                if ((data.length > 0)) {
                    save_as_top_fids = data[0]
                    break;
                }
            }
        }
        if (!play) {
            play = []

            function pdxc(zm, url) {
                let yurl = url
                let kzdxc = getobj['thread'].url || 'http://127.0.0.1:7777?url='
                if ((getobj['thread'].of === '' || getobj['thread'].of === true) && !getobj['pdhk']) {
                    yurl = kzdxc + encodeURIComponent(url) + '&thread=' + (getobj['thread'].num || 10)
                    if (getobj['thread'].zmof === false && zm === 1) {
                        yurl = url
                    }
                }
                return yurl
            }
            let dtu = ''

            function ddd() {
                let body1 = {
                    "fid": save_as_top_fids,
                    "resolutions": "normal,low,high,super,2k,4k",
                    "supports": "fmp4,m3u8"
                }
                let pldpath = '/1/clouddrive/file/v2/play?pr=ucpro&fr=pc'
                let pldata = getdata(pldpath, 'POST', body1).data.video_list
                pldata.forEach(it => {
                    if (it.video_info.width && it.video_info.url) {
                        dtu = pdxc(1, it.video_info.url)
                        play.push(it.video_info.width.toString(), dtu)
                    }
                })
            }
            for (let i = 0; i < 10; i++) {
                sleep(1000)
                try {
                    ddd()
                    break;
                } catch {
                    play = []
                }
            }
            let body1 = {
                'fids': [save_as_top_fids]
            }
            let pldpath = '/1/clouddrive/file/download?pr=ucpro&fr=pc'
            let pldata1 = getdata(pldpath, 'POST', body1).data[0]
            dtu = pdxc(100, pldata1.download_url)
            play.unshift('原画', dtu)
            if (fg[0] !== 'self') {
                let scpath = 'https://drive-pc.quark.cn/1/clouddrive/file/delete?pr=ucpro&fr=pc'
                let scbody = {
                    "action_type": 2,
                    "filelist": [save_as_top_fids],
                    "exclude_fids": []
                }
                let tsid = getdata(scpath, 'POST', scbody).data.task_id
                let scurl = `https://drive-pc.quark.cn/1/clouddrive/task?pr=ucpro&retry_index=1&task_id=${tsid}&fr=pc`
                let scxy = getdata(scurl, 'GET', '')
            }

            function sxjl() {
                if (getjl.length === (getobj['plays'] || 10)) {
                    getjl.pop();
                }
                getjl.unshift({
                    key: fg[1],
                    value: play
                });
            }
            let sx = sxjl()
        }
        fg.lenght = 0
        let header = Object.assign({}, rule.headers)
        delete header['Content-Type']
        if (getobj['pdhk']) {
            let plays = {
                urls: [],
                names: [],
                headers: header
            }
            for (let i = 0; i < play.length; i += 2) {
                plays.names.push(play[i])
                plays.urls.push(play[i + 1])
            }
            play = plays
        }
        input = {
            url: play,
            parse: 0,
            header: header
        }
    }),
    预处理: $js.toString(() => {
        function pjson(str) {
            let regex = /\/\*[\s\S]*?\*\//g;
            let st = str.replace(regex, '')
            return dealJson(st)
        }
        let html = request(rule.params);
        let json = pjson(html);
        let cookie = json.cookie
        let c_n = json.c_n || 'quark_cookie'
        getobj['pdhk'] = (rule.params.includes('file://')) ? true : false
        if (cookie.endsWith('.txt') || cookie.endsWith('.json')) {
            let url = "http://127.0.0.1:9978/" + cookie
            if (getobj['pdhk']) {
                let sock = cookie.split('/')[1]
                url = rule.params.split(sock)[0] + cookie.replace('file/', '')
            }
            cookie = request(url)
            if (url.endsWith('json')) {
                cookie = dealJson(cookie)[c_n]
            }
        }
        if (!cookie && json.ckurl) {
            try {
                cookie = $require(json.ckurl)
            } catch (e) {}
        }
        rule_fetch_params.headers.Cookie = cookie
        let data = json.classes
        let self = {
            "type_name": "我的夸克",
            "type_id": "self"
        }
        data.unshift(self);
        if (isHiker) {
            data.unshift({
                "type_name": "设置",
                "type_id": "setting"
            });
        }

        data.forEach(item => {
            getobj[item.type_id] = {};
            item.type_flag=1
        });
        getobj['thread'] = json.thread
        getobj['plays'] = json.plays
        getobj['zctoken'] = null
        getobj['wc'] = 'xxx|||'
        getdata = function(path, meth, body, h) {
            let url = HOST + path
            if (path.startsWith('http')) {
                url = path
            }
            let data = fetch(url, {
                method: meth,
                headers: h || rule.headers,
                body: body
            })
            let jsdata = JSON.parse(data)
            return jsdata
        }
        rule.classes = data;
    }),
    class_parse: $js.toString(() => {
        input = rule.classes;
    }),
    一级: $js.toString(() => {

        let vodd = []
        let pdtoken = MY_CATE.split(getobj['wc'])
        let pg = MY_PAGE
        let c = Object.assign({}, rule.headers)
        let pwd_id = pdtoken[0].toString();
        if (pwd_id === "setting") {
            vodd.push({
                vod_id: "set-inputCookie",
                vod_name: "输入Cookie",
                vod_tag: "",
                vod_pic: ""
            }, {
                vod_id: "set-thread",
                vod_name: "多线程设置",
                vod_tag: "",
                vod_pic: ""
            }, {
                vod_id: "set-plays",
                vod_name: "播放链接缓存数",
                vod_tag: "",
                vod_pic: ""
            }, {
                vod_id: "set-editConfig",
                vod_name: "编辑配置文件",
                vod_tag: "",
                vod_pic: ""
            });
            VODS = vodd
        } else {
            let h = (pwd_id === 'self' ? c : (delete c['Cookie'], c))
            if (pdtoken.length == 1 && pwd_id !== 'self') {
                let body = {
                    "pwd_id": pwd_id,
                    "passcode": ""
                }
                let data = getdata(MY_URL, 'POST', body, h)
                let stoken = data.data.stoken
                getobj[pwd_id].stoken = stoken
                let path = `/1/clouddrive/share/sharepage/detail?pr=ucpro&fr=pc&pwd_id=${pwd_id}&stoken=${encodeURIComponent(stoken)}&pdir_fid=0&force=0&_page=${pg}&_size=50&_fetch_banner=1&_fetch_share=1&_fetch_total=1&_sort=file_type:asc,updated_at:desc`
                let fids = getdata(path, 'GET', '', h).data.list
                getobj[pwd_id].fid = fids[0].fid

            } else if (pdtoken.length > 1) {
                getobj[pwd_id].fid = pdtoken[1]
            }
            getobj[pwd_id].pg = pg
            let path = ''
            if (getobj[pwd_id].pg == 1 && pwd_id === 'self' && pdtoken.length == 1) {
                path = "/1/clouddrive/file/sort?pr=ucpro&fr=pc&uc_param_str=&pdir_fid=0&_page=1&_size=50&_fetch_total=1&_fetch_sub_dirs=0&_sort=file_type:asc,file_name:asc"
            } else if (pdtoken.length > 1 && pwd_id === 'self') {
                path = `/1/clouddrive/file/sort?pr=ucpro&fr=pc&uc_param_str=&pdir_fid=${getobj[pwd_id].fid}&_page=${getobj[pwd_id].pg}&_size=50&_fetch_total=1&_fetch_sub_dirs=0&_sort=file_type:asc,file_name:asc`
            } else if (pwd_id !== 'self') {
                path = `/1/clouddrive/share/sharepage/detail?pr=ucpro&fr=pc&pwd_id=${pwd_id}&stoken=${encodeURIComponent(getobj[pwd_id].stoken)}&pdir_fid=${getobj[pwd_id].fid}&force=0&_page=${getobj[pwd_id].pg}&_size=50&_fetch_banner=1&_fetch_share=1&_fetch_total=1&_sort=file_type:asc,file_name:asc`
            }
            let lbdata=reqCookie(HOST+path,{method:'GET',headers:h})
            let ppufg=rule.headers['Cookie'].split(';')
            if(!getobj['pdck']){
                getobj['pdck']=true
                let indexp = ppufg.findIndex(cookie => cookie.trim().includes('_ppus'));
                if (indexp !== -1) {
                  ppufg[indexp] = lbdata.cookie
                }else{
                    ppufg.unshift(lbdata.cookie)
                }
                rule.headers['Cookie'] = ppufg.join(';')
            }
            let lbsz = JSON.parse(lbdata.html).data.list;
            lbsz.forEach(it => {
                let ppp = (/video/.test(it.format_type))
                let qqq = it.format_type === ''
                let isVideoType = ppp || qqq
                let xxx = `${pwd_id}${getobj['wc']}${it.fid}`
                let enji = `${xxx}${getobj['wc']}${it.file_name}` + (it.share_fid_token ? (`${getobj['wc']}${it.share_fid_token}`) : '')
                if (isVideoType) {
                    let vodItem = {
                        vod_id: ppp ? enji : xxx,
                        vod_name: it.file_name,
                        vod_tag: ppp ? '' : 'folder',
                        vod_pic: ppp ? ((pwd_id === 'self') ? '' : it.preview_url) : 'https://gitee.com/amg99/tvjson/raw/master/img/kkwjj.png'
                    }
                    vodd.push(vodItem)
                }
            })
            if (getobj[pwd_id].pg == 1 && vodd.length > 0) {
                getobj[pwd_id].vod = vodd
            } else if (vodd.length > 0) {
                Array.prototype.push.apply(getobj[pwd_id].vod, vodd)
            }
            VODS = vodd
        }
    }),
    二级: $js.toString(() => {
        if (isHiker&&String(vod_id).startsWith("set-")) {
            back(false);
            const hikerPop = $.require("http://hiker.nokia.press/hikerule/rulelist.json?id=6966");
            let cjson={};
            try{
                cjson=JSON.parse(fetch(rule.params));
            }catch(e){
            
            }
            if (vod_id === "set-inputCookie") {

                hikerPop.inputConfirm({
                    content: "输入夸克Cookie",
                    title: "Cookie登录",
                    hint: "Cookie",
                    defaultValue: cjson.cookie,

                    confirm(text) {
                        cjson.cookie=text;
                        writeFile(rule.params,JSON.stringify(cjson,null,4));
                        return "toast://设置成功";
                    }
                });
            } else if (vod_id === "set-thread") {
                hikerPop.selectCenter({
                    options: ["开启多线程播放", "播放线程数", "开启转码多线程"],
                    columns: 1,
                    title: "多线程设置",
                    //position: 2,
                    click(a,i) {
                        return "toast://懒得写了";
                    }
                });
            } else if (vod_id === "set-editConfig") {
                hikerPop.confirm({
                    title: "是否前往编辑配置文件",
                    okTitle: "进入编辑",
                    hideCancel: true, //隐藏取消按钮
                    confirm() {
                        return "editFile://"+rule.params;
                    }
                });
            } else if (vod_id === "set-plays") {
                hikerPop.inputConfirm({
                    content: "输入播放链接缓存数",
                    title: "播放链接缓存数",
                    hint: "plays",
                    defaultValue: String(cjson.plays),

                    confirm(text) {
                        let num=Number(text)
                        if(Number.isNaN(num)||num<1){
                            return "toast://非法数字";
                        }
                        cjson.plays=text;
                        writeFile(rule.params,JSON.stringify(cjson,null,4));
                        return "toast://设置成功";
                    }
                });
            }
        } else {
            let xl = []
            let fg = vod_id.split(getobj['wc'])
            let getvod = getobj[fg[0]].vod
            getvod.forEach(it => {
                if (it.vod_tag !== 'folder') {
                    xl.push(it.vod_name + '$' + it.vod_id)
                }
            })
            VOD = {
                vod_name: fg[2],
                vod_play_from: '夸克预存原画',
                vod_play_url: xl.join('#')
            }
        }
    }),
}