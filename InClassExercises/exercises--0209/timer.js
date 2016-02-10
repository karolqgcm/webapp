"use strict";

/* Implement the EggTimer prototype here */

/* End EggTimer implementation */
var EggTimer = function(){
     var id = 0;
    var callback = function(){console.log("Ding"); id = 0;};
    return{
        start: function(interval)[
            id = setTimeout(callback,interval);

    },
    stop: function(){
        if(id !==0){
            clearTimeout(id);
        }
    },
    isRunning:function(){
        return(id!==0);
    }
}
// This code will test your start and stop implementations

// Create a new EggTimer instance
var myTimer = new EggTimer();

//Start a timer for 5s
myTimer.start(5000);

//Stop the current timer after 1s and start a new one for 2s
setTimeout(function(timer) {timer.stop(); timer.start(2000);}, 1000, myTimer);
