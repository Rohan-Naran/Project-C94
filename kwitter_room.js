var firebaseConfig = {
    apiKey: "AIzaSyA7leZZG3Nh-850PY9zluweXC8geOxZhj0",
    authDomain: "let-schat-f111b.firebaseapp.com",
    projectId: "let-schat-f111b",
    storageBucket: "let-schat-f111b.appspot.com",
    messagingSenderId: "179048546579",
    appId: "1:179048546579:web:bff7701404987d2b8adae6",
    measurementId: "G-S3Y13GXY81"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  username = localStorage.getItem("user");
  document.getElementById("h3user_name").innerHTML = "Welcome, " + username + "!";

  