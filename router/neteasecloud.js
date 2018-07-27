/**
 * 网易云接口路由
 */
const NeteaseCloudApi = require('../platform/neteasecloud');
const Router = require('koa-router');
const neteaseCloudRouter = new Router();
const neteaseCloudApi = new NeteaseCloudApi();

neteaseCloudRouter
    // 根据关键字搜索歌曲信息
    .get('/suggestion', async ctx => {
        let value = ctx.query || {};
        let default_value = {
            csrf_token: '',
            limit: 10,
            type: 1, // 1: 歌曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户， 1004: mv, 1006: 歌词, 1009: 主播电台
            s: '',
            offset: 0
        }
        let d = Object.assign(default_value, value);
        let data;
        try {
            data = await neteaseCloudApi.suggestionSong(d);
            ctx.response.body = data;
        } catch (error) {
            console.log(error);
        }
    })

    // 根据关键字搜索歌曲(type: 1), 专辑(type: 10), 歌手(type: 100)
    .get('/songsearch', async ctx => {
        let value = ctx.query || {};
        let default_value = {
            csrf_token: '',
            limit: 20,
            offset: 0, // 偏移量，用于分页
            type: 1, // 1: 歌曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户， 1004: mv, 1006: 歌词, 1009: 主播电台
            s: '',
            offset: 0
        }
        let d = Object.assign(default_value, value);
        let data;
        try {
            data = await neteaseCloudApi.songsearch(d);
            ctx.response.body = data;
        } catch (error) {
            console.log(error);
        }
    })


module.exports = neteaseCloudRouter;