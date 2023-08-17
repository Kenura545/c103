// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC58qBjqIpUXuxvyiy3AKy7_rLSQmH9CXU",
    authDomain: "letsstart-cf984.firebaseapp.com",
    projectId: "letsstart-cf984",
    storageBucket: "letsstart-cf984.appspot.com",
    messagingSenderId: "220629085164",
    appId: "1:220629085164:web:7a5aee12d95c3cb2186ec9",
    measurementId: "G-19ZKX87ZG0"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}

firebase,database().ref(room_name).push ({
   name:user_name,
   message:msg,
   like:0
});



