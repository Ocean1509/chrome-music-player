/**
 * 各大平台 host 主机名 
 */
const allHosts = {};

// 百度音乐
allHosts.baiduHost = {
    host: 'play.baidu.com',
    host2: 'sug.qianqian.com',
    referer: 'http://music.baidu.com'
}

allHosts.xiamiHost = {
    host: 'api.xiami.com',
    referer: 'http://m.xiami.com/'
}

module.exports = allHosts;