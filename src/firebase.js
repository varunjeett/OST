import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBcZUDGHyq6aqhMLhCEJYA2NAO5u8lxkVU",
  authDomain: "footo-editor.firebaseapp.com",
  projectId: "footo-editor",
  storageBucket: "footo-editor.appspot.com",
  messagingSenderId: "303775021835",
  appId: "1:303775021835:web:d8c3b4e49b136f5838000e",
  measurementId: "G-5HTVTDLWK2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
export default firebase;
