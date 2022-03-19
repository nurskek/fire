const firebaseConfig = {
    apiKey: "AIzaSyDq9uSoJ7ttIKR306ZPrsCtw6xfKblxHHE",
    authDomain: "nursunist.firebaseapp.com",
    projectId: "nursunist",
    storageBucket: "nursunist.appspot.com",
    messagingSenderId: "916692165741",
    appId: "1:916692165741:web:5fc07835214b4590510b64",
    measurementId: "G-M9XMWQJ1FS"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();
  var auth = firebase.auth();

  const form = document.querySelector("div");
  const but = document.querySelector("#hi");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");

//    async 
async function signUp() {
      const em = email.value;
      const pass = password.value;

//   await 
  await auth.createUserWithEmailAndPassword(em, pass)
  .then(() => {
    // Signed in 
    console.log("success");
    // ...
  })
  .catch((error) => {
    var errorMessage = error.message;
    console.log(errorMessage);
    // ..
  });
  }

  but.addEventListener('click', signUp, (email, password) => {
    email.textContent = '';
    password.textContent = '';
  });

  
