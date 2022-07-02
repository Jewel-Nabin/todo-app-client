import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQyV2tYRdC9OGwRVBRdjTvF5fMw9Gf8KM",
  authDomain: "todo-app-4d2c8.firebaseapp.com",
  projectId: "todo-app-4d2c8",
  storageBucket: "todo-app-4d2c8.appspot.com",
  messagingSenderId: "343285442142",
  appId: "1:343285442142:web:0e89ac66772889ae6eb6cf"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
