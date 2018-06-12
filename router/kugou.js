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
            format: 'json',
            keyword: word,
            page: 1,
            pagesize: 5
        };
        let data;
        try {
            data = await kugouApi.searchSong(d);
            ctx.response.body = data;
        } catch (error) {
            console.log(error);
        }
    })

module.exports = kugouRouter;