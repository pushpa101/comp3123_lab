var events = require('events');

var eventEmitter = new events.EventEmitter();



var fn = function(){

    console.log('Alarm has been triggered!');

}



var fn2 = function(){

    console.log('An alarm had been triggered!' + "\n" + "Call 911");

}



eventEmitter

    .on('call', fn)

    .on('num',fn2);

eventEmitter.emit('call');

eventEmitter.emit('num');