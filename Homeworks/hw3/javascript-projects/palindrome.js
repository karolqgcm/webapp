/**
 * Created by Karol on 2/5/2016.
 */
var words = ["late", "sub", "mom", "moom"];
var pal={};
function palindrome(word){
    word = words [ii].toLowerCase().split(" ").join("").trim();
    var div = Math.ceil(word.length/2.0)
    for(var c=0; c<div;c++){
        console.log(word[c]+" "+ word[word.length-1-c] )
        if(word[c]!=word[word.length-1-c]){

            return false;
        }
    }return true;
}
for(var ii=0;ii<words.length;ii++){


    if(palindrome(words[ii])){
        console.log(words[ii] + " is  a palindrome.")
    }else{
        console.log(words[ii] + " is not a palindrome.")

}}
