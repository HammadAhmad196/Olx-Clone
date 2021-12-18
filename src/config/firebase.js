import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA4YxB7VVbz3yQHy9RuUhSiRXpWkQNjr-s",
  authDomain: "olxstore-2c0a7.firebaseapp.com",
  databaseURL: "https://olxstore-2c0a7-default-rtdb.firebaseio.com",
  projectId: "olxstore-2c0a7",
  storageBucket: "olxstore-2c0a7.appspot.com",
  messagingSenderId: "998412919794",
  appId: "1:998412919794:web:cc1bb5cad6447c2d56016b",
  measurementId: "G-J7FLM72KQ0"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export { db, auth, storage };