const { query } = require("../../utils/db");

let getHome= function(name) {
    let _sql = `select * from user_info where name="${name}";`
    return query( _sql,name)
};

let getProvince= function(name) {
    let _sql = `select a.code, a.name 
    from city_info a 
    where a.code = substring(a.code, 1, 4);`
    return query( _sql,name)
};

let getCity= function(code) {
    let _sql = `select code, name from city_info a  where  a.code like '${code}%' and length(a.code)>4;`
    return query( _sql,code)
};

module.exports = {
    getHome,
    getProvince,
    getCity
};