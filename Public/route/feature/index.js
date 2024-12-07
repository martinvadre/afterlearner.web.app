import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, setPersistence, inMemoryPersistence } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-storage.js";

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
export const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

window.addEventListener('load', () => {
    document.querySelector('nav').classList.add('loaded');
});

document .addEventListener('scroll', () => {
    const nav = document.querySelector('nav');

    if(window.scrollY > 0) {
        nav.classList.add('scrolled');
    }
    else {
        nav.classList.remove('scrolled')
    }
})

// Function to toggle overlay
document.getElementById('loginButton').addEventListener('click', function (event) {
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