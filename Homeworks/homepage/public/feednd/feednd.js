/**
 * Created by kqueiroz on 3/16/16.
 */
$(function(){

    var ref = new Firebase("https://kqueiroz-hw3.firebaseio.com/restaurant");
    ref.on("value", function(snapshot) {
        var id;
        var len = 0;
        var clicked=0;
        for (var o in snapshot.val()) {
            len++;
        }
        // alert(len);

        var arr = new Array(len);
        var arr_ids = new Array(len);

        $("#"+id).empty();
        $("#accordion").empty();
        for(j = 0;j<len-1;j++){
            arr[j] = snapshot.val()[Object.keys(snapshot.val())[j]];
            var id = "id_"+j;

            arr_ids[j] = id;
            var add_new = "<li class = \"accordion-toggle\">"+arr[j].name+"</li>";
            $("#accordion").append(add_new);
            add_new = "<div id = \""+ id + "\" class = \"accordion-content\"></div>";
            $("#accordion").append(add_new);
            var rest = arr[j];
            var add_info = "<p>City: "+rest[Object.keys(rest)[0]]+"</p>";
            $("#"+id).append(add_info);


            var add_info = "<p>Phone: "+rest[Object.keys(rest)[5]]+"</p>";
            $("#"+id).append(add_info);

            var add_info = "<p>Site: "+rest[Object.keys(rest)[6]]+"</p>";
            $("#"+id).append(add_info);

            var add_info = "<p>State: "+rest[Object.keys(rest)[7]]+"</p>";
            $("#"+id).append(add_info);

            var add_info = "<p>Street: "+rest[Object.keys(rest)[8]]+"</p>";
            $("#"+id).append(add_info);

            var add_info = "<p>Zip: "+rest[Object.keys(rest)[9]]+"</p>";
            $("#"+id).append(add_info);

            $("#"+id).append("<h2>What would you like to eat?</h2>");
            var items_ob = rest[Object.keys(rest)[3]];
            var k;
            var div_id;
            var new_div;
            var like;
            var items;
            for(k=0;k<6;k++){
                div_id = ""+id+""+k;
                new_div = "<div id = \""+ div_id + "\" class = \"plates\"></div>";
                aux_id = "aux"+div_id;
                like = "<img class=\"megusta\" id = \""+ aux_id + "\"  src=\"megusta.gif\">";
                $("#"+id).append(new_div);

                $("#"+div_id).append("<div id=></div>");
                items = items_ob[Object.keys(items_ob)[k]];

                add_info = "<p><b>Name:</b>  "+items.name+"</p>"
                $("#"+div_id).append(add_info);

                add_info = "<p><b>Description:</b>"+items.description+"</b></p>"
                $("#"+div_id).append(add_info);


                add_info = "<p><b>Price:</b>  "+items.price+"</p>"
                $("#"+div_id).append(add_info);
                add_info = "<p><b>Likes:</b>  "+items.likes+"</p>"
                $("#"+div_id).append(add_info);
                $("#"+div_id).append(like);

            }

            $("#"+id).append(new_div);
            $("#"+id).append("<h2>Leave us a Comment!!</h2>");

            var form = "<form ><p class =\"form_design\">First name: </p>";
            form+=" <input type=\"text\" name=\"firstname\" id=\"nameid"+j+"\" required placeholder=\"Your Name\"></br></br>";
            form+="<textarea cols = \"100\" rows=\"5\" id = \"text_area"+j+"\" name=\"comment\" form\"contactform\" >Your message =^.^=</textarea></b></b>";
            form+="</br><input id = \""+j+"\" class = \"submit_comment\" type = \"submit\" value=\"Submit\" ></form></br></br>";
            $("#"+id).append(form);

            var str = arr[j].name;
            str = str.toLowerCase();
            var k,str2 = "";
            for(k = 0;k<str.length;k++){
                if(str.charAt(k) === ' ')str2+="-";
                else if((str.charAt(k) >= 'a' && str.charAt(k) <= 'z')|| (str.charAt(k) >= 'A' && str.charAt(k) <= 'Z')||((str.charAt(k) >= '0' && str.charAt(k) <= '9')))str2 = str2+""+str[k];
            }

            var rest = arr[j];
            var items_ob = rest[Object.keys(rest)[10]];
            var read_len = 0;
            for( var key in items_ob) {
                if( items_ob.hasOwnProperty(key) ) {
                    ++read_len;
                }
            }
            for(k = 0;k<read_len;k++){
                var items = items_ob[Object.keys(items_ob)[k]];
                var comentario = "<p>"+items.name+" :"+items.description+"</p>";
                $("#"+id).append(comentario);
            }


        }
        $(".submit_comment").click(function(){
            var id_submit = parseInt(event.target.id);

            var name = $("#"+"nameid"+id_submit).val();
            var text = $("#"+"text_area"+id_submit).val();
            if(name != "" && text!="Your message =^.^="){
                var str = arr[id_submit].name;
                str = str.toLowerCase();
                var k,str2 = "";
                for(k = 0;k<str.length;k++){
                    if(str.charAt(k) === ' ')str2+="-";
                    else if((str.charAt(k) >= 'a' && str.charAt(k) <= 'z')|| (str.charAt(k) >= 'A' && str.charAt(k) <= 'Z')||((str.charAt(k) >= '0' && str.charAt(k) <= '9')))str2 = str2+""+str[k];
                }

                var ref_usr = ref.child(str2).child("zzcomentarios");
                console.log(ref_usr);
                alert(ref_usr);
                var newPostRef = ref_usr.push();
                //var newPostRef2 = Ref2.push();
                newPostRef.set({
                    "name": name,
                    "description": text
                });

            }


        });
        $(".megusta").click(function() {

            var s = event.target.id;
            var p = s.charAt(s.length-1);
            var r = s.charAt(s.length-2);
            var str = arr[r].name;
            str = str.toLowerCase();
            var likes_menu,str2 = "";
            for(k = 0;k<str.length;k++){
                if(str.charAt(k) === ' ')str2+="-";
                else if((str.charAt(k) >= 'a' && str.charAt(k) <= 'z')|| (str.charAt(k) >= 'A' && str.charAt(k) <= 'Z')||((str.charAt(k) >= '0' && str.charAt(k) <= '9')))str2 = str2+""+str[k];
            }
            var ref_usr = ref.child(str2).child("menu").child(p);
            var rest = arr[r];
            var items_ob = rest[Object.keys(rest)[3]];
            var items = items_ob[Object.keys(items_ob)[p]];
            likes_menu = items.likes+1;
            likes_menu = parseInt(likes_menu);
            ref_usr.update({
                "likes": likes_menu
            });

        });
        $('#accordion').find('.accordion-toggle').click(function(){
            $(this).next().slideToggle('fast');
            $(".accordion-content").not($(this).next()).slideUp('fast');

        });
    });
});
