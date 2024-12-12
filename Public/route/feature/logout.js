import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";

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

window.addEventListener('load', () => {
    document.querySelector('nav').classList.add('loaded');
});

// Function to toggle overlay
document.getElementById('status').addEventListener('click', function (event) {
    event.stopPropagation(); 
    const overlay = document.getElementById('overlay');
    overlay.classList.toggle('active');
});

document.addEventListener("click", function (event) {
    const overlay = document.getElementById('overlay');
    const loginBox = document.getElementById('login-box');
    if (!loginBox.contains(event.target) && overlay.classList.contains('active')) {
        overlay.classList.remove('active');
    }
});

// Logout Button Logic
const logoutButton = document.getElementById("logoutButton");
if (logoutButton) {
    logoutButton.addEventListener("click", () => {
        signOut(auth)
            .then(() => {
                console.log("User logged out successfully");
                window.location.replace("/");
            })
            .catch((error) => {
                console.error("Error during logout:", error.message);
            });
    });
}