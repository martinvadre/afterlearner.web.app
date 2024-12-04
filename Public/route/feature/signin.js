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
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Set persistence
setPersistence(auth, inMemoryPersistence)
    .catch((err) => {
        console.error("Persistence error:", err);
    });

// Email/password sign-in
document.getElementById("signInForm")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    signInWithEmailAndPassword(auth, email, password)
    try {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        console.log(userCredential)
        console.log(auth.currentUser)

        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            const user = auth.currentUser;
            document.cookie = `${user}`
            console.log(document.cookie);
            console.log('User created: ');
            window.location.replace("/home")
        })
    } catch (error) {
        console.error("Error during email login:", error.message);
        alert("Login failed: " + error.message);
    }
});

// Google sign-in
document.getElementById("googleSignInButton").addEventListener("click", googleSignIn);
function googleSignIn() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            // Additional user info can be retrieved here
            window.location.replace("/home");
        })
        .catch((error) => {
            console.error("Error during Google sign-in:", error.message);
            alert("Google sign-in failed: " + error.message);
        });
}
