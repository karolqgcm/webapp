/**
 * Created by Karol on 2/4/2016.
 */
var k, hdr, nSamples=1e5, binSize=0.1;


function normalRandom(){
    var u, v, s,t;
    u=Math.random();
    v=Math.random();
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

function compare(a,b){
    /*convert string to number*/
    var v1=parseInt(a,10);
    var v2=parseInt(b,10);
    if(v1<v2){
        return -1;
    }
    if(v2<v1){
        return 1;
    }
    return 0;

}
function computeHist(nSamples, binSize){
    var hist={}, i, r,idxi,idxj;
    function idx(u){
        if(binSize===0){
            throw new Error("Bin size cannot be 0");
        }
        return Math.floor(u/binSize);
    }
    console.log("Generating samples");
    for(i=0;i<nSamples/2;i++){
        r = normalRandom();
        idxi=idx(r.s);
        idxj=idx(r.t);
        hist[idxi]=hist[idxi] || 0;
        hist[idxi]++;
        hist[idxj]=hist[idxj] || 0;
        hist[idxj]++;
    }
    return hist;
}

var hist = computeHist(nSamples,binSize);
console.log(hist);
var sorted=[];
for(var label in hist){
    if(hist.hasOwnProperty(label)){
        sorted.push(label);
    }
}

sorted=sorted.sort(compare);
var myKeys = Object.keys(hist).sort(compare);
var myMax = hist[myKeys[Math.floor((myKeys.length/2))]];
for(k=0;k<myKeys.length;k++){
    console.log(myKeys[k]+" = ")
}

console.log("Printing starts. Bins of size", binSize);
for(k=0;k<myKeys.length;k++){
    switch (myKeys[k].length) {
        case 3:
            hdr = myKeys[k] + " : ";
            break;
        case 2:
            hdr="   "+myKeys[k]+" : "
            break;
        case 1:
            hdr="   "+myKeys[k]+ " : ";
            break
        default:
            hdr = +myKeys[k]+ " : ";
    }
    console.log(hdr+'*'.repeat(Math.ceil(20.0+hist[myKeys]/myKeys)));
}