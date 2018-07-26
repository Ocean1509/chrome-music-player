/**
 * 豆瓣接口路由(处理其他情形和其他接口不一致)
 */
const DouBanApi = require('../platform/douban');
const Router = require('koa-router');
const doubanRouter = new Router();
const doubanApi = new DouBanApi;


doubanRouter
    // 根据关键字搜索歌曲信息
    .get('/suggestion', async ctx => {
        let word = (ctx.query && ctx.query.word) || '';
        let size = (ctx.query && ctx.query.s) || 10;
        let d = {
            q: word,
            count: size
        };
        let data;
        try {
            data = await doubanApi.searchSong(d);
            ctx.response.body = data;
        } catch (error) {
            console.log(error);
        }
    })

module.exports =  doubanRouter;