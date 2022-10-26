// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQepckow8W5JpRGu-4OlMcElLu1DeRG4k",
  authDomain: "fir-tutorial-bc020.firebaseapp.com",
  projectId: "fir-tutorial-bc020",
  storageBucket: "fir-tutorial-bc020.appspot.com",
  messagingSenderId: "38531650488",
  appId: "1:38531650488:web:c088a0a4db10ca0ed7354d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();