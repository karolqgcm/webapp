//submit.js

//Submit handler for contact form
function sendMessage(){

	// This will contain the URL to your firebase app
	var firebase_url = "https://kqueiroz-hw2.firebaseio.com/messages";

	//Create message
	var message = {
		'name': $("#nameid").val(),
		'phone': $("#phoneid").val(),
		'email': $("#emailid").val(),
		'message': $("#messageid").val()
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
	$("#phoneid").val('');
	$("#emailid").val('');
	$("#messageid").val('');
}
