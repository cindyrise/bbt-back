const { query } = require("../../utils/db");
/**
 * 获取群消息
 * @param  群id
 * @return  message 群消息
 * @return  time  时间
 * @return  from_user  发送人id
 *  @return  avator  发送人头像
 */
let getAd= function(city_id) {
    let _sql = `select * from ad_info where city_id= ?;`
    return query( _sql,city_id)
};
let updateAd= (arr) => {
    const _sql =`UPDATE ad_info SET img_url = ?,city_id = ?,rank = ?,remark = ? WHERE id = ?;`
    return query(_sql, arr);
  };
let createAd=(arr) => {
    let _sql=" INSERT INTO ad_info (img_url,city_id,sort ,remark) VALUES(?,?,?,?); ";
	return query(_sql, arr)
}


module.exports = {
    getAd,
    updateAd,
    createAd
};
