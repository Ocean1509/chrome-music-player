const koa = require('koa');
const app = new koa();

const router = require('./router');
const port = (process.env.PORT || 3456);

app.use(router.routes())


app.listen(port, () => {
    console.log('开启音乐之旅')
});