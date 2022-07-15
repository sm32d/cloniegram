import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAauei2PTi-3HwmKSOyAUfl4W-HYQrFcdk",
    authDomain: "cloniegram-c08cb.firebaseapp.com",
    projectId: "cloniegram-c08cb",
    storageBucket: "cloniegram-c08cb.appspot.com",
    messagingSenderId: "994333501656",
    appId: "1:994333501656:web:02b7dbfb8674fd8a938fad"
};

// Initialize Firebase
!firebase.apps.length ?
    firebase.initializeApp(firebaseConfig) : firebase.app()

const db = firebase.firestore()

export { firebase, db };