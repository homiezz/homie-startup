// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "homie-12235.firebaseapp.com",
  projectId: "homie-12235",
  storageBucket: "homie-12235.appspot.com",
  messagingSenderId: "739903230811",
  appId: "1:739903230811:web:65e39cfafb88da9549807e",
  measurementId: "G-T1E3L1LTCV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
