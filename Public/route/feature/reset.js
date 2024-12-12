import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBuv4V1ye9VaxOFjwjtvAk_7BoOqTUEtmQ",
    authDomain: "afterlearner.firebaseapp.com",
    projectId: "afterlearner",
    storageBucket: "afterlearner.appspot.com",
    messagingSenderId: "1016601405951",
    appId: "1:1016601405951:web:04208e737e4d48cae5dfca",
    measurementId: "G-8E6RTGLPF2"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

  
// DOM elements
const form = document.getElementById("resetPasswordForm");
const message = document.getElementById("message");
  
// Handle form submission
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;

    // Send password reset email
    sendPasswordResetEmail(auth, email)
        .then(() => {
            alert("Password reset email sent! Check your inbox.");
            window.location.replace("/signin")
        })
        .catch((error) => {
            alert(`Error: ${error.message}`);
        });
});