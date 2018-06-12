/**
 * 网易云接口路由
 */
const NeteaseCloudApi = require('../platform/NeteaseCloudMusic/api');
const Router = require('koa-router');
const neteaseCloudRouter = new Router();
const neteaseCloudApi = new NeteaseCloudApi();

neteaseCloudRouter
    // 根据关键字搜索歌曲信息
    .get('/search', async ctx => {
        let word = (ctx.query && ctx.query.w) || '';
        let d = { csrf_token: '', limit: 30, type: 1, s: word, offset: 0 };
        let data;
        try {
            data = await neteaseCloudApi.searchSong(d);
            ctx.response.body = data;
        } catch (error) {
            console.log(error);
        }
    })

module.exports = neteaseCloudRouter;