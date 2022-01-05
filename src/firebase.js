import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDD2DT33BrV0z05MZZfdvsWjn2Fl0juEdc",
  authDomain: "deployed-d640d.firebaseapp.com",
  databaseURL: "https://deployed-d640d.firebaseio.com",
  projectId: "deployed-d640d",
  storageBucket: "deployed-d640d.appspot.com",
  messagingSenderId: "125160831397",
  appId: "1:125160831397:web:bbc6b3418bdfaf8d8b904c",
  measurementId: "G-ZLNER1Z47N",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
  