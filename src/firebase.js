import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "homie-12235.firebaseapp.com",
  projectId: "homie-12235",
  storageBucket: "homie-12235.appspot.com",
  messagingSenderId: "739903230811",
  appId: "1:739903230811:web:65e39cfafb88da9549807e",
  measurementId: "G-T1E3L1LTCV",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
