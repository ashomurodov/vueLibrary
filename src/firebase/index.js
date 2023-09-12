// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyD3IfEHC1Tam5xkf09K44voSwSQ4Tq11Lk",
	authDomain: "vue3-e6435.firebaseapp.com",
	projectId: "vue3-e6435",
	storageBucket: "vue3-e6435.appspot.com",
	messagingSenderId: "960796336523",
	appId: "1:960796336523:web:ac4b467bde34375f6e0f8e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
