const model = require('./model.js')
const checkNotLogin = require('../../../middlewares/check.js').checkNotLogin
const checkLogin = require('../../../middlewares/check.js').checkLogin
const server = require('../../../config/index').server
let request = require('request');

exports.getHome = async ctx => {
    await ctx.render('home', {
        code: 200,
        message: '登录成功'
    })
}

exports.getZone = async ctx => {
    let province=await model.getProvince([])||[];
    for(const item of province){
      let ret=  await model.getCity(item.value);
      item.children=ret;
    }
    ctx.body = {
        code: 200,
        data: province,
        message: '查询成功'
    }
}


exports.getDict = async ctx => {
    let dict=await model.getDictParent([])||[];
    for(const item of dict){
      let ret=  await model.getDictChild(item.value);
      item.children=ret;
    }
    ctx.body = {
        code: 200,
        data: dict,
        message: '查询成功'
    }
}
exports.getDictType = async ctx => {
    let dict_code=decodeURIComponent(ctx.request.querystring.split('=')[1]);
    let ret=  await model.getDictChild(dict_code);
    ctx.body = {
        code: 200,
        data: ret,
        message: '查询成功'
    }
}
exports.getLocation = async ctx => {
   let {x,y}=ctx.request.body;
   let city_name=await new Promise((resolve, reject)=> {
    request.get({ url:server.baiduLocation+`${y},${x}`},
    (error, response, body)=>{
     if (!error && response.statusCode == 200) {
         let ret= JSON.parse(body);
         let {province,city}=ret.result.addressComponent;
         resolve(city);
        }
    })
   });
   let ret=  await model.getCityByName(city_name);
   ctx.body = {
    code: 200,
    data: ret[0],
    message: '查询成功'
  }
}