const {Publisher} = require("./Publisher");
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
let userPublisher = new Publisher("mqtt://test.mosquitto.org","testDG",message);
userPublisher.connectPub();

//userPublisher.connectPub();