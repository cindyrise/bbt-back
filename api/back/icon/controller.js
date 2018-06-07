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

exports.getIcons = async ctx => {
    let {dict_code,city_code}=ctx.request.body;
    let arr=[city_name+'%',dict_code];
    await model.getIcons(arr)
          .then(res=>{
            ctx.body = {
                code: 200,
                data:res,
                message: '查询成功'
            }
          })
}