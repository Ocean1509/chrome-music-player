const BaiDuApi = require('../platform/BaiduMusic/api');
const bdApi = new BaiDuApi;
const Router = require('koa-router');
const baiduRouter = require('./baidu');
const doubanRouter = require('./douban');
const xiamiRouter = require('./xiami');
const kugouRouter = require('./kugou');
const qqRouter = require('./qq');
const neteaseCloudRouter = require('./neteasecloud');

let router = new Router();

router.use('/baidu', baiduRouter.routes(), baiduRouter.allowedMethods());

router.use('/douban', doubanRouter.routes(), doubanRouter.allowedMethods());

router.use('/xiami', xiamiRouter.routes(), xiamiRouter.allowedMethods());

router.use('/kugou', kugouRouter.routes(), kugouRouter.allowedMethods());

router.use('/qq', qqRouter.routes(), qqRouter.allowedMethods());

router.use('/neteaseCloud', neteaseCloudRouter.routes(), neteaseCloudRouter.allowedMethods());

module.exports = router