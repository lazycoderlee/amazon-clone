import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyC32oB-SfnWk2gll1DimgN7g2di2vr4IJk",
	authDomain: "e-clone-35922.firebaseapp.com",
	databaseURL: "https://e-clone-35922.firebaseio.com",
	projectId: "e-clone-35922",
	storageBucket: "e-clone-35922.appspot.com",
	messagingSenderId: "237688964026",
	appId: "1:237688964026:web:3f0b5556c136dd270d5383",
	measurementId: "G-J56JHPQ0QK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
