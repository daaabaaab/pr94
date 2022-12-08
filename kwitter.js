function login()
{
var name=document.getElementById("inp").value;
localStorage.setItem("inp",name);    
window.location="kwitter_room.html";
}

var firebaseConfig = {
    apiKey: "AIzaSyCMnvF1d-yqNDrwHch1KEdzSS-51HOZqKg",
    authDomain: "proj94-9934d.firebaseapp.com",
    databaseURL: "https://proj94-9934d-default-rtdb.firebaseio.com",
    projectId: "proj94-9934d",
    storageBucket: "proj94-9934d.appspot.com",
    messagingSenderId: "390847937536",
    appId: "1:390847937536:web:ac7b75bcaf7868e14bace5"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 function addRoom()
 {
 var o=document.getElementById("k").value;
firebase.database().ref("/").child(o).update({
purpose:"test"    
}); 
 }