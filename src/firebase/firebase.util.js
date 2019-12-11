import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA0sFetPrWFiXPQW4pugpQ-vyAFju_lFDI",
    authDomain: "crwn-db-a1457.firebaseapp.com",
    databaseURL: "https://crwn-db-a1457.firebaseio.com",
    projectId: "crwn-db-a1457",
    storageBucket: "crwn-db-a1457.appspot.com",
    messagingSenderId: "486333587935",
    appId: "1:486333587935:web:5ef6a0b4a3a4bfc7dfe46a"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;