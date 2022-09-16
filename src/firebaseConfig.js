
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAEwk1rxA_O-ZcUqBTswxagaBlfaYtUm2E",
  authDomain: "ecomerce-cosin-coder.firebaseapp.com",
  projectId: "ecomerce-cosin-coder",
  storageBucket: "ecomerce-cosin-coder.appspot.com",
  messagingSenderId: "856391777461",
  appId: "1:856391777461:web:97af5d82bc0ea81d9592fc"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)