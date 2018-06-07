const model = require('./model.js')
const server = require('../../../config/index').server
let request = require('request');

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

exports.getAdList=async ctx => {
    let {city_code}=ctx.request.body;
    let ret=  await model.getAdList(city_code);
    ctx.body = {
     code: 200,
     data: ret,
     message: '查询成功'
   }
}
exports.getIconList=async ctx => {
    let {city_code,dict_code}=ctx.request.body;
    let ret=  await model.getIconList([city_code,dict_code]);
    ctx.body = {
     code: 200,
     data: ret,
     message: '查询成功'
   }
}

exports.getDictByCode=async ctx => {
    let {code}=ctx.request.body;
    let ret=  await model.getDictByCode(code);
    ctx.body = {
     code: 200,
     data: ret,
     message: '查询成功'
   }
}