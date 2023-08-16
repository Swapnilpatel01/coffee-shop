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
// const firebaseConfig = {
//   apiKey: "AIzaSyDFGo34x5voN9f1AGnQIClc1gVO-uNc7Y8",
//   authDomain: "coffeeshop-d68de.firebaseapp.com",
//   projectId: "coffeeshop-d68de",
//   storageBucket: "coffeeshop-d68de.appspot.com",
//   messagingSenderId: "710541587395",
//   appId: "1:710541587395:web:710d883660f370329d0376",
//   measurementId: "G-XJ8GQZ02MP"
// };
// initializeApp(firebaseConfig);
// const analytics = getAnalytics(App);

// -------------------------------------------------------------------


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRB-T_caJeCf7VY7-KqeINB1IsTNnl1pg",
  authDomain: "coffee-shop-da22d.firebaseapp.com",
  projectId: "coffee-shop-da22d",
  storageBucket: "coffee-shop-da22d.appspot.com",
  messagingSenderId: "985868791781",
  appId: "1:985868791781:web:6e3441d953d8bfaa20090c",
  measurementId: "G-YPQ5DN1JRJ"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

createApp(App).use(router).mount('#app');
