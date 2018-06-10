const router = require('koa-router')();
const controller = require('./controller')
const server = require('../../../config/index').server
router.prefix(`/${server.backApi}`)

router.post('/getLogin', controller.login)
router.post('/loginOut',controller.loginOut)

module.exports = router