import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

  const firebaseConfig = {
    apiKey: "AIzaSyAOuYm3BkMvAcYPvly37DQkNr-JNmCH0Ak",
    authDomain: "tecnyfi-jobs.firebaseapp.com",
    projectId: "tecnyfi-jobs",
    storageBucket: "tecnyfi-jobs.appspot.com",
    messagingSenderId: "186244267827",
    appId: "1:186244267827:web:3ad3fbc6350d1c86138846",
    measurementId: "G-SH7LVTH52B"
  };
  

firebase.initializeApp(firebaseConfig);

export default firebase; 