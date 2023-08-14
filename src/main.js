import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import firebase from 'firebase'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFGo34x5voN9f1AGnQIClc1gVO-uNc7Y8",
  authDomain: "coffeeshop-d68de.firebaseapp.com",
  projectId: "coffeeshop-d68de",
  storageBucket: "coffeeshop-d68de.appspot.com",
  messagingSenderId: "710541587395",
  appId: "1:710541587395:web:710d883660f370329d0376",
  measurementId: "G-XJ8GQZ02MP"
};
initializeApp(firebaseConfig);
// const analytics = getAnalytics(App);


createApp(App).use(router).mount('#app');
