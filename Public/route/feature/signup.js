import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

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
        // User is signed in
        console.log("User signed in:", user.displayName || user.email);
        window.location.replace("/home");
    } else {
        // No user is signed in
        console.log("No user signed in");
    }
});

// Email/password sign-up
document.getElementById('signUpForm')?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("User account created:", userCredential.user.email);

        // Update display name
        await updateProfile(auth.currentUser, { displayName: name });
        console.log("User profile updated with name:", name);

        window.location.replace("/home");
    } catch (error) {
        console.error("Error during sign-up:", error.message);
        alert("Sign-up failed: " + error.message);
    }
});

// Google sign-in
document.getElementById("googleSignInButton").addEventListener("click", () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log("Google user signed in:", user.email);
        })
        .catch((error) => {
            console.error("Error during Google sign-in:", error.message);
            alert("Google sign-in failed: " + error.message);
        });
});
