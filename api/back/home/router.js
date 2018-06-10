const router = require('koa-router')();
const controller = require('./controller')
const server = require('../../../config/index').server
router.prefix(`/${server.backApi}`)
router.get('/', controller.getHome)
router.get('/getZone', controller.getZone)
router.get('/getDict', controller.getDict)
router.get('/getDictType', controller.getDictType)

module.exports = router