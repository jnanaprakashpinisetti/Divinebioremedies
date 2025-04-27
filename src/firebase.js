// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBd1QRziMzc1GAj_UXV0BLxiM7V61vplTQ",
  authDomain: "divinebiorededies.firebaseapp.com",
  projectId: "divinebiorededies",
  storageBucket: "divinebiorededies.firebasestorage.app",
  messagingSenderId: "139362613133",
  appId: "1:139362613133:web:1ad883af865b4eef57afc4",
  measurementId: "G-7LDF00HGYD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);