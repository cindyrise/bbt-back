const router = require('koa-router')();
const controller = require('./controller')
const server = require('../../../config/index').server
router.prefix(`/${server.backApi}`)
router.get('/getUser', controller.getUser)
router.post('/updateUser', controller.updateUser)

module.exports = router