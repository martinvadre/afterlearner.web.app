import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithRedirect,getRedirectResult,signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, setPersistence, inMemoryPersistence } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
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
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Page access and user display management
function managePageAccess() {
    onAuthStateChanged(auth, (user) => {
        const currentPage = window.location.pathname;

        // Update username display
        const usernameElement = document.getElementById('username');
        if (usernameElement) {
            if (user) {
                if (currentPage !== "/home") {
                    window.location.replace("/home");
                    console.log("Redirecting to home page");
                }
        
                usernameElement.textContent = user.displayName?.split(" ")[0] || user.email;
                console.log("User signed in:", user.displayName?.split(" ")[0] || user.email);
            } 
            else {
                if (currentPage !== "/") {
                    window.location.replace("/");
                    console.log("Redirecting to Afterlearner");
                }
                console.log("No user signed in");
            }
        }
    });
}

// Initialize page access management
managePageAccess();