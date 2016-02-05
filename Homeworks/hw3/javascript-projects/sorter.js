/**
 * Created by Karol on 2/5/2016.
 */
var words=["abba", "mom", "dad", "mom"];

words = words.sort();

var duplicated =[];


var remove = function (array) {
    var cur, isIn;
    for (var i = array.length - 1; i >= 0; i--) {
        cur = array[i];
        isIn = false;
        for (var j = i - 1; !isIn && j >= 0; j--) {
            if (cur === array[j]) {
                if (i !== j) {
                    array.splice(i, 1);
                }
                isIn = true;
            }
        }
    }
    return array;
};

duplicated = remove(words);
console.log(duplicated);
