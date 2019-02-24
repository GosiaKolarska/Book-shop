import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDanieK3eBbuKF6ey3rAP_kEvQ5v9ZXmQ4",
  authDomain: "clockwork-bookstore-b4b95.firebaseapp.com",
  databaseURL: "https://clockwork-bookstore-b4b95.firebaseio.com",
  projectId: "clockwork-bookstore-b4b95",
  storageBucket: "clockwork-bookstore-b4b95.appspot.com",
  messagingSenderId: "301788162641"
});

const fbase = Rebase.createClass(firebaseApp.database());


export { fbase, firebaseApp };