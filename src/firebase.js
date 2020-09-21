import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCeGD11khc6EbSRmvP2jj2YJcW9gF88hqQ",
    authDomain: "marcos-todoist-clone.firebaseapp.com",
    databaseURL: "https://marcos-todoist-clone.firebaseio.com",
    projectId: "marcos-todoist-clone",
    storageBucket: "marcos-todoist-clone.appspot.com",
    messagingSenderId: "908375408344",
    appId: "1:908375408344:web:c71e2d8287cd15896261ad",
    measurementId: "G-WG9YN9KKHJ"
});

export { firebaseConfig as firebase };