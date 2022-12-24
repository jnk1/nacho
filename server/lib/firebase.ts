// Firebase,Firestoreの初期化

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAsVlkZk8tculWnAZSh2qvRMcahjk42BWc",
  authDomain: "nacho-8639.firebaseapp.com",
  projectId: "nacho-8639",
  storageBucket: "nacho-8639.appspot.com",
  messagingSenderId: "751724744526",
  appId: "1:751724744526:web:a3ec5a3a07794a3c22981f"
}

const firebaseApp = initializeApp(firebaseConfig)

export const firestoreDb = getFirestore(firebaseApp)