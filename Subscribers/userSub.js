const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://test.mosquitto.org");
let topic = "testDG";


client.on('connect',()=>{
    client.subscribe(topic);
})

client.on('message',(topic,message)=>{
    console.log(message.toString());
})
