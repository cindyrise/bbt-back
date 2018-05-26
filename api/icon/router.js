const router = require('koa-router')();
const controller = require('./controller')
const baseApi = require('../../config/index').baseApi
router.prefix(`/${baseApi}`)
router.post('/getIcon', controller.getIcon)
router.post('/createIcon', controller.createIcon)
router.post('/updateIcon', controller.updateIcon)


module.exports = router