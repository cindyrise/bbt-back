const model = require('./model.js')
const md5 = require('md5')
let request = require('request');
const checkNotLogin = require('../../../middlewares/check.js').checkNotLogin
const checkLogin = require('../../../middlewares/check.js').checkLogin
const server = require('../../../config/index').server
const fs = require('fs')

exports.getIconList = async ctx => {
    await model.getIconList('')
          .then(res=>{
            ctx.body = {
                code: 200,
                data:res,
                message: '登录成功'
            }
          })
}

exports.createIcon=async ctx=>{
    let body = ctx.request.body,icon_url='';
    const {fields,files}=body;
    const{name,dict_code,city_code,type,color,class_name,site_id,remark}=fields;
    const {iconFile}=files;
    if(type!='font'){
        let readStream = fs.createReadStream(iconFile.path);
        let fileName = 'icon_bat_' + city_code+'_'+'212' + iconFile.name.substr(-4);
        let iconPath = server.iconPath + fileName;
        let writeStream = fs.createWriteStream(iconPath);
        readStream.pipe(writeStream);
        icon_url=fileName;
    }
    let arr=[name,dict_code,city_code,type,color,class_name,icon_url,site_id,remark];
    await model.createIcon(arr)
    .then(res=>{
      ctx.body = {
          code: 200,
          data:res,
          message: '创建成功'
      }
    })
}
exports.updateIcon = async ctx => {
    await model.getIconList('')
    .then(res=>{
      ctx.body = {
          code: 200,
          data:res,
          message: '登录成功'
      }
    })
}

exports.getSiteOption = async ctx => {
    let {dict_code}=ctx.request.body;
    console.log(ctx.request.body,'dict_code');
    await model.getSiteOption(dict_code)
          .then(res=>{
            ctx.body = {
                code: 200,
                data:res,
                message: '查询成功'
            }
          })
}