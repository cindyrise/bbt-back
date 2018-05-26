const Koa = require('koa');
const path = require('path')
const bodyParser = require('koa-bodyparser');
const ejs = require('ejs');
const session = require('koa-session-minimal');
const MysqlStore = require('koa-mysql-session');
const conf  = require('./config/index');
const router = require('koa-router')
const views = require('koa-views')
// const koaStatic = require('koa-static')
const staticCache = require('koa-static-cache')
const app = new Koa()


// session存储配置
const sessionMysqlConfig= {
  user: conf.db.user,
  password:  conf.db.password,
  database:  conf.db.database,
  host:  conf.db.host,
}

// 配置session中间件
app.use(session({
  key: 'USER_SID',
  store: new MysqlStore(sessionMysqlConfig)
}))


// 配置静态资源加载中间件
// app.use(koaStatic(
//   path.join(__dirname , './public')
// ))
// 缓存
app.use(staticCache(path.join(__dirname, './public'), { dynamic: true }, {
  maxAge: 365 * 24 * 60 * 60
}))
app.use(staticCache(path.join(__dirname, './images'), { dynamic: true }, {
  maxAge: 365 * 24 * 60 * 60
}))

// 配置服务端模板渲染引擎中间件
app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))
app.use(bodyParser({
  formLimit: '1mb'
}))

app.use(require('./api/login/router.js').routes())
app.use(require('./api/home/router.js').routes())
app.use(require('./api/ad/router.js').routes())
app.use(require('./api/icon/router.js').routes())
app.use(require('./api/site/router.js').routes())
app.use(require('./api/user/router.js').routes())

app.listen(conf.server.port)

console.log(`listening on port ${conf.server.port}`)
