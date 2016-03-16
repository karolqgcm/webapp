    /**
 * Created by kqueiroz on 2/26/16.
 */



$(function() {

    $(document).ready(function () {

        var wi = $(window).width();
        var he = $(window).height();

        $("#dialog").dialog({
            autoOpen: false,
            modal: true,
            resizable: false,
            width:wi,
            height:he,

            buttons: {
                "Farewell": function() {
                    $(this).dialog("close");
                },
                "Complain to me": function() {
                    $(this).dialog("close");
                    window.location.href = "contact.html";
                }        }

        }).css("font-size", "150%");
        $(".ui-dialog-titlebar-close").hide();
        setTimeout(function () {
            $("#dialog").dialog("open");
        }, 3000);
        setTimeout(function(){  $("#dialog").dialog("close"); }, 13000);
});
});
    /**
    $("#dialog").dialog({
        autoOpen: false,
        modal: true,
        resizable: false,
        buttons: {
            "Farewell": function() {
                $(this).dialog("close");
            },
            "Complain to me": function() {
                $(this).dialog("close");
                window.location.href = "contact.html";
            }        }

    });

    //setTimeout(function(){  $("#dialog").dialog("close"); }, 5000);
});

     **/