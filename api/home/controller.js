const model = require('./model.js')
const checkNotLogin = require('../../middlewares/check.js').checkNotLogin
const checkLogin = require('../../middlewares/check.js').checkLogin

exports.getHome = async ctx => {
    await ctx.render('home', {
        code: 200,
        message: '登录成功'
    })
}

exports.getZone = async ctx => {
    let province=await model.getProvince([])||[];
    for(const item of province){
      let ret=  await model.getCity(item.code);
      item.children=ret;
    }
    ctx.body = {
        code: 200,
        data: province,
        message: '登录成功'
    }
}