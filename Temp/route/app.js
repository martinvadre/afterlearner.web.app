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

// // Set persistence
// setPersistence(auth, inMemoryPersistence)
//     .catch((err) => {
//         console.error("Persistence error:", err);
//     });

// // Handle redirect result
// getRedirectResult(auth)
//     .then((result) => {
//         if (result) {
//             window.location.replace("/home");
//         }
//     })
//     .catch((error) => {
//         console.error("Redirect result error:", error.message);
//     });

// // Email/password sign-in
// document.getElementById("signInForm")?.addEventListener("submit", async (event) => {
//     event.preventDefault();
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
    
//     signInWithEmailAndPassword(auth, email, password)
//     try {
//         const email = document.getElementById("email").value;
//         const password = document.getElementById("password").value;
        
//         const userCredential = await signInWithEmailAndPassword(auth, email, password);
//         window.location.replace("/home");
//     } catch (error) {
//         console.error("Error during email login:", error.message);
//         alert("Login failed: " + error.message);
//     }
// });

// // Google sign-in
// document.getElementById("googleSignInButton")?.addEventListener("click", googleSignIn);
// async function googleSignIn() {
//     try {
//         const provider = new GoogleAuthProvider();
//         await signInWithRedirect(auth, provider);
//     } catch (error) {
//         console.error("Error during Google sign-in:", error.message);
//         alert("Google sign-in failed: " + error.message);
//     }

// };

// Page access and user display management
function managePageAccess() {
    onAuthStateChanged(auth, (user) => {
        const currentPage = window.location.pathname;
        
        // Handle page access
        // if (!user && currentPage !== '/') {
        //     window.location.replace('/');
        // }
        // else if (user && currentPage === '/') {
        //     window.location.replace('/home');
        // }
        
        // Update username display
        const usernameElement = document.getElementById('username');
        if (usernameElement) {
            if (user) {
                usernameElement.textContent = user.displayName || user.email || "User";
                console.log("User signed in:", user.displayName || user.email);
            } else {
                usernameElement.textContent = "Pawarit";
                console.log("No user signed in");
            }
        }
    });
}

// Initialize page access management
managePageAccess();