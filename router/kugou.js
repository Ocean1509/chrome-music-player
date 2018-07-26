/**
 * 酷狗接口路由
 */
const KuGouApi = require('../platform/kugou');
const Router = require('koa-router');
const kugouRouter = new Router();
const kugouApi = new KuGouApi();

kugouRouter
    // 根据关键字搜索歌曲信息
    .get('/suggestion', async ctx => {
        let value = ctx.query || {};
        let default_value = {
            MusicTipCount: 5,
            MVTipCount: 2,
            albumcount: 2,
            keyword: ''
        }
        let d = Object.assign(default_value, value);
        let data;
        try {
            data = await kugouApi.suggestionSong(d);
            ctx.response.body = data;
        } catch (error) {
            console.log(error);
        }
    })
    // 搜索单曲
    .get('/songsearch', async ctx => {
        let value = ctx.query || {}
        let default_value = {
            keyword: '',
            page: 1,
            pagesize: 20,
            userid: -1,
        }
        let d = Object.assign(default_value, value);
        let data;
        try {
            data = await kugouApi.songsearch(d);
            ctx.response.body = data;
        } catch (error) {
            console.log(error);
        }
    })

    // 搜索专辑
    .get('/specialsearch', async ctx => {
        let value = ctx.query || {};
        let default_value = {
            page: 1,
            keyword: '',
            pagesize: 20,
            userid: -1,
        }
        let d = Object.assign(default_value, value);
        let data;
        try {
            data = await kugouApi.specialsearch(d);
            ctx.response.body = data;
        } catch (error) {
            console.log(error);
        }
    })

    // 搜索歌手
    .get('/singlesearch', async ctx => {
        let value = ctx.query || {};
        let default_value = {
            word: '',
        }
        let d = Object.assign(default_value, value);
        let data;
        try {
            data = await kugouApi.singersearch(d);
            ctx.response.body = data;
        } catch (error) {
            console.log(error);
        }
    })

module.exports = kugouRouter;