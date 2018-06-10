const { query } = require("../../../utils/db");

let login= function(name) {
    let _sql = `select * from user where name= ?;`
    return query( _sql,name)
};

module.exports = {
	login
};