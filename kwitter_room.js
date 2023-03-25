
var firebaseConfig = {
      apiKey: "AIzaSyBQ4MFt3bG1BJIMpZ36gTLvdI8jlCAXpcM",
      authDomain: "kwitter-1af68.firebaseapp.com",
      databaseURL: "https://kwitter-1af68-default-rtdb.firebaseio.com",
      projectId: "kwitter-1af68",
      storageBucket: "kwitter-1af68.appspot.com",
      messagingSenderId: "977569910190",
      appId: "1:977569910190:web:d437949139d30b7fb04c3f"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";



    function addRoom()
    {
          room_name = document.getElementById("room_name").value;
    
          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });
    
          localStorage.setItem("room_name", room_name);
          window.location = "Let's chat_page.html";
    }
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "Let's chat_page.html";
}