/**
 * 百度接口路由
 */
const BaiDuApi = require('../platform/BaiduMusic/api');
const bdApi = new BaiDuApi;
const Router = require('koa-router');
const baiduRouter = new Router();

baiduRouter
    // 根据关键字搜索歌曲信息
    .get('/search', async ctx => {
        let word = (ctx.query && ctx.query.w) || '';
        let d = { from: 0, version: 2, third_type: 1, word, format: 'json', client_type: 0 };
        let data;
        try {
            data = await bdApi.searchSong(d);
            let res;
            if(data.errno) {
                res = [];
            } else {
                res = data.data;
            }
            ctx.response.body = res;
        } catch (error) {
            ctx.response.body = [];
        }
    })
    // 根据歌曲id查询详细信息
    .get('/detail', async ctx => {
        let ids = (ctx.query && ctx.query.ids) || ''
        let d = {
            songIds: ids,
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
            console.log(error);
        }
    })

module.exports = baiduRouter;