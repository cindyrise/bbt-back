const db = {
	host: '127.0.0.1', // 数据库IP
	port: 3306, // 数据库端口
	database: 'lhbm', // 数据库名称
	user: 'root', // 数据库用户名
	password: '12345678', // 数据库密码
}

const baseApi = 'api/v1'
const secret = 'airchat-sec'
const server={
  baseApi : 'api/v1',
  port:3003,
  secret : 'airchat-sec'
}
module.exports = {
	db,
  baseApi,
  server
}