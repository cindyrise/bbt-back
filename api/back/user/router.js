const router = require('koa-router')();
const controller = require('./controller')
const backApi = require('../../../config/index').backApi
router.prefix(`/${backApi}`)
router.get('/getUser', controller.getUser)
router.post('/updateUser', controller.updateUser)

module.exports = router