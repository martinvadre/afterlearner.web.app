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

// Email/password sign-up
const admin = require('firebase-admin');

// Initialize Firebase Admin
admin.initializeApp({
    credential: admin.credential.applicationDefault(),
});

const dbapi = admin.firestore();

exports.handler = async (event) => {
    const body = JSON.parse(event.body);
    const { name, email, password } = body;

    try {
        // Create user with Firebase Authentication
        const userRecord = await admin.auth().createUser({
            email: email,
            password: password,
            displayName: name,
        });

        // Store user data in Firestore
        await dbapi.collection('users').doc(userRecord.uid).set({
            name: name,
            email: email,
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
        });

        return {
            statusCode: 201,
            body: JSON.stringify({ message: 'User created successfully', uid: userRecord.uid }),
        };
    } catch (error) {
        console.error('Error creating user:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};

// Email/password sign in
createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
    const user = userCredential.user;
    // ...
})
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
});


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
        
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        window.location.replace("/home");
    } catch (error) {
        console.error("Error during email login:", error.message);
        alert("Login failed: " + error.message);
    }
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
            window.location.replace("/home", "_blank");
        })
        .catch((error) => {
            console.error("Error during Google sign-in:", error.message);
            alert("Google sign-in failed: " + error.message);
        });

};