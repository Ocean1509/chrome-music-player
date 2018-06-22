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

// 虾米音乐
allHosts.xiamiHost = {
    host: 'api.xiami.com',
    referer: 'http://m.xiami.com/'
}

// QQ音乐
allHosts.qqHost = {
    host: 'c.y.qq.com',
    referer: 'http://y.qq.com'
}

// 酷狗音乐
allHosts.kugouHost = {
    'host-searchtip': 'searchtip.kugou.com',
    'host-search': 'songsearch.kugou.com',
    referer: ''
}

// 豆瓣音乐
allHosts.doubanHost = {
    host: 'api.douban.com',
    referer: 'https://music.douban.com/'
}

// 网易云音乐
allHosts.neteaseCloudHost = {
    host: 'music.163.com',
    referer: 'http://music.163.com'
}

module.exports = allHosts;