// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5x1a_-r2Kuj1_wc0r0Zl8n74W-UsXOFA",
  authDomain: "shell-pass-4250e.firebaseapp.com",
  projectId: "shell-pass-4250e",
  storageBucket: "shell-pass-4250e.appspot.com",
  messagingSenderId: "359926027621",
  appId: "1:359926027621:web:0b1ed9e83d425742be3d8c",
  measurementId: "G-GM1F6KFE1W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)