/*console.log('Hello World!');

function greet(){
    console.log('Hello World!');
}

var greet = function(){
    console.log('Hello World!');
} 

greet();
*/
// Exercise 1
/*var greet = function(){
    console.log('Hello World!');
} 

for(var i=0;i<=10;i++){
    greet();

}*/

// Exercise 2
/*var greet = function(){
    var getCurrentDateAndTime = new Date();    
    console.log('Hello World!'+ "It is " + getCurrentDateAndTime);
} 

for(var i=0;i<=10;i++){
    greet();

}*/

// Exercise 3
/*var getCurrentDateAndTime = new Date();
var day = getCurrentDateAndTime.toLocaleDateString();
var time = getCurrentDateAndTime.toLocaleTimeString();

console.log('Current Day: ' + day + ' Current Time: ' + time);*/

// Exercise 4
var moment = require('moment');
//moment().format('MMMM Do YYYY, h:mm:ss a');
//var dateTime = require('node-datetime');
//var dt = dateTime.create();
//var getCurrentDateAndTime = moment (new Date());
//dt.format('m/d/Y H:M:S');

var greet = function (){
    var wrapped = moment(new Date())
    //moment().format('MMMM Do YYYY, h:mm:ss a');
    console.log(wrapped);    
        
}

greet();

