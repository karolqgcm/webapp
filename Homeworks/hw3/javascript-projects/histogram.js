/**
 * Created by Karol on 2/5/2016.
 */
/**
 * Created by Karol on 2/4/2016.
 *
 */
//global variables
var nSample=10000, binSize=0.1;
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
    //console.log("Non-normalized:"+ g.u+" , "+ g.v);
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

//console.log(genNormalNumbers());


function computeHist(nSample, binSize){
    var hist={}, i, r,idxi,idxj, floor;
    function idx(b){
        if(binSize===0){
            throw new Error("Bin size cannot be 0");
        }
        floor = Math.floor(b/binSize);
        //console.log("floor of "+b+" is "+floor);
        return floor ;
    }
    for(i=0;i<nSample/2;i++){
        r=normalize();
        idxi=idx(r.s);
        idxj=idx(r.t);
        hist[idxi]= hist[idxi] || 0;
        hist[idxi]++;
        hist[idxj]= hist[idxj] || 0;
        hist[idxj]++;

    }
    return hist;
    //console.log(hist);
}

var histogram = computeHist(nSample, binSize);
//console.log("computeHist");

var compare = function (a,b){
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

var sortedHist = Object.keys(histogram).sort(compare);
//console.log(sortedHist);

//var h = {'3':1,'-7':2,'-1':3, '0':4, '1':5}; //h = histogram
//console.log(h);
//console.log(h.hasOwnProperty(label));
//var hs=[];// hs = sortedHist
//for (var label in histogram){
//  if(histogram.hasOwnProperty(label)){
//    sortedHist.push(label);
//}
//}
//console.log(h.hasOwnProperty(label));
//console.log(hs);
//var h2=Object.keys(h).sort(compare);
//console.log(h);
maxn=Math.ceil(histogram[sortedHist[Math.floor(sortedHist.length/2)]]);
console.log(maxn);

for(var i= 0; i< sortedHist.length;i++){
    var output="";
    var numLabel = sortedHist[i];
    for (var j = 0;j<histogram[numLabel];j++){
        //console.log(h2[i]+" :" +h[h2[i]]);

        //output += "*";
    }
    var st = '*';
    var numStar=(20*histogram[numLabel])/maxn;
    //console.log (histogram[numLabel]+ " : "+ numStar);
    console.log(sortedHist[i]+" :" +st.repeat(numStar));
}
