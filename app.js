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
const bdApi = new BaiDuApi();
const xmApi = new XiaMiApi();
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
    let d = { from: 0, version: 2, third_type: 0, word: '海阔天空', format: 'json', client_type: 0};
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
        key: '告白气球'
    }
    let data;
    try {
        data = await xmApi.searchSong(d);
        ctx.response.body = data;
    } catch (error) {
        console.log(error);

    }
}

app.use(route.get('/baidumusicsearch', bdsearch));

// app.use(route.get('/neteasecloudmusic', netsearch));

app.use(route.get('/baidumusicdetail', bddetail));
app.use(route.get('/xiamisearch', xiamisearch));
app.listen(3001);