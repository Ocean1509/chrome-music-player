// 酷狗音乐
const querystring = require('querystring');
const userAgent = require('../../utils/getUserAgent');

const { kugouHost } = require('../../utils/host');
;
const CreateRequest = require('../../utils/requestOptions');


const host = kugouHost.host;
const referer = kugouHost.referer;

const request = new CreateRequest();

/**
 * 酷狗音乐接口类
 */
class KuGouApi extends CreateRequest {
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
        const params = {
            host: this.host,
            path: 'api/v3/search/song',
            method: 'GET',
            referer: this.referer,
            data
        }
        return super.platformRequest(params)
    }
}

module.exports = KuGouApi;