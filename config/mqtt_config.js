const mqtt = require('mqtt');
const conf = require('./conf.js');

const mqttClient = mqtt.connect(conf.mqtt.localhost,conf.mqtt.option);

mqttClient.on('connect', function () {
    console.log("Connected MQTT");
    mqttClient.subscribe('elevator/#', function (err) {
      if (!err) {
          console.log("elevator/# Subcribed");
      }
    });
  })
  
  mqttClient.on('message', function (topic, message) {
    console.log(message.toString());
  });
  
  module.exports = mqttClient;