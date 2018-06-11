const db = {
	host: '127.0.0.1', // 数据库IP
	port: 3306, // 数据库端口
	database: 'lhbm', // 数据库名称
	user: 'root', // 数据库用户名
	password: '12345678', // 数据库密码
}

const baseApi = 'api/v1'
const server={
	backApi : 'api/back/v1',
	frontApi:"api/front/v1",
    port:3003,
	AppID : 'airchat-sec',
	AppSecret:'airchat-sec',
	domain:'http://.com',
	adPath:'./public/images/',
	iconPath:'./public/icons/',
	baiduAK:'Yetmv0EGFUHPDGEPmiyY83vug0bP1ZDU',
	baiduIp:`http://api.map.baidu.com/location/ip?ak=Yetmv0EGFUHPDGEPmiyY83vug0bP1ZDU`,
	baiduLocation:`http://api.map.baidu.com/geocoder/v2/?ak=Yetmv0EGFUHPDGEPmiyY83vug0bP1ZDU&output=json&pois=1&location=`
}
module.exports = {
	db,
	server,
	baseApi,
}