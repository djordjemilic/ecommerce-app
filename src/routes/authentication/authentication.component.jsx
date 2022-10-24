import React from "react";
import "./authentication.styles.scss";
import SignUp from "../../components/sign-up-form/sign-up-form.component";
import SignIn from "../../components/sign-in-form/sign-in-form.component";

function Authentication() {
  return (
    <div className="authentication-container">
      <SignIn />
      <div className="vertical"></div>
      <SignUp />
    </div>
  );
}

export default Authentication;
