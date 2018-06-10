const model = require('./model.js')
const md5 = require('md5')
const checkNotLogin = require('../../../middlewares/check.js').checkNotLogin
const checkLogin = require('../../../middlewares/check.js').checkLogin

exports.login = async ctx => {
    let {
        name,
        pwd
    } = ctx.request.body
    console.log(name, pwd);
    let res= await model.login(name);
    console.log(md5(pwd),res[0]['pwd'],name);
    if (res.length && name === res[0]['name'] && md5(pwd) === res[0]['pwd']) {
        ctx.session = {
            user: res[0]['name'],
            id: res[0]['id']
        }
        ctx.body = {
            code: 200,
            result: true,
            message: '登录成功'
        }
    }else{
        ctx.body = {
            code: 200,
            result: false,
            message: '登录失败'
        }
    }
}

exports.loginOut = async ctx => {
    ctx.session = null;
    ctx.body = true;
    console.log('登出成功')
}