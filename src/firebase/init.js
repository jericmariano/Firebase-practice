// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_vS7PmJ1dT30QxXZFUE1VBcWQtUe_3u0",
  authDomain: "fir-practice-4e54f.firebaseapp.com",
  projectId: "fir-practice-4e54f",
  storageBucket: "fir-practice-4e54f.appspot.com",
  messagingSenderId: "67071930857",
  appId: "1:67071930857:web:820bb9cc17b1e49abe5b78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()