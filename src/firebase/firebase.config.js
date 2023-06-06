// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey:import.meta.env.VITE_apiKey,
authDomain:import.meta.env.VITE_authDomain,
projectId:import.meta.env.VITE_projectId,
storageBucket:import.meta.env.VITE_storageBucket,
messagingSenderId:import.meta.env.VITE_messagingSenderId,
appId:import.meta.env.VITE_appId

/* apiKey:"AIzaSyClWwAn7op6dlKsH60T7cgNPmwtNz8jqFI",
authDomain:"language-care.firebaseapp.com",
projectId:"language-care",
storageBucket:"language-care.appspot.com",
messagingSenderId:"598854574565",
appId:"1:598854574565:web:be39e530e36187a3edcf0c", */
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;