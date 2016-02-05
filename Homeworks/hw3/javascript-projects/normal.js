/**
 * Created by Karol on 2/4/2016.
 * script to normalize random numbers
 */
//global variables
var nSample=20;
function genRandom(){
    var u, v, result;
    u = Math.random();
    v = Math.random();
    result = {
        u:u,
        v:v
    }
    return result;
}

function normalize(){
    var s, t, normal,g;
    g = genRandom();
    console.log("Non-normalized:"+ g.u+" , "+ g.v);
    if(g.u===0){
        normalize();
    }else{
        s=Math.sqrt(-2*Math.log(g.u))*Math.cos(2* g.v*Math.PI)
        t=Math.sqrt(-2*Math.log(g.u))*Math.sin(2* g.v*Math.PI)
    }
    normal={
        s:s,
        t:t
    }
    return normal;
}

function genNormalNumbers(){
    var n, samples=[];
    for(var ii=0;ii<nSample/2;ii++){
        n = normalize();
        samples.push(n.s);
        samples.push(n.t);
    }
    return samples;
}

console.log(genNormalNumbers());