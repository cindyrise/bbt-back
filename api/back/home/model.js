const { query } = require("../../../utils/db");

let getHome= function(name) {
    let _sql = `select * from user_info where name="${name}";`
    return query( _sql,name)
};

let getProvince= function(name) {
    let _sql = `select a.code as value, a.name as label 
    from city a 
    where a.code = substring(a.code, 1, 4);`
    return query( _sql,name)
};

let getCity= function(code) {
    let _sql = `select code as value, name as label from city a  where  a.code like '${code}%' and length(a.code)>4;`
    return query( _sql,code)
};
let getCityByName=function(name) {
    let _sql = `select code , name from city a  where  a.name like ?`
    return query( _sql,name)
};

let getDictParent= function(name) {
    let _sql = `select a.code as value, a.name as label 
    from dict a 
    where a.code = substring(a.code, 1, 4);`
    return query( _sql,name)
};
let getDictChild=function(code) {
    let _sql = `select code as value, name as label from dict a  where  a.code like '${code}%' and length(a.code)>4;`
    return query( _sql,code)
};

module.exports = {
    getHome,
    getProvince,
    getCity,
    getDictParent,
    getDictChild,
    getCityByName
};