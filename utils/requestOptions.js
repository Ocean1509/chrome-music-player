// proxy
const userAgent = require('../utils/getUserAgent');
const request = require('request');
const generateOptions = Symbol('generateOptions');
const querystring = require('querystring');
/**
 * 定义一个发送请求的类
 */

class CreateRequest {
    /**
     * 私有方法, 返回request options
     * @param {Integer} string 
     */
    [generateOptions]({ host, path, method, referer, data }) {
        const options = {
            method,
            url: `http://${host}/${path}`,
            headers: {
                "Accept": "*/*",
                "Accept-Language": "zh-CN,zh;q=0.8,gl;q=0.6,zh-TW;q=0.4",
                "Connection": "keep-alive",
                "Content-Type": "application/x-www-form-urlencoded",
                "Host": host,
                "Referer": referer,
                "User-Agent": userAgent()
            }
        }
        options[method === 'GET' ? 'qs' : 'body'] = method === 'GET' ? data : querystring.stringify(data);
        return options
    }

    /**
     * http 请求
     * @param {*} params 
     * @param {Promise} callback 
     */
    platformRequest(params) {
        let options = this[generateOptions](params);
        return new Promise((resolve, reject) => {
            console.log(options)
            request(options, (err, response, body) => {
                if (!err && response.statusCode === 200) {
                    console.log(body)
                    // console.log(JSON.parse(body))
                    try {
                        resolve(JSON.parse(body));
                    } catch (err) {
                        reject(err);
                    }
                } else {
                    reject(err);
                }
            })
        })
    }
}

module.exports = CreateRequest;