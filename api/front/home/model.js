const { query } = require("../../../utils/db");

let getCityByName=function(name) {
    let _sql = `select code , name from city a  where  a.name like ?`
    return query( _sql,name)
};

let getAdList= function(city_code) {
    let _sql = `select id ,name ,img_url from ad  where city_code= ? order by sort LIMIT 4; `
    return query( _sql,city_code)
};

let getIconList =function(arr){  
    let _sql=`select a.code,a.color,a.icon_url,a.type,c.url,c.name as url_name 
    from icon a,site c ,dict d 
    where a.city_code= ? and a.dict_code = ? and a.site_id=c.id ;`
    return query( _sql,arr)
}
let getDictByCode=function(code){  
    let _sql = `select code as value, name as label from dict a  where  a.code like '${code}%' and length(a.code)>4;`
    return query( _sql,code)
}
module.exports = {
    getCityByName,
    getAdList,
    getIconList,
    getDictByCode
}