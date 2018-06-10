const router = require('koa-router')();
const controller = require('./controller')
const server = require('../../../config/index').server
router.prefix(`/${server.backApi}`)
router.post('/getAd', controller.getAd)
router.post('/createAd',controller.createAd)
router.post('/updateAd', controller.updateAd)


module.exports = router