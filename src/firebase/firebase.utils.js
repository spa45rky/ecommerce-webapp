import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAi-mcng9j4sXPDfv4HzztYvQrcCeW_ZaI",
        authDomain: "crwn-db-b467c.firebaseapp.com",
    projectId: "crwn-db-b467c",
    storageBucket: "crwn-db-b467c.appspot.com",
    messagingSenderId: "569282292063",
    appId: "1:569282292063:web:b78fd78380f882b7796eea",
    measurementId: "G-Z4FVY5C803"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;