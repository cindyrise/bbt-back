const Koa = require('koa');
const path = require('path')
const ejs = require('ejs');
const session = require('koa-session-minimal');
const MysqlStore = require('koa-mysql-session');
const conf  = require('./config/index');
const router = require('koa-router')
const views = require('koa-views')
const staticCache = require('koa-static-cache')
const koaBody = require('koa-body');
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


app.use(staticCache(path.join(__dirname, './public/images'), { dynamic: true }, {
  maxAge: 365 * 24 * 60 * 60
}))
app.use(staticCache(path.join(__dirname, './public/icons'), { dynamic: true }, {
  maxAge: 365 * 24 * 60 * 60
}))

// 配置服务端模板渲染引擎中间件
app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))

app.use(koaBody({ multipart: true }));

//前端地址
app.use(require('./api/front/home/router.js').routes())

//后端地址

app.use(require('./api/back/login/router.js').routes())
app.use(require('./api/back/home/router.js').routes())
app.use(require('./api/back/ad/router.js').routes())
app.use(require('./api/back/icon/router.js').routes())
app.use(require('./api/back/site/router.js').routes())
app.use(require('./api/back/user/router.js').routes())


app.listen(conf.server.port)
console.log(`listening on port ${conf.server.port}`)
