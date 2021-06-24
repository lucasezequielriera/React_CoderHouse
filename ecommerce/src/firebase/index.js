import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAgiVBv_Y3It7aTrQHT4go4r22NcYUtQRQ",
    authDomain: "proyecto-coderhouse.firebaseapp.com",
    projectId: "proyecto-coderhouse",
    storageBucket: "proyecto-coderhouse.appspot.com",
    messagingSenderId: "369851175964",
    appId: "1:369851175964:web:96fd68e2feefc63736bbd9"
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => app;

export const getFirestore = () => firebase.firestore(app);