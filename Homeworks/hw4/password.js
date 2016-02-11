"use strict";

/* Implement String.validate() here */

var validEx = []

String.prototype.validate2=function (min, max, valid_exp, invalid_exp){
    if(this.length < min && this.length>max){
        console.log("min")
        return false;
    }else{
        var val_regex = new RegExp(valid_exp, 'g');

        if (!this.match(val_regex)) {
            console.log("nval");
            return false;
        } else {
            var inval_regex = new RegExp(invalid_exp, 'g');
            if (this.match(inval_regex)) {
                console.log("inv")
                return false;
            } else {
                console.log("val");
                return true;
            }

        }
    }

}



/* Implement String.validate() here */

var test_passwords = [
    "Hxou7p&&3",
    "password",
    ";larJ7",
    "DROWSSAP",
    "K33pI7S@f3",
    ":Belieber1"
];


console.log(test_passwords[1].length);
console.log(test_passwords[5].validate2(8,20,"^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*]).{","[^((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*]).{)]"));