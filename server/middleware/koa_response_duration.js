module.exports = async (ctx, next) => {
    const start = Date.now()
    await next()
    const duration = Date.now() - start
    ctx.set('X-Response-Time', duration + 'ms')
}