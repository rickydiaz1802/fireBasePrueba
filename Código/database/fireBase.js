
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection, onSnapshot } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCovzRpERDWWvC0Gg_TjgUUYMgpcnwG8_Y",
  authDomain: "prueba1-ae241.firebaseapp.com",
  projectId: "prueba1-ae241",
  storageBucket: "prueba1-ae241.appspot.com", 
  messagingSenderId: "101984702361",
  appId: "1:101984702361:web:492ec7cac598e572decd08",
  measurementId: "G-Y553XBVSHJ"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default {
  app,
  db,
  addDoc,
  collection,
  onSnapshot
}

;