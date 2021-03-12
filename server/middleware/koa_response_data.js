const path = require('path')
const fileUtils = require('../utils/file_utils')

module.exports = async (ctx, next) => {
    let url = ctx.request.url // /api/seller
    let filePath = '../data' + url.replace('/api', '') + '.json'  // '../data/seller.json'
    filePath = path.join(__dirname, filePath)
    console.log(filePath)
    try {
        const res = await fileUtils.getFileJsonData(filePath)
        ctx.response.body = res
    } catch {
        const res = {
            msg: "资源不存在",
            status: 404
        }
        ctx.response.body = JSON.stringify(res)
    }
    await next()
}