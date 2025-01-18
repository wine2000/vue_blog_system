
import firebase from "firebase/app";
import "firebase/firestore"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD1lO_8ARdZ5QOV3MY_1DUvnXQ_nXkb608",
    authDomain: "vue-blog-system-abf9a.firebaseapp.com",
    projectId: "vue-blog-system-abf9a",
    storageBucket: "vue-blog-system-abf9a.firebasestorage.app",
    messagingSenderId: "620849269987",
    appId: "1:620849269987:web:1c02f2e18446bd4da0c9d6",
    measurementId: "G-9D5Z21TW06"
  };
// init firebase
firebase.initializeApp(firebaseConfig)
// database setup
let db=firebase.firestore();
let timestamp=firebase.firestore.FieldValue.serverTimestamp;
export {db,timestamp};