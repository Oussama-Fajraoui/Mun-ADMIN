import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyD9vomPbqwHl93F4PM9vo4LWqJblQoB_1E",
    authDomain: "municipality-88e63.firebaseapp.com",
    projectId: "municipality-88e63",
    storageBucket: "municipality-88e63.appspot.com",
    messagingSenderId: "934233926555",
    appId: "1:934233926555:web:1b846b5d204319526ecf3e",
    measurementId: "G-798XVN2SHD"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export {db}
