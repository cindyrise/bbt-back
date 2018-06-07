const model = require('./model.js')
const md5 = require('md5')
const checkNotLogin = require('../../../middlewares/check.js').checkNotLogin
const checkLogin = require('../../../middlewares/check.js').checkLogin

exports.getLogin = async ctx => {
    //await checkNotLogin(ctx)
    // await ctx.render('login', {
    //     session: ctx.session,
    // })
    ctx.body = {
        code: 200,
        message: '登录成功'
    }
}
exports.login = async ctx => {
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

exports.loginOut=async ctx=>{
    ctx.session = null;
    ctx.body = true;
    console.log('登出成功')
}