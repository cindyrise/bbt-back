const fs = require('fs')
const path = require('path');
const walkFile = require('./walk-file')

/**
 * 获取sql目录下的文件目录数据
 * @return {object} 
 */
function getSqlMap () {
  let basePath = path.resolve(__dirname, '../init/');//指定根目录
  basePath = basePath.replace(/\\/g, '\/');
  basePath = basePath + '/'
  let fileList = walkFile( basePath, 'sql' )
  return fileList
}

module.exports = getSqlMap