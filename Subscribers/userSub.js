const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://test.mosquitto.org");
let topic = "test";

console.log(typeof mqtt);

client.on('connect',()=>{
    client.subscribe(topic);
})

client.on('message',(topic,message)=>{
    console.log(message.toString());
})
