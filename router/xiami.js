/**
 * 虾米接口路由
 */
const XiaMiApi = require('../platform/xiami.js');
const Router = require('koa-router');
const xiamiRouter = new Router();
const xmApi = new XiaMiApi();

xiamiRouter
    // 根据关键字搜索歌曲信息
    .get('/suggestion', async ctx => {
        let value = ctx.query || {};
        let default_value = {
            v: '2.0',
            app_key: 1,
            key: '',
            limit: 5,
            r: 'search/songs'
        }
        let d = Object.assign(default_value, value);
        let data;
        try {
            data = await xmApi.searchSong(d);
            ctx.response.body = data;
        } catch (error) {
            console.log(error);
        }
    })

module.exports = xiamiRouter;