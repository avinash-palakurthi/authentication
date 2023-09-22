import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAizvc7ocGP4Hem-ROerOnoAviTgAfMuaM",
  authDomain: "auth-2122.firebaseapp.com",
  projectId: "auth-2122",
  storageBucket: "auth-2122.appspot.com",
  messagingSenderId: "136691674362",
  appId: "1:136691674362:web:022c242fb10d1b6df4ed43",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
