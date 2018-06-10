const router = require('koa-router')();
const controller = require('./controller')
const server = require('../../../config/index').server
router.prefix(`/${server.frontApi}`)
router.post('/getLocation', controller.getLocation)
router.post('/getAdList', controller.getAdList)
router.post('/getIconList', controller.getIconList)
router.post('/getDictByCode', controller.getDictByCode)
module.exports = router