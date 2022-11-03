import React from "react";
import { AuthenticationContainer, VerticalLine } from "./authentication.styles";
import SignUp from "../../components/sign-up-form/sign-up-form.component";
import SignIn from "../../components/sign-in-form/sign-in-form.component";

function Authentication() {
  return (
    <AuthenticationContainer>
      <SignIn />
      <VerticalLine></VerticalLine>
      <SignUp />
    </AuthenticationContainer>
  );
}

export default Authentication;
