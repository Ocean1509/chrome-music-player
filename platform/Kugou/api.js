// 百度音乐
const request = require('request');
const querystring = require('querystring');
const userAgent = require('../../utils/getUserAgent');

const host = 'sug.qianqian.com';
const host1 = 'play.baidu.com';

const BaiDuApi = {}
BaiDuApi.createBaiduRequest = (path, data, method) => {
    const options = {
        method,
        url: `http://${host}/${path}`,
        headers: {
            Accept: "*/*",
            "Accept-Language": "zh-CN,zh;q=0.8,gl;q=0.6,zh-TW;q=0.4",
            Connection: "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            // Referer: "http://music.baidu.com",
            // Host: "sug.qianqian.com",
            Host: "sug.qianqian.com",
            Referer: "http://music.baidu.com",
            "User-Agent": userAgent()
        },
        qs: data
    }
    return new Promise((resolve, reject) => {
        request(options, (err, response, body) => {
            if (!err && response.statusCode === 200) {
                try {
                    resolve(body);
                } catch (e) {
                    reject('===error===');
                }
            } else {
                reject('===error===');
            }
        })
    })
}

BaiDuApi.searchDetailFromSongId = (path, data, method) =>{
    const options = {
        method,
        url: `http://${host1}/${path}`,
        headers: {
            Accept: "*/*",
            "Accept-Language": "zh-CN,zh;q=0.8,gl;q=0.6,zh-TW;q=0.4",
            Connection: "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            // Host: "sug.qianqian.com",
            // Referer: "http://music.baidu.com",
            "User-Agent": userAgent()
        },
        body: querystring.stringify(data)
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

module.exports = BaiDuApi;