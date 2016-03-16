/**
 * Created by kqueiroz on 3/16/16.
 */

function postMessage(){

    var firebase_url = "https://kqueiroz.firebaseio.com/forum";

    //Create message
    var message = {
        'name': $("#nameid").val(),
        'message': $("#messageid").val(),
        'createdAT': Date.now()
    };

    //Push message to Firebase (replace endpoint with yours)
    var messagesRef = new Firebase(firebase_url);
    var newMessageRef = messagesRef.push();
    newMessageRef.set(message);

    //If you want to know path
    var path = newMessageRef.toString();
    console.log(path);

    //Clear form
    clearFields();
}

function clearFields() {
    $("#nameid").val('');
    $("#messageid").val('');
}

var firebase_url = "https://kqueiroz.firebaseio.com/forum";
var messagesRef = new Firebase(firebase_url);
messagesRef.orderByChild("createdAT").limitToLast(10).on("child_added", function (snapshot) {
    var val = snapshot.val();
    $("#list").prepend($('<li> Name: ' + val.name +'</li>'))
    $("#list").prepend($('<li> Message: ' + val.message +'</li>'))
    $("#list").prepend($('<br>'))
})