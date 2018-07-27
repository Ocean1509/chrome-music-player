/**
 * 百度接口路由
 */
const BaiDuApi = require('../platform/baidu.js');
const cheerio = require('cheerio');
const bdApi = new BaiDuApi;
const Router = require('koa-router');
const baiduRouter = new Router();
const queryString = require('querystring');

baiduRouter
    // 根据关键字搜索歌曲信息
    .get('/suggestion', async ctx => {
        let value = ctx.query || {};
        let default_value = { from: 0, version: 2, third_type: 1, word: '', format: 'json', client_type: 0 };
        let d = Object.assign(default_value, value);
        let data;
        try {
            data = await bdApi.suggestionSong(d);
            let res;
            if (data.errno) {
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

    //根据关键字查询歌曲
    .get('/songsearch', async ctx => {
        let value = ctx.query || {};
        let default_value = { key: '', start: 0, size: 10 };
        let d = Object.assign(default_value, value);
        let result = {};
        let arr = [];
        try {
            data = await bdApi.songsearch(d);
            if(!data) ctx.throw(400)
            const $ = cheerio.load(data);
            $('.song-item-hook').each((i, ele) => {
                let singerName = $(ele).find('.singer a').attr('title');
                let string = $(ele).find('.music-icon-hook').attr('data-musicicon');
                let result = JSON.parse(string);
                result.singerName = singerName;
                arr.push(result)
            });
            result.data = arr;
            result.page = (d.start / d.size) + 1;
            result.size = d.size;
            ctx.response.body = result;
        } catch (error) {
            console.log(error);
        }
    })

    // 根据关键字查询歌手
    .get('/singersearch', async ctx => {
        let value = ctx.query || {};
        let default_value = { key: '', start: 0, size: 10 };
        let d = Object.assign(default_value, value);
        try {
            data = await bdApi.singersearch(d);
            ctx.response.body = data;
        } catch (error) {
            console.log(error);
        }
    })

module.exports = baiduRouter;