// import firebase from "firebase/app";

// import "firebase/auth";
// import "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBi__OpnzuMcom6QgwKQkhusaczJLmc6os",
  authDomain: "resumebuilder-react-8e218.firebaseapp.com",
  projectId: "resumebuilder-react-8e218",
  storageBucket: "resumebuilder-react-8e218.appspot.com",
  messagingSenderId: "377026305816",
  appId: "1:377026305816:web:81aa6c4fcd2b6ae64f886d"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
