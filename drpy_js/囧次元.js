import {load} from 'cheerio';
import CryptoJS from 'crypto-js';
import axios from "axios";
import forge from 'node-forge';


let url = 'http://212.64.45.238:8090/app/video';

function rsadecrypt(rsa_enkey) {
    const privateKeyPem = `-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEAxm2Kzu9L/FNX42em9Xo73JXtJCtrhleKN9jqclpK6/Iyah/T
UjH5RCNItWiTKHg6LcsGxZs9+4fP6uU8oO5Qp1akaOrJTg3QTQQFyRxDrv+LN/nL
6/MpSf3SnihyVPQWwlkj3yHZWrVC9HI3q2JmzGV/kzwnpVIj2as8zl4cO7OZr0F9
bR+G4jblqLPmB/x/BBOGrWWCxn+YI2RVHw23dev9jql284eN/KV4tlDlbtoJGy4+
Cb7nEV/THvRVZYbHAp+fMY0+NyqyslLX/btJqT8eSH6Hb8c+BSC77Dry4G8/m/wU
YPdvXiL3cVhZmEaqjs8rUafGyQmW3mrflAbIJwIDAQABAoIBAQCbRhUdIbzAUyev
V+kapvA5CUlsyF133wDV+vRbT7TZNcmlqgnfhCOe4k1/R7oALTS5qOo/r9+s+PYG
xiPPey26BN7bCv9ECSM7YS511ZxRUL9MqjidBscEk49BHD17pRY6Ny8O6JoBlV4z
kz1k67etsq9GNAiCIejT6F/IzXQicmO5MaJWCjBNSP+IPTvd5NW3DUNlt2NcCBvO
2sCgSq2Z4B0IdNWeSvd4ZmA2qSkqk60A8glNR4HdRTG9VWR0fUOd/qzpN1vjBUKM
aIHeUX50NCRdK8EGqrVOCq4uUgBRj7bjt0DOb9ck4vYxgBdkyK4HMYsAGdirYKxd
DkseicqhAoGBAOZ750Vky38kq3MucAE/uaFpaDUSeOKDy03fumM6TLlkeAxnTQZW
NBDzlrqNgQPMLu+tmm+ZsEN5buF8C2oKc97+Rz21rvrOufr4sX2PqHfj/kerYGq/
NzX1jpRbqsmcs+3JxveeozHuXBbOFpd8teCGZPFPHREFDe4sZFtFmwX1AoGBANxl
JNlKIz0TVmPgGCUZ4j8BRBiLPHMeFkUoam6Djou2iJLYey3ZNHhyMiRER7Smia0f
Y/QjqJIeSRWQlZExu6s9ijl4VSmoh4hLanOxxAE+gFnuhgK4XwMV0hvHbqSaupQd
fkULZ+t3rGKzt+t+0ob7xx+LjYWEwpLsKCQKRKgrAoGADLPvfyea/5rpyCNbEPaO
KJNCpwopl3JkFhqqjyV7bQxYgXaADEVcAUMrn4SFA8yRGaybwmLaEB31OoA3sNR6
pmOlUYVd63zRSz/BqIXuZw0tyo1rdvaq+FJcVVjoBMyaLhTc3nDj1bCpaqhZHmhF
Lea6UYJmu7VnmyTfMxiW/rECgYAh4MJLTGQiTUioTZgoi9QFT1KCW1TNdUCDHPVP
S5Wr0EEqIXC92XeBVDx06rIDCN586ChbLOgKnfEqCXGUQgrRBcKrlt2wa6F5x+3z
Hs48Srk8Gbgrzt97/+yuLHfLgaVQg0AXqOsufNTYzztkTbha23T+WltEvOWT5A0/
jPyExQKBgCGbq62piyIEeMNoP/SoLvh4hTq/eeNw5yCcLEsLrgt45Xb/2YgeyXWv
xTXl4c8bPdZTFYQ9A7IUYvhizpH032tDouqCsvgu3KtDO/pW6IteL17YBco7fRMQ
JhBuQjGDCMEGEJW76GwlXj/xUW32TN/5KeQXtHHZ4z2lZlJLU81B
-----END RSA PRIVATE KEY-----`;
    const privateKey = forge.pki.privateKeyFromPem(privateKeyPem);
    const encryptedData = Buffer.from(rsa_enkey, 'base64');
    const decryptedData = privateKey.decrypt(encryptedData);
    return  decryptedData.toString();
}

