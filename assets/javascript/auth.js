// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDDLf6v9gPxeQsmHLN5NCfCJl1MymsTorQ",
  authDomain: "clothing-generator.firebaseapp.com",
  databaseURL: "https://clothing-generator.firebaseio.com",
  projectId: "clothing-generator",
  storageBucket: "clothing-generator.appspot.com",
  messagingSenderId: "4788291125",
  appId: "1:4788291125:web:4f7ef8d32b277d7b27137c"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

$(document).ready(function() {

  // Sign Up
    $("#signup-submit").on('click', function() {
      event.preventDefault();
      signup();
    })

    function signup() {
      var name = $("#signup-name").val();
      var email = $("#signup-email").val();
      var password = $("#signup-password").val();

      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("Error: " + errorMessage);
        // ...
      });
    }


    // Login
    $("#login-submit").on('click', function() {
      event.preventDefault();
      login();
    })

    function login() {
      var email = $("#login-email").val();
      var password = $("#login-password").val();

      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("Error: " + errorMessage);
        // ...
      });
    }

    // Logout 
    
    
    

    // END of jQuery
    })