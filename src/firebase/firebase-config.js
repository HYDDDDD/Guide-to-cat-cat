import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyArANnq2yKd-CEFpx7NdtIwWEKUS6eniHo",
  authDomain: "guide--cat.firebaseapp.com",
  projectId: "guide--cat",
  storageBucket: "guide--cat.appspot.com",
  messagingSenderId: "275846704772",
  appId: "1:275846704772:web:ecc931305e93bff787dcd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);