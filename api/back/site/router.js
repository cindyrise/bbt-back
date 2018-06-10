const router = require('koa-router')();
const controller = require('./controller')
const server = require('../../../config/index').server
router.prefix(`/${server.backApi}`)
router.post('/getSite', controller.getSite)
router.post('/createSite', controller.createSite)
router.post('/updateSite', controller.updateSite)

module.exports = router