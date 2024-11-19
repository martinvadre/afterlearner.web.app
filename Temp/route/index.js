// Import Firebase modules
// const firebase = require("firebase/app")
// const { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, onAuthStateChanged } = require("firebase/auth")
// const { getFirestore } = reqire("firebase/firestore");
// const { getStorage } = require("firebase/storage");

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, setPersistence, inMemoryPersistence } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-storage.js";

window.addEventListener('load', () => {
    document.querySelector('nav').classList.add('loaded');
});

// Function to toggle overlay
function toggleOverlay() {
    const overlay = document.getElementById('loginOverlay');
    overlay.classList.toggle('active');
}

document.getElementById('loginButton').addEventListener('click', toggleOverlay);

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
const db = getFirestore(app);
const storage = getStorage(app);

setPersistence(auth, inMemoryPersistence)
.then(() => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
})
.catch((err) => {
    return console.error(err);
})

// Email/password sign-in
document.getElementById("signInForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            // alert(`Welcome back, ${user.displayName || user.email}!`);
            window.location.replace("/home");
            toggleOverlay();
        })
        .catch((error) => {
            console.error("Error during email login:", error.message);
            alert("Login failed: " + error.message);
        });
});

// Google sign-in
document.getElementById("googleSignInButton").addEventListener("click", googleSignIn);
function googleSignIn() {
    const provider = new GoogleAuthProvider();
    let user = null;

    signInWithPopup(auth, provider)
        .then((result) => {
            user = result.user;
            // alert(`Hello, ${user.displayName}! You're signed in.`);
            toggleOverlay();
            window.location.replace("/home");
        })
        .catch((error) => {
            console.error("Error during Google sign-in:", error.message);
            alert("Google sign-in failed: " + error.message);
        });
};