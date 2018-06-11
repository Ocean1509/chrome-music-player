const Crypto = require('./utils/crypto');
const koa = require('koa');
const route = require('koa-route');
const app = new koa();
const request = require('request');
const querystring = require('querystring');
const userAgent = require('./utils/getUserAgent');
const createNeteaseRequest = require('./platform/NeteaseCloudMusic/api');
// const { createBaiduRequest, searchDetailFromSongId } = require('./platform/BaiduMusic/api');
const BaiDuApi = require('./platform/BaiduMusic/api');
const XiaMiApi = require('./platform/XiamiMusic/api');
const QqApi = require('./platform/QqMusic/api');
const KuGouApi = require('./platform/Kugou/api');
const DouBanApi = require('./platform/DoubanMusic/api');

const bdApi = new BaiDuApi();
const xmApi = new XiaMiApi();
const qqApi = new QqApi();
const kugouApi = new KuGouApi();
const doubanApi = new DouBanApi();
// const netsearch = async (ctx, next) => {
//     let d = { csrf_token: '', limit: 30, type: 1, s: '海阔天空', offset: 0 };
//     let data;
//     try {
//         data = await createNeteaseRequest('weapi/search/get', d, 'POST');
//         ctx.response.body = data;
//     } catch (error) {
//         console.log(error)
//         ctx.response.body = {'error': 1};
//     }
// }

const bdsearch = async ctx => {
    let d = { from: 0, version: 2, third_type: 0, word: '海阔天空', format: 'json', client_type: 0 };
    let data;
    try {
        data = await bdApi.searchSong(d);
        ctx.response.body = data;
    } catch (error) {
        console.log(error);
    }
    // ctx.response.type = 'html';
    // ctx.response.body = 'this is a about page'
}

const bddetail = async ctx => {
    let d = {
        songIds: "74162257",
        hq: 0,
        type: "m4a,mp3",
        rate: '',
        pt: 0,
        flag: -1,
        s2p: -1,
        prerate: -1,
        bwt: -1,
        dur: -1,
        bat: -1,
        bp: -1,
        pos: -1,
        auto: -1
    };
    let data;
    try {
        data = await bdApi.detailFromSongId(d);
        ctx.response.body = data;
    } catch (error) {
        console.log(error)
    }
}


const xiamisearch = async ctx => {
    let d = {
        v: '2.0',
        app_key: 1,
        key: '告白气球',
        limit: 5,
        r: 'search/songs'
    }
    let data;
    try {
        data = await xmApi.searchSong(d);
        ctx.response.body = data;
    } catch (error) {
        console.log(error);
    }
}

const qqsearch = async ctx => {
    let d = {
        g_tk: '5381',
        uin: 0,
        inCharset: 'utf-8',
        outCharset: 'utf-8',
        notice: 0,
        platform: 'h5',
        needNewCode: 1,
        w: '海阔天空',
        format: 'json',
        zhidaqu: 1,
        catZhida: 1,
        t: 0,
        flag: 1,
        ie: 'utf-8',
        sem: 1,
        aggr: 0,
        perpage: 20,
        n: 5,
        p: 1,
        reomteplace: 'txt.mqq.all'
    };
    let data;
    try {
        data = await qqApi.searchSong(d);
        ctx.response.body = data;
    } catch (error) {
        console.log(error)
    }
}

const kugousearch = async ctx => {
    let d = {
        format: 'json',
        keyword: '海阔天空',
        page: 1,
        pagesize: 5
    };
    let data;
    try {
        data = await kugouApi.searchSong(d);
        ctx.response.body = data;
    } catch (error) {
        console.log(error)
    }
}

const doubansearch = async ctx => {
    let d = {
        q: '海阔天空'
    }
    let data;
    try {
        data = await doubanApi.searchSong(d)
        ctx.response.body = data;
    } catch (error) {
        console.log(error)
    }
}

const index = ctx => {
    console.log('00000000000000')
    ctx.response.body = { data: 'welcome' }
}

app.use(route.get('/baidumusicsearch', bdsearch));

// app.use(route.get('/neteasecloudmusic', netsearch));
app.use(route.get('/', index));
app.use(route.get('/baidumusicdetail', bddetail));
app.use(route.get('/xiamisearch', xiamisearch));
app.use(route.get('/qqsearch', qqsearch));
app.use(route.get('/kugousearch', kugousearch));
app.use(route.get('/doubansearch', doubansearch));
app.listen(3001);