"use strict";

/* Implement Shape, Triangle, and Rectangle here */

/* Implement Shape, Triangle, and Rectangle here */

var shape = new Shape([0,0], [0,7], [3,4], [1,2]);

var tri = new Triangle([0,0] [2,1], [2,0]);

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
    area = "No perimeter attribute"
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