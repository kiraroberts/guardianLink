import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDk9RT1D8cVMmn0TT8G8dLlp0nDeHdsZHQ",
  authDomain: "guardian-link-6f673.firebaseapp.com",
  databaseURL: "https://guardian-link-6f673.firebaseio.com",
  projectId: "guardian-link-6f673",
  storageBucket: "guardian-link-6f673.appspot.com",
  messagingSenderId: "775369340663",
  appId: "1:775369340663:web:1c2b71551fad2acf5745f2",
  measurementId: "G-76BYV8ESQH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;