const { query } = require("../../../utils/db");


let getIconList =function(arr){
    let _sql=`select a.id, a.name,a.class_name,a.color,a.icon_url,a.type,a.remark ,b.name as city_name,c.url,c.name as url_name,
    d.name as dict_name
    from icon a,city b,site c ,dict d 
    where a.city_code= b.code and a.dict_code = d.code and a.site_id=c.id;`
    return query( _sql,arr)
}
//name,dict_code,city_code,type,color,class_name,icon_url,site_id,remark
let createIcon =function(arr){
    let _sql=`INSERT INTO icon (name,dict_code,city_code,type,color,class_name,icon_url,site_id,remark) 
    VALUES(?,?,?,?,?,?,?,?,?);`
    return query( _sql,arr)
}
let updateIcon =function(obj){
    let _sql=`UPDATE icon SET icon_code = ?,url_id = ?,name = ?,city_code = ?,color = ?, type =? remark = ? WHERE id = ?;`
    return query( _sql,'')
}

let getSiteOption =function(arr){
    let _sql=`select a.id as value,a.name as label,a.url from site a where a.dict_code=?;`
    return query( _sql,arr)
}

module.exports = {
    getIconList,
    createIcon,
    updateIcon,
    getSiteOption
};