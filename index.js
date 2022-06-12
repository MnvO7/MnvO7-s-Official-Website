




const firebaseConfig = {
    apiKey: "AIzaSyDxcHOUuONtYTl8MtOoBVcJGIWA1qzui70",
    authDomain: "firechatapp-dcbd4.firebaseapp.com",
    databaseURL: "https://firechatapp-dcbd4-default-rtdb.firebaseio.com",
    projectId: "firechatapp-dcbd4",
    storageBucket: "firechatapp-dcbd4.appspot.com",
    messagingSenderId: "643639819221",
    appId: "1:643639819221:web:ae13f5005e5e4f23a19b5c"
  };
  

  firebase.initializeApp(firebaseConfig);
  

  const db = firebase.database();
  
  const username = prompt("Please Enter Your Username");


  document.getElementById("message-form").addEventListener("submit", sendMessage);
  
 


function sendMessage(e){
  e.preventDefault();
    const timestamp = Date.now();
    const messageInput = document.getElementById("message-input");
    const message = messageInput.value;
  

    messageInput.value = "";

  

  
 
    document
      .getElementById("messages")
      .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  
    db.ref("messages/" + timestamp).set({
      username,
      message,
    });
  }

  
  const fetchChat = db.ref("messages/");
  
  fetchChat.on("child_added", function (snapshot) {
    const messages = snapshot.val();
    const message = `<li class=${
      username === messages.username ? "sent" : "receive"
    }><span>${messages.username}: </span>${messages.message}</li>`;
   
    document.getElementById("messages").innerHTML += message;
  });

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
