import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAl-E3vOc7Ujx6uxv0Jix_c4R2xwIuqciI",
  authDomain: "bookshop-648c3.firebaseapp.com",
  databaseURL: "https://bookshop-648c3.firebaseio.com",
  projectId: "bookshop-648c3",
  storageBucket: "bookshop-648c3.appspot.com",
  messagingSenderId: "643845780847"
});

const fbase = Rebase.createClass(firebaseApp.database());


export { fbase, firebaseApp };