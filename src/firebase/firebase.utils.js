import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBI8bwsYqHcJCZ94NfrYdWIi65EpOYcU3o",
  authDomain: "ecommerce-db-1c7b1.firebaseapp.com",
  databaseURL: "https://ecommerce-db-1c7b1.firebaseio.com",
  projectId: "ecommerce-db-1c7b1",
  storageBucket: "ecommerce-db-1c7b1.appspot.com",
  messagingSenderId: "929394800014",
  appId: "1:929394800014:web:d6b3d0fd5713223545a0df",
  measurementId: "G-HPE1K4HX2X"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;
