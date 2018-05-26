const router = require('koa-router')();
const controller = require('./controller')
const baseApi = require('../../config/index').baseApi
router.prefix(`/${baseApi}`)
router.get('/getUser', controller.getUser)
router.post('/updateUser', controller.updateUser)

module.exports = router