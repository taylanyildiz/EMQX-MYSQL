var config = {
    db:{
        database: 'veri_mqtt',
        username: 'root',
        // password: '',
        host: '127.0.0.1',
        port: '3306',
        dialect: 'mysql',
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
        }
      },
    mqtt:{
        host:'--',
        option:{
            keepalive:20,
            clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
            protocolId: 'MQTT',
            port: '--',
            will:{
                topic:'Connection/Failed',
                payload:'Connection closed',
                qos:0,
                retain:false,
            }
        }

    }
}

module.exports = config;