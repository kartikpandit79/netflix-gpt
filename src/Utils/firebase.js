// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoSsqWtTkjIbm_-5W8e9sUTfeBVDJhjIw",
  authDomain: "netflix-gpt-3e82d.firebaseapp.com",
  projectId: "netflix-gpt-3e82d",
  storageBucket: "netflix-gpt-3e82d.appspot.com",
  messagingSenderId: "492557253240",
  appId: "1:492557253240:web:a99088d1dee0fc734ecb8d",
  measurementId: "G-HHJ41N6J3L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()