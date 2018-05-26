const router = require('koa-router')();
const controller = require('./controller')
const baseApi = require('../../config/index').baseApi
router.prefix(`/${baseApi}`)
router.get('/', controller.getHome)
router.get('/getZone', controller.getZone)
module.exports = router