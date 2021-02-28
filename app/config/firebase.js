import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBQvaCte0k3uiTvHqVSTayMyOIuqUPyvks',
  authDomain: 'campus-recruitment-syste-007.firebaseapp.com',
  projectId: 'campus-recruitment-syste-007',
  storageBucket: 'campus-recruitment-syste-007.appspot.com',
  messagingSenderId: '74369028763',
  appId: '1:74369028763:web:fded24b1fff16e36b22c3e',
}

export const firebase2 = firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth
export const db = firebase.database()
export const storage = firebase.storage()
export const firestore = firebase.firestore()
