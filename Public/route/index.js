console.log("LOL");

window.addEventListener('load', function() {
    document.querySelector('nav').classList.add('loaded');
});

function toggleOverlay() {
    document.getElementById("loginOverlay").classList.toggle("active");
}

const firebaseConfig = {
    apiKey: "AIzaSyBuv4V1ye9VaxOFjwjtvAk_7BoOqTUEtmQ",
    authDomain: "afterlearner.firebaseapp.com",
    projectId: "afterlearner",
    storageBucket: "afterlearner.appspot.com",
    messagingSenderId: "1016601405951",
    appId: "1:1016601405951:web:04208e737e4d48cae5dfca",
    measurementId: "G-8E6RTGLPF2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)

    firebase.signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert(`Welcome back, ${user.displayName || user.email}!`);
            window.location.replace("http://127.0.0.1:5503/Public/library.html");
            toggleOverlay();
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.error("Error during email login:", errorMessage);
            alert("Login failed: " + errorMessage);
        });
});

function googleSignIn() {
    const provider = new firebase.GoogleAuthProvider();
    firebase.signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            alert(`Hello, ${user.displayName}! You're signed in.`);
            toggleOverlay();
        })
        .catch((error) => {
            console.error("Error during Google sign-in:", error.code, error.message);
            alert("Google sign-in failed: " + error.message);
        });
}

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User signed in:", user.displayName || user.email);
    } else {
        console.log("No user signed in");
    }
});