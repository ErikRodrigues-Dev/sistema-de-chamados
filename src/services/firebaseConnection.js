import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAqpFEOxyISObgM2K1Edv7PhqWTfuchwCQ",
  authDomain: "sistema-chamados-fe5ef.firebaseapp.com",
  projectId: "sistema-chamados-fe5ef",
  storageBucket: "sistema-chamados-fe5ef.appspot.com",
  messagingSenderId: "141719138492",
  appId: "1:141719138492:web:7f6d724f3202830af3e0b9",
  measurementId: "G-739RZ4SG77"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;