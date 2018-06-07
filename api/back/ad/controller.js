const model = require('./model.js')
const md5 = require('md5')
var request = require('request');
const checkNotLogin = require('../../../middlewares/check.js').checkNotLogin
const checkLogin = require('../../../middlewares/check.js').checkLogin
const server = require('../../../config/index').server
const fs = require('fs')

exports.getAd = async ctx => {
    let {city_name } = ctx.request.body;
    await model.getAd(city_name)
        .then(res => {
            ctx.body = {
                code: 200,
                data: res,
                message: '查询成功'
            }
        })
}
exports.createAd = async ctx => {
    let body = ctx.request.body;
    let adFile = body.files.adFile,
        fields = body.fields;
    let readStream = fs.createReadStream(adFile.path);
    let fileName = 'ad_bat_' + String(fields.city_id.split(',')[1]) + "_" + fields.sort + adFile.name.substr(-4);
    let filePath = server.adPath + fileName;
    let writeStream = fs.createWriteStream(filePath);
    readStream.pipe(writeStream);
    let insertData = [fields.name, fileName, fields.city_id.split(',')[1], fields.sort, fields.remark];
    await model.createAd(insertData)
        .then(res => {
            ctx.body = {
                code: 200,
                result: true,
                message: '写入成功'
            }
        })

}
exports.updateAd = async ctx => {
    let {
        name,
        pwd
    } = ctx.request.body
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