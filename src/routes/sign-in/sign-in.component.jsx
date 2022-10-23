import React from "react";
import "./sign-in.styles.scss";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignUp from "../../sign-up-form/sign-up-form.component";

function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div className="sign-in-container">
      <h1>Sign in page</h1>
      <button className="loginBtn loginBtn--google" onClick={logGoogleUser}>
        Sign in with Google
      </button>
      <SignUp />
    </div>
  );
}

export default SignIn;