function aes_decrypt(aes_entxt, key, iv) {
     let key_data =  CryptoJS.enc.Utf8.parse(key),
        iv_data =  CryptoJS.enc.Utf8.parse(iv),
         text = CryptoJS.enc.Base64.parse(aes_entxt),
        decrypted =  CryptoJS.AES.decrypt({ciphertext:text}, key_data, {
                iv: iv_data,
                mode:  CryptoJS.mode.CBC,
                padding:  CryptoJS.pad.NoPadding
        });
    return decrypted.toString(CryptoJS.enc.Utf8);
}

async function request(reqUrl,mt) {
    let config = {
      method: mt,
      url: reqUrl,
      headers: {
        'User-Agent': 'Dart/2.17 (dart:io)',
        'Accept-Encoding': 'gzip, deflate',
        'Accept': 'application/json, text/plain, */*',
        'x-version': '2020-09-17',
        'appid': '4150439554430529',
        'ts': '1722357692434',
        'authentication': '/3pyiNjlAh8MXUdwrdkvfs+hUlrKcv2QVrlmCoPPL5nfGxWwHJ3OFUJpdgWYzaUBPIskqplgdB8WSPkozigXVg9bFGzqYKPMrXVztpVqzWY9S3WvOOLYNh1OuXbrl5Otmy21nP0XnDP++08/ApFPcg=='
      }
};
    let res =  await axios(config);
    return res.data;
}

async function init(inReq, _outResp) {
    return {};
}

async function home(inReq, _outResp) {
    let classes = [{
        type_id: '1',
        type_name: '日漫',
    },{
        type_id: '2',
        type_name: '国漫',
    },{
        type_id: '26',
        type_name: '动漫电影'
    },{
        type_id: '3',
        type_name: '其他动漫'
    }];
    return {
        class: classes,
    };
}


async function category(inReq, _outResp) {
    const tid = inReq.body.id;
    let pg = inReq.body.page;
    if (pg <= 0) pg = 1;
    const html = await request(`${url}/list?channel=${tid}&sort=addtime&type&area&year&limit=30&page=${pg}`,'get');
    const data = html.split('.')
    const rsa_enkey = data[0]
    const aes_entxt = data[1]
    const key = rsadecrypt(rsa_enkey)
    const iv = [...key].reverse().join('')
    const decrypted = aes_decrypt(aes_entxt,key,iv)
    let videos = [];
    const id = decrypted.match(/"id":(\d+)/g)
    const name = decrypted.match(/"name":"([^"]*)"/g)
    const pic = decrypted.match(/"pic":"([^"]*)"/g)
    const content = decrypted.match(/"content":"([^"]*)"/g)
    for (const i in id) {
        videos.push({
            vod_id: id[i].replace('"id":',''),
            vod_name:name[i].replace('"name":','').replace(/"/g,''),
            vod_pic:pic[i].replace('"pic":','').replace(/"/g,''),
            vod_content:content[i].replace('"content":','').replace(/"/g,'')
        })
    }
    const hasMore = videos.length > 0;
    const pgCount = hasMore ? parseInt(pg) + 1 : parseInt(pg);
    return JSON.stringify({
        page: parseInt(pg),
        pagecount: pgCount,
        limit: 24,
        total: 24 * pgCount,
        list: videos,
    });
}

async function detail(inReq, _outResp) {
    const id = inReq.body.id;
    const html = await request(url+'/detail?id='+id,'get');
    const data = html.split('.')
    const rsa_enkey = data[0]
    const aes_entxt = data[1]
    const key = rsadecrypt(rsa_enkey)
    const iv = [...key].reverse().join('')
    const decrypted = aes_decrypt(aes_entxt,key,iv)
    const tabs = decrypted.match(/"part":\[([^\]]*?)\]/)[1].split(',')
    const type = decrypted.match(/"play":"([^"]*)"/)[1]
    let vod = {
        vod_id: id,
    }
    const urls = []
    for (const i in tabs) {
        const form = tabs[i].replace(/"/g,'')
        const link = 'http://212.64.45.238:8090/app/video/play?id='+id+'&play='+type+'&part='+encodeURIComponent(form)
        urls.push(form+"$"+link);
    }
    let playFroms = [];
    let playUrls = []
    playFroms.push('由不知道倾情打造');
    vod.vod_play_from = playFroms.join('$$$');
    playUrls.push(urls.join('#'));
    vod.vod_play_url = playUrls.join('$$$');
    return JSON.stringify({
        list: [vod],
    });
}

async function play(inReq, _outResp) {
    const id = inReq.body.id;
    const html = await request(id,'post')
    const data = html.split('.')
    const rsa_enkey = data[0]
    const aes_entxt = data[1]
    const key = rsadecrypt(rsa_enkey)
    const iv = [...key].reverse().join('')
    const decrypted = aes_decrypt(aes_entxt,key,iv)
    const parse = decrypted.match(/[a-zA-Z]+:\/\/[^\s].*url=/)[0]
    const url_encode = decrypted.match(/"url":"([^"]*)"/)[1]
    const t = Math.floor(Date.now()/1000)
    const url_link = CryptoJS.MD5(url_encode+'v50gjcy'+t)
    const link = url_encode+'$'+t+'$'+url_link;
    const parse_content = await request(parse+link);
    const url = parse_content.url
    return JSON.stringify({
        parse: 0,
        url: url,
        header:{
            'User-Agent': 'AVDML_2.1.158.44-tt-net4_ANDROID,tt_mixed_stream,MDLTaskPreload,MDLGroup(13)'
        }
    });
}


async function search(inReq, _outResp) {
    const wd = inReq.body.wd;
    const pg = inReq.body.page;
    let html = await request(`${url}/index.php/vod/search/page/${pg}/wd/${wd}.html`);
    const $ = load(html);
    let videos = [];
    for (const item of $('.public-list-box')) {
        const a = $(item).find('a')[0];
        const img = $(item).find('img')[0];
        videos.push({
            vod_id: a.attribs.href,
            vod_name: img.attribs.alt.replace('封面图',''),
            vod_pic: img.attribs['data-src']
        });
    }
    return JSON.stringify({
        list: videos,
    });
}

async function test(inReq, outResp) {
    try {
        const printErr = function (json) {
            if (json.statusCode && json.statusCode === 500) {
                console.error(json);
            }
        };
        const prefix = inReq.server.prefix;
        const dataResult = {};
        let resp = await inReq.server.inject().post(`${prefix}/init`);
        dataResult.init = resp.json();
        printErr(resp.json());
        resp = await inReq.server.inject().post(`${prefix}/home`);
        dataResult.home = resp.json();
        printErr(resp.json());
        if (dataResult.home.class.length > 0) {
            resp = await inReq.server.inject().post(`${prefix}/category`).payload({
                id: dataResult.home.class[0].type_id,
                page: 1,
                filter: true,
                filters: {},
            });
            dataResult.category = resp.json();
            printErr(resp.json());
            if (dataResult.category.list.length > 0) {
                resp = await inReq.server.inject().post(`${prefix}/detail`).payload({
                    id: dataResult.category.list[0].vod_id, // dataResult.category.list.map((v) => v.vod_id),
                });
                dataResult.detail = resp.json();
                printErr(resp.json());
                if (dataResult.detail.list && dataResult.detail.list.length > 0) {
                    dataResult.play = [];
                    for (const vod of dataResult.detail.list) {
                        const flags = vod.vod_play_from.split('$$$');
                        const ids = vod.vod_play_url.split('$$$');
                        for (let j = 0; j < flags.length; j++) {
                            const flag = flags[j];
                            const urls = ids[j].split('#');
                            for (let i = 0; i < urls.length && i < 2; i++) {
                                resp = await inReq.server
                                    .inject()
                                    .post(`${prefix}/play`)
                                    .payload({
                                        flag: flag,
                                        id: urls[i].split('$')[1],
                                    });
                                dataResult.play.push(resp.json());
                            }
                        }
                    }
                }
            }
        }
        resp = await inReq.server.inject().post(`${prefix}/search`).payload({
            wd: '爱',
            page: 1,
        });
        dataResult.search = resp.json();
        printErr(resp.json());
        return dataResult;
    } catch (err) {
        console.error(err);
        outResp.code(500);
        return {err: err.message, tip: 'check debug console output'};
    }
}

export default {
    meta: {
        key: 'jcy',
        name: '囧次元',
        type: 3,
    },
    api: async (fastify) => {
        fastify.post('/init', init);
        fastify.post('/home', home);
        fastify.post('/category', category);
        fastify.post('/detail', detail);
        fastify.post('/play', play);
        fastify.post('/search', search);
        fastify.get('/test', test);
    },
};