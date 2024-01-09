import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJA0Uy1Kn81T2Z2r4vMdPTAp4Fj9HToMo",
  authDomain: "fir-todo-app-17558.firebaseapp.com",
  projectId: "fir-todo-app-17558",
  storageBucket: "fir-todo-app-17558.appspot.com",
  messagingSenderId: "321026634818",
  appId: "1:321026634818:web:7107ee482fa92a6bc469db",
  measurementId: "G-V3E4SD0NR5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
