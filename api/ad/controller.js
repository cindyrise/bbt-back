const model = require('./model.js')
const md5 = require('md5')
const checkNotLogin = require('../../middlewares/check.js').checkNotLogin
const checkLogin = require('../../middlewares/check.js').checkLogin
const citys=require('../../init/city');

exports.getAd = async ctx => {
    let {city_id} = ctx.request.body;
    await model.getAd(city_id)
        .then(res=>{
            ctx.body = {
                code: 200,
                data:res,
                message: '登录成功'
            }
        })

}
exports.createAd = async ctx => {
    await model.createAd(["12","0001","1","be"])
        .then(res=>{
            ctx.body = {
                code: 200,
                result:true,
                message: '登录成功'
            }
        })

}
exports.updateAd = async ctx => {
    let { name, pwd } = ctx.request.body
    await model.login(name)
        .then(result => {
            let res = result
            if (res.length && name === res[0]['name'] && md5(pwd) === res[0]['pwd']) {
                ctx.session = {
                    user: res[0]['name'],
                    id: res[0]['id']
                }
                ctx.body = {
                    code: 200,
                    message: '登录成功'
                }
                console.log('ctx.session.id', ctx.session.id)
                console.log('session', ctx.session)
                console.log('登录成功')
            } else {
                ctx.body = {
                    code: 500,
                    message: '用户名或密码错误'
                }
                console.log('用户名或密码错误!')
            }
        }).catch(err => {
            console.log(err)
        })
}
