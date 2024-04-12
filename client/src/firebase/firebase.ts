// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGtHH7h4BwvNBPYJvJQ3q4GYnF9ySu6Kg",
  authDomain: "learntok.firebaseapp.com",
  projectId: "learntok",
  storageBucket: "learntok.appspot.com",
  messagingSenderId: "276565064315",
  appId: "1:276565064315:web:bf9eca42ffdef56eed00de",
  measurementId: "G-F7FTTX0YH5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const DefineAnalytics = async () => {
  const t = await isSupported();

  if (t) {
    const analytics = getAnalytics(app);
  }
};
DefineAnalytics();
export const auth = getAuth();
