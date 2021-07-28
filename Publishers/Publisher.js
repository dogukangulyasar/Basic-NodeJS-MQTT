class Publisher {
    constructor(server, topic, message){
        this.mqtt = require('mqtt');
        this.server = server;
        this.client = this.mqtt.connect(server);
        this.topic = topic;
        this.message=message;
    }
    setMqtt(){
        this.mqtt = require("mqtt");
    }
    setServer(tmpServer){
        this.server = tmpServer;
    }
    setClient(tmpClient){
        this.client = this.mqtt.connect(tmpClient);
    }
    setTopic(tmpTopic){
        this.topic = tmpTopic;
    }
    setMessage(tmpMessage){
        this.message = tmpMessage;
    }
    setServer(tmpServer){
        this.server = tmpServer;
    }
    connectPub() {
        this.client.on('connect',()=>{
            this.client.subscribe(this.topic, err => {
                if(!err){
                    setInterval(()=>{
                        this.client.publish(this.topic, JSON.stringify(this.message));
                    },1000)
                }else{
                    console.log("Error in subscribe process", err);
                }
            });
        });
    }

}

module.exports.Publisher = Publisher;
