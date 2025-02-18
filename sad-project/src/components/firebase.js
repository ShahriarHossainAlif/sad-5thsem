// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDctfIrDhyUufyhSl9MpLInW4TQuB1WKLs",
  authDomain: "tourproject-e70ce.firebaseapp.com",
  projectId: "tourproject-e70ce",
  storageBucket: "tourproject-e70ce.firebasestorage.app",
  messagingSenderId: "526686620983",
  appId: "1:526686620983:web:17d789ef26ed6477af9eb2",
  measurementId: "G-KV7JB78L6R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db= getFirestore(app);
export { app, auth, db };
