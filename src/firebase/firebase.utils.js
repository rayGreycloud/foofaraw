import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyATqqithDzuIRRBqmpaUiRGcKJz8FRhqi0',
  authDomain: 'foofaraw-ed8f1.firebaseapp.com',
  databaseURL: 'https://foofaraw-ed8f1.firebaseio.com',
  projectId: 'foofaraw-ed8f1',
  storageBucket: '',
  messagingSenderId: '985348244555',
  appId: '1:985348244555:web:78aa3f271dce0136'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Setup & export Firebase utils
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Setup & export Google auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// Export entire library
export default firebase;
