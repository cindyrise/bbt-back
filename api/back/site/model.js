const { query } = require("../../../utils/db");

let getSite= function() {
    let _sql = `select a.id,a.name,a.url,a.remark,b.name as dict_name,b.code  from site a, dict b where a.dict_code=b.code; `
    return query( _sql,'')
};
let createSite=function(arr){
    let _sql = `INSERT INTO site (name,url,dict_code,remark) VALUES (?, ?, ?, ?);`
    return query( _sql,arr)
}
let updateSite=function(id){
    let _sql = `update site set name=?,url=?,remark=? where id=?;`
    return query( _sql,id)
}

module.exports = {
    getSite,
    createSite,
    updateSite
};

