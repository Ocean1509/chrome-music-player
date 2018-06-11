// QQ音乐
const querystring = require('querystring');
const userAgent = require('../../utils/getUserAgent');

const { qqHost } = require('../../utils/host');
;
const CreateRequest = require('../../utils/requestOptions');


const host = qqHost.host;
const referer = qqHost.referer;

const request = new CreateRequest();

/**
 * qq音乐接口类
 */
class QqApi extends CreateRequest {
    constructor() {
        super();
        this.host = host;
        this.referer = referer;
    }

    // /**
    //  * 根据歌曲id获取歌曲详细信息
    //  * @param {Object} data 
    //  */
    // detailFromSongId(data) {
    //     const params = {
    //         host: this.host,
    //         path: 'data/music/songlink',
    //         method: 'POST',
    //         referer: this.referer,
    //         data
    //     }
    //     return super.platformRequest(params)
    // }

    /**
     * 根据关键字搜索歌曲信息
     * @param {Object} data 
     */
    searchSong(data) {
        const params = {
            host: this.host,
            path: 'soso/fcgi-bin/search_for_qq_cp',
            method: 'GET',
            referer: this.referer,
            data
        }
        return super.platformRequest(params)
    }
}

module.exports = QqApi;