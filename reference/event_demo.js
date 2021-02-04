const EventEmitter = require('events');
const event = require('events');

// Create class 

class MyEvent extends EventEmitter{}

//Init Object
const myEvent =  new MyEvent();

// Event listener
myEvent.on('event', ()=>{
    console.log('Event Fired!');
});