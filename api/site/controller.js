const model = require('./model.js')
const md5 = require('md5')
const checkNotLogin = require('../../middlewares/check.js').checkNotLogin
const checkLogin = require('../../middlewares/check.js').checkLogin

exports.getSite = async ctx => {
    await model.getSite()
       .then(ret=>{
        ctx.body = {
            code: 200,
            data:ret,
            message: '登录成功'
        }
       })
}
exports.createSite = async ctx => {
    let { name, pwd } = ctx.request.body
    let arr=['huangjie','pipi','sb'];
    await model.createSite(arr)
        .then(ret => {
            ctx.body = {
                code: 200,
                data:ret,
                message: '登录成功'
            }
        }).catch(err => {
            console.log(err)
        })
}

exports.updateSite = async ctx => {
    let { name, pwd } = ctx.request.body
    await model.updateSite(["jiejie",'dese','',4])
        .then(result => {
            ctx.body = {
                code: 200,
                data:result,
                message: '登录成功'
            }
        }).catch(err => {
            console.log(err)
        })
}