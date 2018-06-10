const model = require('./model.js')
var request = require('request');
const checkNotLogin = require('../../../middlewares/check.js').checkNotLogin
const checkLogin = require('../../../middlewares/check.js').checkLogin
const server = require('../../../config/index').server
const fs = require('fs')
exports.getAd = async ctx => {
    await model.getAd("")
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
    ctx.body = {
        code: 200,
        result: true,
        message: '写入成功'
    }
}