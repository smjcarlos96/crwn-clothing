import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDlvM8GEqRkdmW9BDY6zNOLvAuE0yxkDpM",
  authDomain: "crwn-db-994d4.firebaseapp.com",
  databaseURL: "https://crwn-db-994d4.firebaseio.com",
  projectId: "crwn-db-994d4",
  storageBucket: "crwn-db-994d4.appspot.com",
  messagingSenderId: "410741244931",
  appId: "1:410741244931:web:e3265c2062729cc3a7ba36",
  measurementId: "G-BZ5DCZZ8ET"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;