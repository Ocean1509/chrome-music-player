/**
 * 豆瓣接口路由
 */
const DouBanApi = require('../platform/DoubanMusic/api');
const Router = require('koa-router');
const doubanRouter = new Router();
const doubanApi = new DouBanApi;


doubanRouter
    // 根据关键字搜索歌曲信息
    .get('/search', async ctx => {
        let word = (ctx.query && ctx.query.w) || '';
        let d = {q: word};
        let data;
        try {
            data = await doubanApi.searchSong(d);
            ctx.response.body = data;
        } catch (error) {
            console.log(error);
        }
    })

module.exports =  doubanRouter;