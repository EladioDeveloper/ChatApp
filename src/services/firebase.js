import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCpbWOyfeV1INiy1Gc2F6caojDs8IWeyTk",
  authDomain: "chatapp-fa0bf.firebaseapp.com",
  databaseURL: "https://chatapp-fa0bf-default-rtdb.firebaseio.com/",
};

firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();
