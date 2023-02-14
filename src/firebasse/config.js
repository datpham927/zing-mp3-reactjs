// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyArXkx5myfA0BTq5byotuvkydWo3wCS-Eo',
    authDomain: 'zing-mp3-reactjs.firebaseapp.com',
    projectId: 'zing-mp3-reactjs',
    storageBucket: 'zing-mp3-reactjs.appspot.com',
    messagingSenderId: '976381710645',
    appId: '1:976381710645:web:a7286a2e2278cd79ce3c7c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
