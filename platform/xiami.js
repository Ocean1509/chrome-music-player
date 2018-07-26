// 虾米音乐
const { xiamiHost } = require('../utils/host');
;
const CreateRequest = require('../utils/requestOptions');


const host = xiamiHost.host;
const referer = xiamiHost.referer;


/**
 * 虾米音乐接口类
 */
class XiaMiApi extends CreateRequest {
    constructor() {
        super();
        this.host = host;
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
            host: this.host,
            path: 'web',
            method: 'GET',
            referer: this.referer,
            data
        }
        return super.platformRequest(params)
    }
}

module.exports = XiaMiApi;