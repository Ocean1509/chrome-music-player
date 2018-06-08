// 网易云接口api
const Crypto = require('../../utils/crypto');
const querystring = require('querystring');
const userAgent = require('../../utils/getUserAgent');
const request = require('request')

const host = 'music.163.com';

const createNeteaseRequest = (path, data, method) => {
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
    return new Promise((resolve, reject) => {
        request(options, (err, response, body) => {
            if (!err && response.statusCode === 200) {
                try {
                    resolve(JSON.parse(body));
                } catch (e) {
                    reject('===error===');
                }
            } else {
                reject('===error===');
            }
        })
    })
}
module.exports = createNeteaseRequest;