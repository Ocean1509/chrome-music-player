// 网易云接口api
const Crypto = require('../../utils/crypto');
const querystring = require('querystring');
const userAgent = require('../../utils/getUserAgent');
const CreateRequest = require('../../utils/requestOptions');
const { neteaseCloudHost } = require('../../utils/host');

const host = neteaseCloudHost.host;
const referer = neteaseCloudHost.referer;

/**
 * 网易云音乐接口类
 */
class NeteaseCloudApi extends CreateRequest {
    constructor() {
        super();
        this.host = host;
        this.referer = referer;
    }

    /**
     * 根据关键字搜索歌曲信息
     * @param {Object} data 
     */
    searchSong(data) {
        let d = Crypto(data);
        const params = {
            host: this.host,
            path: 'weapi/search/get',
            method: 'POST',
            referer: this.referer,
            data: d
        }
        return super.platformRequest(params)
    }
}
module.exports = NeteaseCloudApi;