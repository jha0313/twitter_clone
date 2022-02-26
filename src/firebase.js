import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD7TD6ieM-Tuk2SeSLQN0MF_qBEt11kb-k",
    authDomain: "twitterclone-cfca3.firebaseapp.com",
    projectId: "twitterclone-cfca3",
    storageBucket: "twitterclone-cfca3.appspot.com",
    messagingSenderId: "993512346190",
    appId: "1:993512346190:web:001eda3a331f772c85e91f",
    measurementId: "G-RX08YB4DG6"
  };

  export default firebase.initializeApp(firebaseConfig);