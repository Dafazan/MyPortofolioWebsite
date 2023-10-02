// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvughbh42MWQtSAJZt5OXNRpbN4vDbSH4",
  authDomain: "dafazan-portofolio.firebaseapp.com",
  projectId: "dafazan-portofolio",
  storageBucket: "dafazan-portofolio.appspot.com",
  messagingSenderId: "976059719553",
  appId: "1:976059719553:web:8d05675757205ae8819280"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);