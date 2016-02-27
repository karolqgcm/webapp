// This is supposed to work on simple.html
// in the homework 6 starter code



// Write code to remove an item on double click
// add handler to the ul
// print the item's text() and html() to the console

$(function(){
    $('#abcd').on('dblclick', 'li', function(){
        var contentPanelId = jQuery(this).attr("id");
        var dt = new Date();
        var ids = ''+'#'+contentPanelId;
        $(ids).dblclick(function(event){
            console.log($(ids).text(event.timestamp));
        });
        var textId = $(ids).text();
        var htmlId = $(ids).html();
        console.log("Id from the ul li: "+ids+'\n'+
            "Time stamp: "+ dt+'\n'+
            "li text(): "+ $(ids).text()+'\n'+
            "li html(): "+$(ids).html());
        $(ids).remove();
    });

});