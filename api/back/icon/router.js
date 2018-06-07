const router = require('koa-router')();
const controller = require('./controller')
const backApi = require('../../../config/index').backApi
router.prefix(`/${backApi}`)
router.post('/getIconList', controller.getIconList)
router.post('/createIcon', controller.createIcon)
router.post('/updateIcon', controller.updateIcon)
router.post('/getSiteOption', controller.getSiteOption)
router.post('/getIcons', controller.getIcons)
module.exports = router