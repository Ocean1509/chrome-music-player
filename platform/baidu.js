// 百度音乐
const { baiduHost } = require('../utils/host');
;
const CreateRequest = require('../utils/requestOptions');


const host = baiduHost.host;
const host2 = baiduHost.host2;
const hostTaihe = baiduHost['host-taihe'];

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
        this.hostTaihe = hostTaihe;
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
        return this.platformRequest(params)
    }

    /**
     * 根据关键字搜索歌曲信息
     * @param {Object} data 
     */
    suggestionSong(data) {
        const params = {
            host: this.host2,
            path: 'info/suggestion',
            method: 'GET',
            referer: this.referer,
            data
        }
        return this.platformRequest(params)
    }

    /**
     * 根据关键字搜索歌曲
     * @param {Object} data 
     */
    songsearch(data) {
        const params = {
            host: this.hostTaihe,
            path: 'search/song',
            method: 'GET',
            referer: `http://${this.hostTaihe}/search/song?key=d`,
            data
        }
        return this.platformRequest(params, true)
    }

    /**
     * 根据关键字查询歌手
     * @param {Object} data 
     */
    singersearch(data) {
        const params = {
            host: this.hostTaihe,
            path: 'search/artist',
            method: 'GET',
            referer: `http://${this.hostTaihe}/search/song?key=d`,
            data
        }
        return this.platformRequest(params, true)
    }
}

module.exports = BaiDuApi;