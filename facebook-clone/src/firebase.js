import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyBPsJo3pZjv2lgkeubuJ-lbT8QUMuv5xC0',
  authDomain: 'facebook-clone-744d5.firebaseapp.com',
  projectId: 'facebook-clone-744d5',
  storageBucket: 'facebook-clone-744d5.appspot.com',
  messagingSenderId: '35121854500',
  appId: '1:35121854500:web:91cfe04f117de680f100b1',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
