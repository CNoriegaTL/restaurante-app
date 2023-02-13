// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAFDPeuYjlMSjOYKJ8dK-PSe1VouR8Xex0',
  authDomain: 'backend-restaurant-cedric.firebaseapp.com',
  projectId: 'backend-restaurant-cedric',
  storageBucket: 'backend-restaurant-cedric.appspot.com',
  messagingSenderId: '744688498778',
  appId: '1:744688498778:web:08e3a875e8082d4cdd8063',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Servicios a ocupar
export const db = getFirestore(app); //? Firestore database
