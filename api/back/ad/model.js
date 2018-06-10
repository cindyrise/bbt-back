const { query } = require("../../../utils/db");
/**
 * 获取群消息
 * @param  群id
 * @return  message 群消息
 * @return  time  时间
 * @return  from_user  发送人id
 *  @return  avator  发送人头像
 */
let getAd= function(city_name) {
    let _sql = `select a.name as city_name,b.id,b.name,b.img_url,b.sort,b.remark from city a ,ad b where  b.city_code=a.code order by b.sort;`
    return query( _sql,'')
};
let updateAd= (arr) => {
    const _sql =`UPDATE ad SET img_url = ?,city_id = ?,rank = ?,remark = ? WHERE id = ?;`
    return query(_sql, arr);
  };
let createAd=(arr) => {
    let _sql=" INSERT INTO ad (name,img_url,city_code,sort,remark) VALUES(?,?,?,?,?); ";
	return query(_sql, arr)
}

module.exports = {
    getAd,
    updateAd,
    createAd
};
