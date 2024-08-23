// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxdHdY_t9yVgYSTKFkdxErqnqMHLcy-FY",
  authDomain: "ecommerce-a33e8.firebaseapp.com",
  projectId: "ecommerce-a33e8",
  storageBucket: "ecommerce-a33e8.appspot.com",
  messagingSenderId: "583998168079",
  appId: "1:583998168079:web:ba33a7f51141c527ac577a",
  measurementId: "G-1Q792MEFHH"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export {auth}
export {analytics}
