import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVkwBpbsasXjwx5bGArV5vyKVmWW7W1Hw",
  authDomain: "crwn-db-5fb54.firebaseapp.com",
  projectId: "crwn-db-5fb54",
  storageBucket: "crwn-db-5fb54.appspot.com",
  messagingSenderId: "683417527388",
  appId: "1:683417527388:web:0536e8f330ff57dc5c7299",
  measurementId: "G-DMDS70SJ09",
};

initializeApp(firebaseConfig);

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ params: "select_account" });
export const signInWithGoogle = () =>
  signInWithPopup(auth, provider).catch((error) =>
    console.log("Sign in with Google failed", error)
  );
