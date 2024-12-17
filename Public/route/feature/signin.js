import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

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

// Auth state change listener
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User signed in:", user.displayName || user.email);
        window.location.replace("/home");
    } 
    else {
        console.log("No user signed in");
    }
});

// Google sign-in
document.getElementById("googleSignInButton").addEventListener("click", () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log("Google user signed in:", user.email);

            window.location.replace("/home");
        })
        .catch((error) => {
            console.error("Error during Google sign-in:", error.message);
            alert("Google sign-in failed: " + error.message);
        });
});

// Email/password sign-in
document.getElementById("signInForm")?.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("User signed in:", userCredential.user.email);

        window.location.replace("/home");
    } 
    catch (error) {
        console.error("Error during email login:", error.message);
        alert("Login failed: " + error.message);
    }
});
