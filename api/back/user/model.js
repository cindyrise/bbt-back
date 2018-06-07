const { query } = require("../../../utils/db");

let getUser= function(name) {
    let _sql = `select * from user_info where name="${name}";`
    return query( _sql,name)
};
let createUser=function(obj){
    let _sql = `select * from user_info where name="${name}";`
    return query( _sql,name)
}
let updateUser=function(obj){
    let _sql = `select * from user_info where name="${name}";`
    return query( _sql,name)
}

module.exports = {
    getUser,
    createUser,
    updateUser
};