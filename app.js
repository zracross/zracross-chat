import { auth } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const signupBtn = document.getElementById("signup");
const loginBtn = document.getElementById("login");

signupBtn.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert("Account created successfully!");
        })
        .catch(error => {
            alert(error.message);
        });
});

loginBtn.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert("Login Successful!");
            document.getElementById("auth").style.display = "none";
            document.getElementById("chat").style.display = "block";
        })
        .catch(error => {
            alert(error.message);
        });
});
