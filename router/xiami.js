/**
 * 虾米接口路由
 */
const XiaMiApi = require('../platform/XiamiMusic/api');
const Router = require('koa-router');
const xiamiRouter = new Router();
const xmApi = new XiaMiApi();

xiamiRouter
    // 根据关键字搜索歌曲信息
    .get('/search', async ctx => {
        let word = (ctx.query && ctx.query.w) || '';
        let d = {
            v: '2.0',
            app_key: 1,
            key: word,
            limit: 5,
            r: 'search/songs'
        };
        let data;
        try {
            data = await xmApi.searchSong(d);
            ctx.response.body = data;
        } catch (error) {
            console.log(error);
        }
    })

module.exports = xiamiRouter;