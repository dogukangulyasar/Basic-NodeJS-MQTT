# Basic-NodeJS-MQTT
Boilerplate for the MQTT protocol using with NodeJS and MQTT

## Needed packages
```
npm i mqtt nodemon 
```

## Used test MQTT server

```
test.mosquitto.org
```

## Some important points

1. Topics need to be same for both publisher and subscriber between them.
2. Need to write an mqtt server (can be used aeds **mosca is not working anymore**)
3. Becareful with the client.on(**''**) -> '' means the event
### Event types
```
connect -> when the publisher/subscriber connects to the mqtt server
message -> when the publisher sends and subscriber receives the message. Only use in subscriber.
```
4. When the connect event comes real need to subscribe each component to the specific topic with: 
```
client.subscribe(topic)
```
