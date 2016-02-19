"use strict";

// Return an array with the contents of arr flattened to one dimension
function flatten(arr) {
    return arr.reduce(function (flat, toFlatten) {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);

}

console.log(flatten( [[[1, [0, 1.1]], 2, 3], [[6,7],[4, 5]]] ));
