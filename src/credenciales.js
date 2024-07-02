// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmzW3U2RcTxxzJz4KiWlDAbkjrmXwYgkw",
  authDomain: "gamefindergrupo1.firebaseapp.com",
  projectId: "gamefindergrupo1",
  storageBucket: "gamefindergrupo1.appspot.com",
  messagingSenderId: "518663339892",
  appId: "1:518663339892:web:974afb64a8eb77e80f7621"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;