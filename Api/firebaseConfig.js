// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyABHeVhkLZ0b54Ke9rhP_5bVph4nrHuebg",
    authDomain: "inventariocampus.firebaseapp.com",
    projectId: "inventariocampus",
    storageBucket: "inventariocampus.appspot.com",
    messagingSenderId: "564531805783",
    appId: "1:564531805783:web:e560138bdb3aff67f32d12",
    measurementId: "G-Y20QVVDSPZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = firebase.firestore();

