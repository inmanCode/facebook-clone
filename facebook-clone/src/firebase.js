import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyDnHZY9PBPul0dNkMTrMEdbgNnV86MlgTU',
  authDomain: 'facebook-clone-85363.firebaseapp.com',
  projectId: 'facebook-clone-85363',
  storageBucket: 'facebook-clone-85363.appspot.com',
  messagingSenderId: '864584585428',
  appId: '1:864584585428:web:2e79f77b83f0d151feab41',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
