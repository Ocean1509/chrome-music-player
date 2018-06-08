// 百度音乐
const querystring = require('querystring');
const userAgent = require('../../utils/getUserAgent');

const { baiduHost } = require('../../utils/host');
;
const CreateRequest = require('../../utils/requestOptions');


const host = baiduHost.host;
const host2 = baiduHost.host2;
const referer = baiduHost.referer;

const request = new CreateRequest();

/**
 * 百度音乐接口类
 */
class BaiDuApi extends CreateRequest {
    constructor() {
        super();
        this.host = host;
        this.host2 = host2;
        this.referer = referer;
    }

    /**
     * 根据歌曲id获取歌曲详细信息
     * @param {Object} data 
     */
    detailFromSongId(data) {
        const params = {
            host: this.host,
            path: 'data/music/songlink',
            method: 'POST',
            referer: this.referer,
            data
        }
        return super.platformRequest(params)
    }

    /**
     * 根据关键字搜索歌曲信息
     * @param {Object} data 
     */
    searchSong(data) {
        const params = {
            host: this.host2,
            path: 'info/suggestion',
            method: 'GET',
            referer: this.referer,
            data
        }
        return super.platformRequest(params)
    }
}

module.exports = BaiDuApi;