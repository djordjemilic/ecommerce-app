import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAOM7bOwh65q8LOITfgLlRfyQluFEz14X4",
  authDomain: "ecommerce-app-68609.firebaseapp.com",
  projectId: "ecommerce-app-68609",
  storageBucket: "ecommerce-app-68609.appspot.com",
  messagingSenderId: "287756446617",
  appId: "1:287756446617:web:39d5fdb058fc9544930108",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const gooogleProvider = new GoogleAuthProvider();
gooogleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

// Sign in with GooglePopup
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, gooogleProvider);

// Sign in with GoogleRedirect
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, gooogleProvider);

export const db = getFirestore();

/// Create user with Google Popup
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  // Check if user data does not exist
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (err) {
      console.log("Error creating the user", err.message);
    }
  } else {
    return userDocRef;
  }
};

/// Create user with Email and Password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

// Sign in with Email and Password

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

// Sign out
export const signOutUser = async () => await signOut(auth);

// onAuthStateChange

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
