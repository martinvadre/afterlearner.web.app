import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, setPersistence, inMemoryPersistence, updateProfile } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

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

// Email/password sign-up
document.getElementById('signUpForm').addEventListener('submit', async (event) => {
    console.log(`sign up working`);
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value; // Capture the password

    try {
        // Create user in Firebase Authentication
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

        // Store user data in Firestore
        // await setDoc(doc(db, "users", user.uid), {
        //     name: name,
        //     email: email,
        //     createdAt: new Date()
        // });
    } catch (error) {
        console.error('Error during sign-up:', error.message);
        alert('Error creating user: ' + error.message);
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

// Set persistence (optional, but helps with sessions)
/*
setPersistence(auth, inMemoryPersistence)
    .catch((err) => {
        console.error("Persistence error:", err);
    });
*/