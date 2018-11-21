
var handleCounter = function (result) {
    console.log('The callback count is ' + result);
}

var callbackLoop = function(counter, callback) {

    for(var i=1; i <= counter; i++) {
        callback(i);
    }
    console.log("*** exiting callbackLoop *****");
}

callbackLoop(5, handleCounter);
callbackLoop(2, handleCounter);
callbackLoop(7, handleCounter);