// Firestoreのメソッドを使って具体的なやりとりの実装

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
  setDoc,
  updateDoc,
  collectionGroup,
  Timestamp
} from "firebase/firestore"
import { firestoreDb } from "./firebase"

export const queryByCollection = async (col: string) => {
  const colRef = collection(firestoreDb, col)

  const snapshot = await getDocs(colRef)

  const docs = Array.from(snapshot.docs).map((doc) => {
    return {
      ...doc.data(),
      id: doc.id
    }
  })

  return docs
}

// export const set = async (col: string, document: Object) => {
//   await setDoc(doc(collection(firestoreDb, col)), document)
// }

export const update = async (col: string, id: string, document: Object) => {
  const docRef = doc(firestoreDb, col, id)

  return await updateDoc(docRef, document)
}

export const add = async (col: string, document: Object) => {
  const colRef = collection(firestoreDb, col)

  const docRef = await addDoc(colRef, document)

  return docRef
}

export const del = async (col: string, id: string) => {
  const docRef = doc(firestoreDb, col, id)
  return await deleteDoc(docRef)
}