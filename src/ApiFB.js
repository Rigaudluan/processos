import firebase from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore'

import firebaseConfig from './fireabaseConfig'

const firebaseApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

//decide o database
const db = firebaseApp.firestore();

export default {

    //Loga na conta google
    googleLogar: async () =>{
        const provider = new firebase.auth.GoogleAuthProvider();
        let result = await firebase.auth().signInWithPopup(provider)
        return result;
    }
}