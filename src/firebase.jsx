// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
// import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const Config = {
  apiKey: "AIzaSyDAK8ZN0_Y8g2Od0XlQ-c4_t13GYVmgAIY",
  authDomain: "watching-e7ce4.firebaseapp.com",
  databaseURL: "https://watching-e7ce4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "watching-e7ce4",
  storageBucket: "watching-e7ce4.appspot.com",
  messagingSenderId: "380921648595",
  appId: "1:380921648595:web:84420f593e4eaf5d174b26"
};


// Initialize Firebase
firebase.initializeApp(Config);
// const auth = firebase.auth();
// const db = firebase.firestore();
export default firebase;
// export {db,auth};