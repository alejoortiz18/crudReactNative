import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBsplMepgGzQc87ctqSIfMyZg9dLL8cXTw",
    authDomain: "crud-1e061.firebaseapp.com",
    projectId: "crud-1e061",
    storageBucket: "crud-1e061.appspot.com",
    messagingSenderId: "316294059099",
    appId: "1:316294059099:web:c144e30b05c1f121ef9b7e"
  };

  export const firebaseApp = firebase.initializeApp(firebaseConfig)