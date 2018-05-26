const router = require('koa-router')();
const controller = require('./controller')
const baseApi = require('../../config/index').baseApi
router.prefix(`/${baseApi}`)
router.post('/getAd', controller.getAd)
router.post('/createAd', controller.createAd)
router.post('/updateAd', controller.updateAd)


module.exports = router