// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4lRCWyuTXbNDWSdP2qIM7MwNnTW3QO7w",
  authDomain: "frenzland-18ce0.firebaseapp.com",
  projectId: "frenzland-18ce0",
  storageBucket: "frenzland-18ce0.appspot.com",
  messagingSenderId: "792746996825",
  appId: "1:792746996825:web:14368d17c89d0d68a7ed48",
  measurementId: "G-EXR2CJ7MRK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);