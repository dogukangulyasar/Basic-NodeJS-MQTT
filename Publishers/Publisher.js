"use strict";
exports.__esModule = true;
var mqtt_1 = require("mqtt");
var uuid_1 = require("uuid");
var Buffer = "";
var Publisher = /** @class */ (function () {
    function Publisher(broker, topic, message) {
        this.id = uuid_1.v4();
        this.broker = broker;
        this.topic = topic;
        this.message = message;
        this.client = mqtt_1.connect(this.broker);
    }
    Publisher.prototype.setId = function (id) {
        this.id = id;
    };
    Publisher.prototype.getId = function () {
        return this.id;
    };
    Publisher.prototype.setBroker = function (broker) {
        this.broker = broker;
    };
    Publisher.prototype.getBroker = function () {
        return this.broker;
    };
    Publisher.prototype.setTopic = function (topic) {
        this.topic = topic;
    };
    Publisher.prototype.getTopic = function () {
        return this.topic;
    };
    Publisher.prototype.setMessage = function (message) {
        this.message = message;
    };
    Publisher.prototype.getMessage = function () {
        return this.message;
    };
    Publisher.prototype.connectPub = function () {
        var _this = this;
        this.client.on('connect', function () {
            _this.client.subscribe(_this.topic, function (err) {
                if (!err) {
                    setInterval(function () {
                        _this.client.publish(_this.topic, _this.id + " says: " + JSON.stringify(_this.message));
                    }, 1000);
                }
                else {
                    console.log("Error in subscribe process", err);
                }
            });
        });
    };
    return Publisher;
}());
exports.Publisher = Publisher;
