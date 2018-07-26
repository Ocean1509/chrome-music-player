// 酷狗音乐

const { kugouHost } = require('../utils/host');
;
const CreateRequest = require('../utils/requestOptions');


const hostSearchtip = kugouHost['host-searchtip'];
const hostSearch = kugouHost['host-search'];
const referer = kugouHost.referer;


/**
 * 酷狗音乐接口类
 */
class KuGouApi extends CreateRequest {
    constructor() {
        super();
        this.hostSearchtip = hostSearchtip;
        this.hostSearch = hostSearch;
        this.referer = referer;
    }

    /**
     * 根据关键字搜索歌曲信息
     * @param {Object} data 
     */
    suggestionSong(data) {
        const params = {
            host: this.hostSearchtip,
            path: 'getSearchTip',
            method: 'GET',
            referer: this.referer,
            data
        }
        return super.platformRequest(params)
    }
    searchDetail(data) {
        const params = {
            host: this.hostSearch,
            path: 'song_search_v2',
            method: 'GET',
            referer: this.referer,
            data
        }
        return super.platformRequest(params)
    }
}

module.exports = KuGouApi;