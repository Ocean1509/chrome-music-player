// 酷狗音乐

const { kugouHost } = require('../utils/host');
;
const CreateRequest = require('../utils/requestOptions');


const hostSearchtip = kugouHost['host-searchtip'];
const hostSearch = kugouHost['host-search'];
const hostSpecial = kugouHost['host-special'];
const hostComplex = kugouHost['host-complex'];
const referer = kugouHost.referer;


/**
 * 酷狗音乐接口类
 */
class KuGouApi extends CreateRequest {
    constructor() {
        super();
        this.hostSearchtip = hostSearchtip;
        this.hostSearch = hostSearch;
        this.hostSpecial = hostSpecial;
        this.hostComplex = hostComplex;
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
        return this.platformRequest(params)
    }

    /**
     * 根据关键字搜索单曲
     * @param {Ojbect} data 
     */
    songsearch(data) {
        const params = {
            host: this.hostSearch,
            path: 'song_search_v2',
            method: 'GET',
            referer: this.referer,
            data
        }
        return this.platformRequest(params)
    }

    /**
     * 根据关键字搜索专辑
     * @param {Object} data 
     */
    specialsearch(data) {
        const params = {
            host: this.hostSpecial,
            path: 'special_search',
            method: 'GET',
            referer: this.referer,
            data
        }
        return this.platformRequest(params)
    }
    /**
     * 根据关键字查询歌手
     * @param {Object} data 
     */
    singersearch(data) {
        const params = {
            host: this.hostComplex,
            path: 'get/complex',
            method: 'GET',
            referer: this.referer,
            data,
            protocol: 'http'
        }
        return this.platformRequest(params)
    }
    
}

module.exports = KuGouApi;