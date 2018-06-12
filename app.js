const koa = require('koa');
const app = new koa();

const router = require('./router');
const port = (process.env.PORT || 3001);

app.use(router.routes())


app.listen(port);