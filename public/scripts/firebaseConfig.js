// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js"
import { getStorage } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-storage.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
  
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBU0GVkThuR6wWgw0bMmUmWEQS_A6DVos4",
    authDomain: "viver-feliz.firebaseapp.com",
    projectId: "viver-feliz",
    storageBucket: "viver-feliz.appspot.com",
    messagingSenderId: "399688504351",
    appId: "1:399688504351:web:b52ec197db9287fa45312a",
    measurementId: "G-MP20FXRLFK"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);