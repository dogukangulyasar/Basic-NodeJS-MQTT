"use strict";
exports.__esModule = true;
var Publisher_1 = require("./Publisher");
var uuid_1 = require("uuid");
var server = "mqtt://test.mosquitto.org";
var topic = "test";
var messageCargo = [
    {
        id: uuid_1.v4(),
        name: "Dogukan",
        surname: "Gulyasar",
        age: 999
    },
    {
        id: uuid_1.v4(),
        name: "Yakup",
        surname: "Beyoglu",
        age: 999
    }
];
var user = new Publisher_1.Publisher(server, topic, messageCargo);
user.connectPub();
