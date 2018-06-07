const router = require('koa-router')();
const controller = require('./controller')
const backApi = require('../../../config/index').backApi
router.prefix(`/${backApi}`)
router.get('/login', controller.getLogin)
router.post('/login', controller.login)
router.get('/loginOut',controller.loginOut)

module.exports = router