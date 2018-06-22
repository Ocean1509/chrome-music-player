/**
 * 酷狗接口路由
 */
const KuGouApi = require('../platform/KugouMusic/api');
const Router = require('koa-router');
const kugouRouter = new Router();
const kugouApi = new KuGouApi();

kugouRouter
    // 根据关键字搜索歌曲信息
    .get('/search', async ctx => {
        let word = (ctx.query && ctx.query.w) || '';
        let d = {
            MusicTipCount: 5,
            MVTipCount: 2,
            albumcount: 2,
            keyword: word
        };
        let data;
        try {
            data = await kugouApi.searchSong(d);
            ctx.response.body = data;
        } catch (error) {
            console.log(error);
        }
    })
    .get('/searchDetail', async ctx => {
        let word = (ctx.query && ctx.query.w) || '';
        let d = {
            keyword: word,
            page: 2,
            pagesize: 30,
            userid: -1,
        }
        let data;
        try {
            data = await kugouApi.searchDetail(d);
            ctx.response.body = data;
        } catch (error) {
            console.log(error);
        }
        // keyword=1&page=1&pagesize=30&userid=-1&clientver=&platform=WebFilter&tag=em&filter=2&iscorrection=1&privilege_filter=0
    })

module.exports = kugouRouter;