// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBn_0v_O_UYfaMM-nCri4qKcWUIwmGDJyY",
  authDomain: "fb-clone-678de.firebaseapp.com",
  projectId: "fb-clone-678de",
  storageBucket: "fb-clone-678de.appspot.com",
  messagingSenderId: "282084807192",
  appId: "1:282084807192:web:af2746a7fa324cb850696d",
  measurementId: "G-TK06YZEK5V",
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
