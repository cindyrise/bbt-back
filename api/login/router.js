const router = require('koa-router')();
const controller = require('./controller')
const baseApi = require('../../config/index').baseApi
router.prefix(`/${baseApi}`)
router.get('/login', controller.getLogin)
router.post('/login', controller.login)
router.get('/loginOut',controller.loginOut)

module.exports = router