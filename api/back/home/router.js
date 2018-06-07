const router = require('koa-router')();
const controller = require('./controller')
const backApi = require('../../../config/index').backApi
router.prefix(`/${backApi}`)
router.get('/', controller.getHome)
router.get('/getZone', controller.getZone)
router.get('/getDict', controller.getDict)
router.get('/getDictType', controller.getDictType)
router.post('/getLocation', controller.getLocation)

module.exports = router