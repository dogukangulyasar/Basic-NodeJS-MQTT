const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://test.mosquitto.org');
let topic = "DG"
let message = [
    {
        name : "Dogukan",
        surname : "Gulyasar",
        age : 999
    },
    {
        name : "Yakup",
        surname : "Beyoglu",
        age : 999
    }
]
client.on('connect',()=>{
    client.subscribe(topic, err => {
        if(!err){
            setInterval(()=>{
                client.publish(topic, JSON.stringify(message));
            },100)
            
        }else{
            console.log("Error in subscribe process", err);
        }
    });

    
});