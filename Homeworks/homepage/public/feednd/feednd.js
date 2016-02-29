/**
 * Created by kqueiroz on 2/26/16.
 */

var ref = new Firebase("https://kqueiroz-hw3.firebaseio.com/restaurants");

ref.on("value", function(snapshot) {
    for( var keys in snapshot.val()){
        var $li = $("<li>"+snapshot.val()[keys].name+"</li>")
        $("ul").append($li)
        $li.data(snapshot.val()[keys])
        //$("#"+snapshot.val()[keys].name).data(snapshot.val()[keys])
        console.log($li.data())
    }


}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});

var detail_open = function (event) {
    var data_item = $(event.target).data()
    console.log(data_item)
    var $section = $("<section></section>")
    $section.append($("<h3>"+data_item.name+"</h3>"))
    $section.append($("<p>"+data_item.street+"</p>"))
    $section.append($("<p>"+data_item.city + ", "+ data_item.state+" "+ data_item.zip+"</p>"))
    $section.append($("<a href = "+data_item.site+" >"+data_item.site+"</a>"))
    var $list = $section.append($("<ol></ol>"))
    for(var i = 0; i<data_item.menu.length;i++){
        $list.append($("<li class = 'item'>"+data_item.menu[i].name+"</li>"))
        $list.append($("<p class = 'item'>"+data_item.menu[i].price+"</p>"))
        $list.append($("<p class = 'item'>"+data_item.menu[i].description+"</p>"))
    }

    $section.insertAfter(event.target)
    $("ul").on("click", "li", detail_open)
    $("ul").on("dblclick", "section",detail_close)
}

var detail_close = function (event) {
    $("section").html("")
    $("ul").on("dblclick", "section",detail_close)
    $("ul").on("click", "li", detail_open)
}

$("ul").on("click", "li", detail_open)