const router = require('koa-router')();
const controller = require('./controller')
const frontApi = require('../../../config/index').baseApi
router.prefix(`/${frontApi}`)
router.post('/getLocation', controller.getLocation)
router.post('/getAdList', controller.getAdList)
router.post('/getIconList', controller.getIconList)
router.post('/getDictByCode', controller.getDictByCode)
module.exports = router