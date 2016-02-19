/**
 * Created by jesus on 2/12/16.
 */
"use strict";
/* replace yourUsername, yourKey and yourToken with those items
   after you sign up in plotly and obtain a stream token */

var APP = (function() {
    var plotly = require('plotly')('kqueiroz', 'm59sq7vsn6');
    var data = [{x:[], y:[], stream:{token:'344eczd02k', maxpoints:366}}];
    var graphOptions = {fileopt : "overwrite", filename : "exampskdfkle"};

    plotly.plot(data,graphOptions,function() {
        var stream = plotly.stream('344eczd02k', function (err,res) {
            console.log(err,res);
            clearInterval(loop);
        });
        var i=0;
        var loop = setInterval(function () {
            var arg = i/180*Math.PI;
            var s = Math.sin(arg);
            var streamObject = JSON.stringify({ x : arg, y : s });
            stream.write(streamObject+'\n');
            i++;
        }, 100);
    });
}());