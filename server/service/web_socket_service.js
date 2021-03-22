const path = require('path')
const WebSocket = require('ws')
const file_utils = require('../utils/file_utils')

const wss = new WebSocket.Server({
    port: 3030,
})

module.exports.listen = () => {
    wss.on('connection', client => {
        console.log('客户端连接成功')
        client.on('message', async msg => {
            console.log('收到客户端消息：' + msg)
            let payload = JSON.parse(msg)
            const action = payload.action
            if (action === 'getData') {
                //根据action获取数据
                let filePath = '../data/' + payload.chartName + '.json'
                filePath = path.join(__dirname, filePath)
                const res = await file_utils.getFileJsonData(filePath)
                //添加data，send数据
                payload.data = res
                client.send(JSON.stringify(payload))
            } else {
                wss.clients.forEach(client => {
                    console.log('send to clients:', msg)
                    client.send(msg)
                })
            }


        })
    })
}