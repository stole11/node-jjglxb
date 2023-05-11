import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBqDawrfG2kYu7bINcR4sFj7kpw6sceET0",
  authDomain: "woody-14266.firebaseapp.com",
  projectId: "woody-14266",
  storageBucket: "woody-14266.appspot.com",
  messagingSenderId: "572444491634",
  appId: "1:572444491634:web:60edaf4a81f25d4bf5e7eb",
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

export { firebase, db };
