import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAgiVBv_Y3It7aTrQHT4go4r22NcYUtQRQ",
    authDomain: "proyecto-coderhouse.firebaseapp.com",
    projectId: "proyecto-coderhouse",
    storageBucket: "proyecto-coderhouse.appspot.com",
    messagingSenderId: "369851175964",
    appId: "1:369851175964:web:96fd68e2feefc63736bbd9"
};

firebase.initializeApp(firebaseConfig); // Firebase Configuration
firebase.auth = firebase.auth(); // Authentication
firebase.db = firebase.firestore(); // Database

export default firebase;