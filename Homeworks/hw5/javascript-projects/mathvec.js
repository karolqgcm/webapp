"use strict";


var assert = require('assert');

var dot_ = function (a,b){
    return a*b;
}
var plus_ = function(a,b){
    return a+b;
}
var minus_ = function(a,b){
    return a-b;
}

var reduce = function(func, init, xs){
    return xs.reduce(func, init);
}
var mathvec = function(entries) {
    // entries contains the values of the vector
    var that;
    // Inherit from Float64Array
    that = new Float64Array(entries);

    // Combine multiple arrays, grouping their corresponding elements
    function zip(arrays) {
        // Input: an Array of Arrays of length n
        // Output: an Array containing the grouped elements of each array
        // ex. output === [[arrays[0][0], arrays[1][0], arrays[2][0], ...],
        //                 [arrays[0][1], arrays[1][1], arrays[2][1], ...], ...
        //                 [arrays[0][n-1], arrays[1][n-1], arrays[2][n-1], ...]]
        return Array.apply(null,Array(arrays[0].length)).map(function(_,i){
            return arrays.map(function(array){return array[i]})
        });
    }

// Calculate the dot product of this and rhs
    that.dot = function(rhs) {
        // Input: a mathvec object
        // Output: the dot product of this and rhs if they are the
        //         same length
        // ex. output = sum(this[i] * rhs[i]) for all i
        assert(that.length === rhs.length, "Error: mismatch length");
        console.log("Dot product: ")
        var d = that.map(function (val, index){
                console.log ("a = "+val+ " b = "+rhs[index] +" a*b = "+val*rhs[index]);
                return (val*rhs[index])});
        console.log("Dot product result: ["+d+"]");
        return d;

    };

// Calculate the sum of this and rhs
    that.plus = function(rhs) {
        // Input: a mathvec object
        // Output: a new mathvec object containing the sum of this and
        //         rhs if they are the same length
        // ex. output[i] = this[i] + rhs[i]
        assert(that.length === rhs.length, "Error: mismatch length")
        console.log("Sum:");
        var p = that.map(function (val, index){
            console.log ("a = "+val+ " b = "+rhs[index] +" a+b = "+(val+rhs[index]));
            return (val+rhs[index])});
        console.log("Sum result: ["+p+"]");
        return p;

    };

// Calculate the difference of this and rhs
    that.minus = function(rhs) {
        // Input: a mathvec object
        // Output: a new mathvec object containing the difference of
        //         this and rhs if they are the same length
        // ex. output[i] = this[i] - rhs[i]
        assert(that.length === rhs.length, "Error: mismatch length")
        console.log("Difference:");
        var m = that.map(function (val, index){
            console.log ("a = "+val+ " b = "+rhs[index] +" a-b = "+(val-rhs[index]));
            return (val-rhs[index])});
        console.log("Difference result: ["+m+"]");
        return m;


    };

// Perform scalar multiplication on this
    that.multiply = function(c) {
        // Input: a number
        // Output: a new mathvec object containing the product of the
        //         entries of this and c
        // ex. output[i] = this[i] * c

        console.log("Scalar multiplication:");
        var m = that.map(function (val, c){
            console.log ("a = "+val+ " b = "+c +" a*b = "+(val*c));
            return (val*c)});
        console.log("Scalar multiplicaion result: ["+m+"]");
        return m;


    };

// Calculate the inverse of this
    that.negate = function() {
        // Input: none
        // Output: a vector containing the inverse of this
        // ex. output[i] = -this[i]
        console.log("Inverse:");

        var m = that.map(function (val){
            console.log ("a = "+val+ " a * -1 = "+(val* (-1)));
            return (val*(-1))});
        console.log("Inverse result: ["+m+"]");
        return m;
        
    };


// Create a string representation oy define our intention, and let map do the work. This can also be chained easily:

var numbers = [1, 2, 3, 4];
    that.toString = function() {
        // Input: none
        // Output: a string representation of this
        // ex. output = "[ " + this[0] + this[1] + ... + this[n] + "]"
            var s = [];
            return that.map(function(val, index){
                s[index] = val.toString();
                return s[index];
            })

    };

    // Place the values of the mathvec into a standard Array
    that.toArr = function() {
        // Input: none
        // Output: an Array object with the values of this
        // ex. var output = new Array(); output[i] = this[i];
        var newSt = new Array();
        return that.map(function (val, index){
            newSt[index]=val;
            return  val;
        })
    };


    return that;
};

var m=mathvec([1,2,3]), n=mathvec([4,5,6]);


console.log(m.dot(n));
console.log(m.plus(n));
console.log(m.minus(n));
console.log(m.negate());
console.log(m.toArr());
console.log(n.toString());
