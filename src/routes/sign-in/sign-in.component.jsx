import React from "react";
import "./sign-in.styles.scss";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(user);
  };

  return (
    <div>
      <h1>Sign in page</h1>

      <button className="loginBtn loginBtn--google" onClick={logGoogleUser}>
        Sign in with Google
      </button>
    </div>
  );
}

export default SignIn;
