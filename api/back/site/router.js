const router = require('koa-router')();
const controller = require('./controller')
const backApi = require('../../../config/index').backApi
router.prefix(`/${backApi}`)
router.post('/getSite', controller.getSite)
router.post('/createSite', controller.createSite)
router.post('/updateSite', controller.updateSite)

module.exports = router