import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA9CFq5Q4EzYcAtDwIRPtKcwzzY0OpBgcU",
  authDomain: "event-management-12427.firebaseapp.com",
  projectId: "event-management-12427",
  storageBucket: "event-management-12427.appspot.com",
  messagingSenderId: "739083839585",
  appId: "1:739083839585:web:05325cce98de3fb17da220",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
