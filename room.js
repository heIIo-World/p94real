const firebaseConfig = {
  apiKey: "AIzaSyDhvi_WciTGneTvO1TGJPNslYRD4vrXBA4",
  authDomain: "kwitterproject-947ed.firebaseapp.com",
    databaseURL: "kwitterproject-947ed-default-rtdb.firebaseio.com",
  projectId: "kwitterproject-947ed",
  storageBucket: "kwitterproject-947ed.appspot.com",
  messagingSenderId: "733326501225",
  appId: "1:733326501225:web:1ad146542e0b4e15ff89f8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function logout() {
  window.location = "index.html"
}

window.onload = function() {
    
 username = localStorage.getItem("username");
    
}





function addRoom() {
   localStorage.setItem("enterroomname", enterroomname);
    console.log(enterroomname);
    
    window.location = "kwitter_page.html"
}

function getData() {
firebase.database().ref("/").on('value',

function(snapshot){

    document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
console.log(Room_names);
//Start code

//End code
});});

}
getData();
