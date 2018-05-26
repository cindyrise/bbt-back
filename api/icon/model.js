const { query } = require("../../utils/db");
/**
 * 获取群消息
 * @param  群id
 * @return  message 群消息
 * @return  time  时间
 * @return  from_user  发送人id
 *  @return  avator  发送人头像
 */
let getIcon =function(obj){
    let _sql=`select a.id, a.icon_code,a.name as icon_title,a.color,b.url,b.name as url_title  from icon_info a,site_info b 
    where a.url_id=b.id and a.city_code='${obj.code}' and a.type= '${obj.type}';`
    return query( _sql,'')
}

let createIcon =function(obj){
    let _sql=`INSERT INTO icon_info (icon_code,url_id,name,city_code,color,type,remark) VALUES ('0003', '12', 'test', '12', 'test', '1', '');`
    return query( _sql,'')
}
let updateIcon =function(obj){
    let _sql=`UPDATE ad_info SET icon_code = ?,url_id = ?,name = ?,city_code = ?,color = ?, type =? remark = ? WHERE id = ?;`
    return query( _sql,'')
}

module.exports = {
    getIcon,
    createIcon,
    updateIcon
};