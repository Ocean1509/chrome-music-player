/**
 * qq接口路由
 */
const QqApi = require('../platform/QqMusic/api');
const Router = require('koa-router');
const qqRouter = new Router();
const qqApi = new QqApi();

qqRouter
    // 根据关键字搜索歌曲信息
    .get('/search', async ctx => {
        let word = (ctx.query && ctx.query.w) || '';
        let d = {
            g_tk: '5381',
            uin: 0,
            inCharset: 'utf-8',
            outCharset: 'utf-8',
            notice: 0,
            platform: 'h5',
            needNewCode: 1,
            w: word,
            format: 'json',
            zhidaqu: 1,
            catZhida: 1,
            t: 0,
            flag: 1,
            ie: 'utf-8',
            sem: 1,
            aggr: 0,
            perpage: 20,
            n: 5,
            p: 1,
            reomteplace: 'txt.mqq.all'
        };
        let data;
        try {
            data = await qqApi.searchSong(d);
            ctx.response.body = data;
        } catch (error) {
            console.log(error);
        }
    })

module.exports = qqRouter;