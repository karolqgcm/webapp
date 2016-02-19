"use strict";
var inval = /[^!$%&#;?@~a-zA-Z0-9]|\s+/;

var regexval = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*])/;

String.prototype.contains = function(it) { console.log(this.indexOf(it));return this.indexOf(it) != -1; };
var d = /.*?[0-9]/;
var uc = /.*?[A-Z]/;
var lc = /.*?[a-z]/;
var s = /.*?[#?!@$%^&*]/;
var test_passwords = [
    "Hxou7p&&3",
    "password",
    ";larJ7",
    "DROWSSAP",
    "K33pI7S@f3",
    ":Belieber1"
];
function success(password){
    console.log("%s is a valid password.", password);
};
function error(num){
    switch (num){
        case 0:

                console.log("Must have between 8 and 20 characters");
            break;

        case 1:
                console.log("Must have at least one uppercase letter");
            break;
        case 2:
            console.log("Musthave at least one lowercase letter");
            break;
        case 3:
            console.log("Must have at least one number");
            break;
        case 4:
                console.log("Must have at least one special character");
            break;
        case 5:
                console.log("Cannot contain white spaces");
            break;
        case 6:
                console.log("Cannot contain new line");
            break;
        case 7:
                console.log("Cannot contain tabs");
            }



}
String.prototype.validate = function (min,max,validRegex,invalidRegex,success,error){
    if(this.match(validRegex)&& !this.match(invalidRegex)){
        success(this);
        console.log();
    }else {
        console.log("%s produced the following errors:", this)
        if (this.length<min || this.length>max){
            error(0);
            }
        if(!this.match(uc)){
            error(1);
        }
         if(!this.match(lc)){
            error(2);
        }
        if(!this.match(d)){
            error(3);
        }
        if(!this.match(s)){
            error(4);
        }
        for(var i = 0; i<this.length;i++) {
            if (this.charAt(i) === ' ')error(5);
            if (this.charAt(i) === '\n')erro(6);
            if (this.charAt(i) === '\t')error(7);
        }
        console.log();
    }

};

var i;
for (i=0; i < test_passwords.length; i++) {
    test_passwords[i].validate(8,20,regexval, inval,success,error);
}

