const Crypto = require('./utils/crypto');
const koa = require('koa');
const route = require('koa-route');
const app = new koa();
const request = require('request');
const querystring = require('querystring');
const userAgent = require('./utils/getUserAgent');
// host
const host = 'music.163.com';
const search = ctx => {
    let d = { csrf_token: '', limit: 30, type: 1, s: '海阔天空', offset: 0 };
   
    console.log(ctx);
    console.log('----------------------------')
    // createNeteaseRequest('weapi/search/get', d, 'POST', function(err, data) {
    //     console.log(ctx)
    //     if(!err) {
            ctx.response.type = 'html';
            ctx.response.body = 'this is a about page'
    //     }
    // })
}
// 网易云音乐请求
const createNeteaseRequest = (path, data, method, callback) => {
    const cryptoData = Crypto(data);
    const options = {
        method,
        url: `https://${host}/${path}`,
        headers: {
            Accept: "*/*",
            "Accept-Language": "zh-CN,zh;q=0.8,gl;q=0.6,zh-TW;q=0.4",
            Connection: "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            Referer: "http://music.163.com",
            Host: "music.163.com",
            "User-Agent": userAgent()
        },
        body: querystring.stringify(cryptoData)
    }
    request(options, (err, response, body) => {
        if (!err && response.statusCode === 200) {
			try {
				callback(null, JSON.parse(body));
			} catch (e) {
				callback(e, null);
			}
		} else {
			callback(err, null);
		}
    })
}

const about = ctx => {
    ctx.response.type = 'html';
    ctx.response.body = 'this is a about page'
}
app.use(route.get('/about', about));

app.use(route.get('/search', search));
app.listen(3001);