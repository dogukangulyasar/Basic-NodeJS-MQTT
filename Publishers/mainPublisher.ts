import {Publisher} from './Publisher';
import {v4 as uuidv4} from 'uuid';
let server:string = "mqtt://test.mosquitto.org";
let topic:string = "test";
let messageCargo:Array<Object> = [
    {
        id: uuidv4(),
        name : "Dogukan",
        surname : "Gulyasar",
        age : 999
    },
    {
        id: uuidv4(),
        name : "Yakup",
        surname : "Beyoglu",
        age : 999
    }
]
let user = new Publisher(server,topic,messageCargo);
user.connectPub();