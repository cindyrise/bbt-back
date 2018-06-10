const router = require('koa-router')();
const controller = require('./controller')
const server = require('../../../config/index').server
router.prefix(`/${server.backApi}`)
console.log(server.backApi,'1221312');
router.post('/getIconList', controller.getIconList)
router.post('/createIcon', controller.createIcon)
router.post('/updateIcon', controller.updateIcon)
router.post('/getSiteOption', controller.getSiteOption)
module.exports = router