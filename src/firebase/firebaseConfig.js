import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxiWscskkda-sekPYH2yOvIz2eOHmWag0",
  authDomain: "ecommerce-coderhouse-react.firebaseapp.com",
  projectId: "ecommerce-coderhouse-react",
  storageBucket: "ecommerce-coderhouse-react.appspot.com",
  messagingSenderId: "482781319352",
  appId: "1:482781319352:web:89b670ccee3ac955a9e44d",
  measurementId: "G-LEBCWBFNL0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
