import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

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
const storage = getStorage(app);
export default storage;
export const googleProvider = new GoogleAuthProvider();
