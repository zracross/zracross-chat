// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Your Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAloSW7mSLI11BWZ0wW0huXqUWHFFFwITQ",
  authDomain: "zracross-chat.firebaseapp.com",
  projectId: "zracross-chat",
  storageBucket: "zracross-chat.firebasestorage.app",
  messagingSenderId: "316090066115",
  appId: "1:316090066115:web:c66bc8fc89fda0cdf8ee76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
