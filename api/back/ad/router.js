const router = require('koa-router')();
const controller = require('./controller')
const backApi = require('../../../config/index').backApi
router.prefix(`/${backApi}`)
router.post('/getAd', controller.getAd)
router.post('/createAd',controller.createAd)
router.post('/updateAd', controller.updateAd)


module.exports = router