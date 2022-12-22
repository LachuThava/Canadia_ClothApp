// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCX-PWremF5pIeS3IpNtLI8GuxVW8pN5tg",
  authDomain: "cloth-shop-7dd19.firebaseapp.com",
  projectId: "cloth-shop-7dd19",
  storageBucket: "cloth-shop-7dd19.appspot.com",
  messagingSenderId: "82978736710",
  appId: "1:82978736710:web:f4d74a6d4fbbd37fc91847"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export  {db,auth,app};