const Koa = require('koa')
const durationMid = require('./middleware/koa_response_duration')
const headerMid = require('./middleware/koa_response_header')
const dataMid = require('./middleware/koa_response_data')

const app = new Koa()

app.use(durationMid)

app.use(headerMid)

app.use(dataMid)

app.listen(3000)