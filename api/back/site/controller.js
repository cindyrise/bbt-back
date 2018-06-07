const model = require('./model.js')
const md5 = require('md5')
const checkNotLogin = require('../../../middlewares/check.js').checkNotLogin
const checkLogin = require('../../../middlewares/check.js').checkLogin

exports.getSite = async ctx => {
    await model.getSite()
       .then(ret=>{
        ctx.body = {
            code: 200,
            data:ret,
            message: '查询成功'
        }
       })
}
exports.createSite = async ctx => {
    let { name,url,code,remark } = ctx.request.body;
    let arr=[name,url,code,remark];
    await model.createSite(arr)
        .then(ret => {
            ctx.body = {
                code: 200,
                data:ret,
                message: '创建成功'
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
                message: '更新成功'
            }
        }).catch(err => {
            console.log(err)
        })
}