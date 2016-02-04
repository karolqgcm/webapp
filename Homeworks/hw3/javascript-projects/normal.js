function normalRandom(){
    var u, v, s,t;
    if(u === 0){
        return normalRandom();
    }
    var s = Math.sqrt(-2 * Math.log(u)) *Math.cos (2 * Math.PI * v);
    var t = Math.sqrt(-2 * Math.log(u)) * Math.sin(2 * Math.PI * v);
    return{
        s:s,
        t:t
    };
}

console.log(normalRandom());