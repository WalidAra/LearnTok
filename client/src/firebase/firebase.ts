// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY as string,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN as string,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET as string,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID as string,
  appId: process.env.NEXT_PUBLIC_APP_ID as string,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID as string,
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
export const storage = getStorage(app);

