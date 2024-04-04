import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRsHbWes2Wx6cWgFbcnodjLnAWjNXjgMY",
  authDomain: "miniblog-510db.firebaseapp.com",
  projectId: "miniblog-510db",
  storageBucket: "miniblog-510db.appspot.com",
  messagingSenderId: "524487126454",
  appId: "1:524487126454:web:75b2e75f3edd387492a517"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);