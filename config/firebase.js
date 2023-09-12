import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyBD6ZsOT1P4lPZbQ0HVYHZrPGvaPk274ds",
  authDomain: "sih-e-f67f9.firebaseapp.com",
  databaseURL: "https://sih-e-f67f9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sih-e-f67f9", 
  storageBucket: "sih-e-f67f9.appspot.com",
  messagingSenderId: "113038032158",
  appId: "1:113038032158:web:6b01cde8843a62e8841d0f",
  measurementId: "G-FWVHBTC79W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);  
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;