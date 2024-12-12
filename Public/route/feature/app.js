import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

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

function normalizePath(path) {
    return path.endsWith("/") && path !== "/" ? path.slice(0, -1) : path;
}

// Page access and user display management
function managePageAccess() {
    onAuthStateChanged(auth, (user) => {
        const currentPage = window.location.pathname;

        // Restricted pages for unauthenticated users
        const restrictedPages = [
            "/home",

            "/tgat", "/tgat1", "/tgat2", "/tgat3",
            "/tgat1-exam", "/tgat2-exam", "/tgat3-exam",

            "/tpat", "/tpat1", "/tpat2", "/tpat3", "/tpat4", "/tpat5",
            "/tpat1-exam", "/tpat2-exam", "/tpat3-exam", "/tpat4-exam", "/tpat5-exam",

            "/alevel", "/math1", "/math2", "/physics", "/chemistry", "/biology", "/social",
            "/math1-exam", "/math2-exam", "/physics-exam", "/chemistry-exam", "/biology-exam", "/social-exam"
        ];

        // Update username display
        const usernameElement = document.getElementById('username');
        if (usernameElement) {
            if (user) { //logged in
                if (currentPage === "/") {
                    window.location.replace("/home");
                }
                usernameElement.textContent = user.displayName?.split(" ")[0] || user.email;
                console.log("User signed in:", user.displayName?.split(" ")[0] || user.email);
            } 
            else { //not login
                if (restrictedPages.includes(currentPage)) {
                    window.location.replace("/");
                }
                console.log("No user signed in");
            }
        }
    });
}

// Initialize page access management
managePageAccess();