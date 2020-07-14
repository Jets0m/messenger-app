import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDUfB9EaIwvVIyKFFAMhOY1ljZWeQ4XSMc",
  authDomain: "messenger-34452.firebaseapp.com",
  databaseURL: "https://messenger-34452.firebaseio.com",
  projectId: "messenger-34452",
  storageBucket: "messenger-34452.appspot.com",
  messagingSenderId: "948849277957",
  appId: "1:948849277957:web:eb7087509a6e605c97306c",
});

const db = firebaseApp.firestore();

export default db;
