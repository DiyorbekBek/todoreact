import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDOrA32xHwADZ71erwY7lUWTHATspJF0Zk",
  authDomain: "mytodo-list-6335e.firebaseapp.com",
  projectId: "mytodo-list-6335e",
  storageBucket: "mytodo-list-6335e.appspot.com",
  messagingSenderId: "1019329633895",
  appId: "1:1019329633895:web:c5aa3ae8628c19ab50fec2",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const googleProvayder = new GoogleAuthProvider();

export { auth, googleProvayder };
