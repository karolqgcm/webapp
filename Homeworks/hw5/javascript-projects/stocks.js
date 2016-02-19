"use strict";

 var markit = require('./node-markitondemand');

 // Enter your Plot.ly username and password below
var plotly = require('plotly')('kqueiroz', 'm59sq7vsn6');
var data = [{x:[], y:[], stream:{token:'d133t0tui2', maxpoints:366}}];
var graphOptions = {fileopt : "overwrite", filename : "Stock Prices"};

markit.getQuote('AAPL', function(err, stock) {
    plotly.plot(data,graphOptions,function() {
        var stream = plotly.stream('d133t0tui2', function (err,res) {
            console.log(err,res);
            clearInterval(loop);
        });
        var i=0;
        var loop = setInterval(function () {
            var s = stock.LastPrice;
            console.log("Updated stock value: "+ s);

            var streamObject = JSON.stringify({ x : i, y : s });
            stream.write(streamObject+'\n');
            i++;
        }, 10000);
    });
});


plotly.plot()