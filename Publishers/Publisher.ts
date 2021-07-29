import { Client, connect } from "mqtt";
import { v4 as uuidv4 } from 'uuid';
const Buffer:string = "";
class Publisher {
    private id:string;
    private broker:string
    private topic:string;
    private message:Array<Object>;
    private client:Client;
    
    constructor(broker:string, topic:string, message:Array<Object>){
        this.id= uuidv4();
        this.broker = broker;
        this.topic = topic;
        this.message = message;
        this.client = connect(this.broker);
    }

    setId(id:string):void{
        this.id = id;
    }

    getId():string{
        return this.id;
    }

    setBroker(broker:string):void{
        this.broker = broker;
    }

    getBroker():string{
        return this.broker;
    }

    setTopic(topic:string):void{
        this.topic = topic;
    }

    getTopic():string{
        return this.topic;
    }

    setMessage(message:Array<Object>):void{
        this.message = message;
    }
    
    getMessage():Array<Object>{
        return this.message;
    }

    connectPub():void{
        this.client.on('connect',()=>{
            this.client.subscribe(this.topic, err => {
                if(!err){
                    setInterval(()=>{
                        this.client.publish(this.topic, `${this.id} says: ${JSON.stringify(this.message)}`);
                    },1000)
                }else{
                    console.log("Error in subscribe process", err);
                }
            });
        });
    }
}

export {Publisher};