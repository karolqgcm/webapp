
    var inval = /[^!$%&#;?@~a-zA-Z0-9]|\s+/;

var regexval = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*])/;
var test_passwords = [
    "Hxou7p&&3",
    "password",
    ";larJ7",
    "DROWSSAP",
    "K33pI7S@f3",
    ":Belieber1"
];
String.prototype.validate = function(min,max,val,inval){
    var temp=false;
    if(this.length>=min && this.length<=20){
        if(this.match(val) && !this.match(inval)){
            temp = true;
        }else{
            temp = false;
        }
    }else{
        temp = false;
    }
    return temp;
}
for(var i=0;i<6;i++) {

    console.log(test_passwords[i].validate(8, 20, regexval, inval));
}