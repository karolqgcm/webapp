/**
 * Created by kqueiroz on 3/16/16.
 */
$(function(){
    //console.log(10)
    var ref = new Firebase("https://kqueiroz-hw3.firebaseio.com/restaurant");
    //snapshot func
    var r_names=[]
    var r_data=[]
    var len;
    var clicked=0;
    var likes=[];
    ref.on("value", function(snapshot){


        var id=0;
        len = snapshot.numChildren();
        //get the name and data from firebase and makes the ul "r_list
        for(var keys in snapshot.val()){


            $("#r_list").append("<li id=\"" + "id_"+id+"\">"+snapshot.val()[keys].name+"</li>");
            r_data.push(snapshot.val()[keys]);
            id ++;
        }//end for


    })//end snapshot func
    //exercise 1
    //é o mesmo do feednd, só que:
    //1)qd clicka no nome do restaurante(li), ele carrega as informaçoes daquele restaurante(rest_target)
    //e hide os outros (usa o id definido la em cima
    //2) tem uma flag para indicar se tem algo ja carregado (clicked)
    $("ul").on("click", "li", function(event){
        if(clicked==0) {
            var rest_target = event.target.id;
            console.log(rest_target)
            //retrieve the data
            var x = rest_target.charAt(3)
            for (var i = 0; i < len; i++) {
                if (x != i) {
                    //console.log(i)
                    var not_selected = "#id_" + i;
                    $(not_selected).hide();
                }
            }
            var info = "<p>Name: " + r_data[x].name + "</p>" +
                "<p>Address: " + r_data[x].street + "</p>" +
                "<p>" + r_data[x].city + ", " + r_data[x].state + ", " + r_data[x].zip + "</p>" +
                "<p>Menu: </p>";
            var r_menu="";
            for (var i = 0; i < r_data[x].menu.length; i++) {
                console.log("menu"+r_data[x].menu.length+i)
                r_menu += "<div id=\""+"id_menu_"+i+"\"><p><h4>" + r_data[x].menu[i].name + "</h4></p>" +
                    "<p>Description: " + r_data[x].menu[i].description + "</p>" +
                    "<p>Price: " + r_data[x].menu[i].price + "</p></div>"
                likes[i]=r_data[x].menu[i].likes;

            }
            // $("#menu").append(r_menu)
            $("#rest_details").append("<div>" + info +r_menu+ "</div>")
            clicked=1;

            //exercise 2 - form
            //button
            for(var i=0;i<r_data[x].menu.length;i++) {


                var r = $('<input type="button" value="Like"/>');
                var l = ("<p id=\""+"lbl_"+i+"\" name= '#'>     "+likes[i]+"</p>")
                var pl = "#id_menu_"+i
                $(pl).append(r);
                $(pl).append(l);

            }
        }else{
            $("#rest_details").empty();
            for(var i=0; i<len;i++){
                $("#id_"+i).show();
                clicked=0;
            }
        }
    });//end click




})

$(document).ready(function() {
    $("button").click(function() {
        $("#lbl_0").html("change");
        alert("Hello world!");
    });
});