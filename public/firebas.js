// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWbwj7O9OXjARjtKstWifewS8M9W6WOmU",
  authDomain: "shop-clone-b0817.firebaseapp.com",
  projectId: "shop-clone-b0817",
  storageBucket: "shop-clone-b0817.appspot.com",
  messagingSenderId: "13470703094",
  appId: "1:13470703094:web:6f0e4c8febfac78e557bd7",
  measurementId: "G-JS1FHBQ7YS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);