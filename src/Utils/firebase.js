// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOqLysYjHetEZspnfwQN01H94LeovS4uQ",
  authDomain: "filmfusiongpt.firebaseapp.com",
  projectId: "filmfusiongpt",
  storageBucket: "filmfusiongpt.appspot.com",
  messagingSenderId: "695412049657",
  appId: "1:695412049657:web:d9946816fd5a4edbb3c428",
  measurementId: "G-JZ41E2XN11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();