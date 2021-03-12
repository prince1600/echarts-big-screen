module.exports = async (ctx, next) => {
    const contentType = 'application/json; charset=utf-8'
    ctx.set('Content-Type', contentType)
    ctx.set('Access-Control-Allow-Origin', '*')
    ctx.set('Access-Control-Allow-Methods', 'OPTION, GET, POST, PUT, DELETE')
    await next()
}