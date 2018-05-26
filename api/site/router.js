const router = require('koa-router')();
const controller = require('./controller')
const baseApi = require('../../config/index').baseApi
router.prefix(`/${baseApi}`)
router.post('/getSite', controller.getSite)
router.post('/createSite', controller.createSite)
router.post('/updateSite', controller.updateSite)

module.exports = router