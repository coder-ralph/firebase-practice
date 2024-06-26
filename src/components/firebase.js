// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3yw75XASl7WruTWOecbb0TFBoFMv3PFw",
  authDomain: "login-app-8144a.firebaseapp.com",
  projectId: "login-app-8144a",
  storageBucket: "login-app-8144a.appspot.com",
  messagingSenderId: "48291955043",
  appId: "1:48291955043:web:0af131a9448a4577d75356"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;