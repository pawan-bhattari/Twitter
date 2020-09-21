import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAhXjim-qC8ZFhsR_KtLAA2z48Mgu-duhQ",
    authDomain: "twitter-clone-54d35.firebaseapp.com",
    databaseURL: "https://twitter-clone-54d35.firebaseio.com",
    projectId: "twitter-clone-54d35",
    storageBucket: "twitter-clone-54d35.appspot.com",
    messagingSenderId: "413240443021",
    appId: "1:413240443021:web:7e41b00a171e7a0b43a2c4",
    measurementId: "G-HSBR00N3KX"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db =firebaseApp.firestore();

  export default db;