    /**
 * Created by kqueiroz on 2/26/16.
 */
$(function() {
    $("#dialog").dialog({
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
    setTimeout(function(){  $("#dialog").dialog("close"); }, 5000);
});