const { query } = require("../../utils/db");

let getSite= function() {
    let _sql = `select * from site_info;`
    return query( _sql,'')
};
let createSite=function(arr){
    let _sql = `INSERT INTO site_info (name,url,remark) VALUES (?, ?, ?);`
    return query( _sql,arr)
}
let updateSite=function(id){
    let _sql = `update site_info set name=?,url=?,remark=? where id=?;`
    return query( _sql,id)
}

module.exports = {
    getSite,
    createSite,
    updateSite
};