import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyASdguljdKf4QdgdpxXtwvRsoCwAYM0QFg",
  authDomain: "chat-web-41a2c.firebaseapp.com",
  projectId: "chat-web-41a2c",
  storageBucket: "chat-web-41a2c.appspot.com",
  messagingSenderId: "390868360276",
  appId: "1:390868360276:web:507a17330b2dd7d87061c1",
  measurementId: "G-BS58MGF20F"
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };