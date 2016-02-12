"use strict";
// Establish a parent class
function Shape(){
    var points = arguments;
    this.verify = arguments;
    this.setpoint = function(){
        var pt = pts;

        //points.length = 0;
        for(var i = 0;i < p.length; i++){
            var pt_auxiliar = Object.create(point);
            pt_auxiliar.x = pt[i][0];
            pt_auxiliar.y = pt[i][1];
            points.push(pt_auxiliar);
        }
        this.perimeter();
    }
    this.perimeter = function(){
        
        var perimeter = 0, x, y;
        for(var j = 0;j < this.verify.length;j++){
            x = this.verify[j][0] - this.verify[(j+1)%this.verify.length][0];
            x = x*x;
            y = this.verify[j][1] - this.verify[(j+1)%this.verify.length][1];
            y = y*y;
            perimeter+= Math.sqrt(x+y);
        }
        return perimeter;

    }
}

// Establish a child class
function Triangle(){
    var points = arguments;
    this.verify = arguments;
    this.root;
    this.area = function(){
        this.root = new Shape([0,0], [0,7], [3,4], [1,2]);
        console.log("the perimeter is:",this.root.perimeter());
        var p = this.perimeter();
        p = p/2;
        var x = this.verify[0][0] - this.verify[1][0];
        x = x*x;
        var y = this.verify[0][1] - this.verify[1][1];
        y = y*y;
        var a = Math.sqrt(x+y);

        x = this.verify[1][0] - this.verify[2][0];
        x = x*x;
        y = this.verify[1][1] - this.verify[2][1];
        y = y*y;
        var b = Math.sqrt(x+y);

        x = this.verify[2][0] - this.verify[0][0];
        x = x*x;
        y = this.verify[2][1] - this.verify[0][1];
        y = y*y;
        var c = Math.sqrt(x+y);

        return Math.sqrt(p*(p-a)*(p-b)*(p-c));

    }
}

function Rectangle(){
    var points = arguments;
    this.verify = arguments;
    this.area = function(){
       var x = this.verify[0][0] - this.verify[1][0];
        x = x*x;
        var y = this.verify[0][1] - this.verify[1][1];
        y = y*y;
       var a = Math.sqrt(x+y);
        x = this.verify[1][0] - this.verify[2][0];
        x = x*x;
        y = this.verify[1][1] - this.verify[2][1];
        y = y*y;
        var b = Math.sqrt(x+y);

        return (a*b);
    }
}
Triangle.prototype = new Shape();
Rectangle.prototype = new Shape();

// Make the Childclass inherit all of the Parent class characteristics
// by using the prototype property, explained in depth here: youtube.com/watch?v=EBoUT2eBlT4

var shape = new Shape([0,0], [0,7], [3,4], [1,2]);

var tri = new Triangle([0,0],[2,1],[2,0]);

var rect  = new Rectangle([0,0], [1,0], [1,1], [0,1]);

var perimeter, area;

if (shape.hasOwnProperty("perimeter")) {
    perimeter = shape.perimeter();
}
else {
    perimeter = "No perimeter attribute"
}

if (shape.hasOwnProperty("area")) {
    area = shape.area();
}
else {
    area = "No area attribute"
}

console.log("shape", perimeter, area);

var perimeter, area;

if (tri.hasOwnProperty("perimeter")) {
    perimeter = tri.perimeter();
}
else {
    perimeter = "No perimeter attribute"
}

if (tri.hasOwnProperty("area")) {
    area = tri.area();
}
else {
    area = "No perimeter attribute"
}

console.log("tri", perimeter, area);


var perimeter, area;

if (rect.hasOwnProperty("perimeter")) {
    perimeter = rect.perimeter();
}
else {
    perimeter = "No perimeter attribute"
}

if (rect.hasOwnProperty("area")) {
    area = rect.area();
}
else {
    area = "No perimeter attribute"
}

console.log("rect", perimeter, area);

