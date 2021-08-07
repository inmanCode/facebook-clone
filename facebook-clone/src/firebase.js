import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyAgQ2-UF2QNkCR5l4-oTOjn2H_Uc3w6rFw',
  authDomain: 'facebook-clone-27f0d.firebaseapp.com',
  projectId: 'facebook-clone-27f0d',
  storageBucket: 'facebook-clone-27f0d.appspot.com',
  messagingSenderId: '533208318058',
  appId: '1:533208318058:web:a3f887050722c691f24a13',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
