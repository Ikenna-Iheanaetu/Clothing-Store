import React from "react";
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase-utils';
import Signup from "../../components/Sign-up/sign-up-component";
import SignInComponent from "../../components/Sign-In/sign-in";

const Authentication = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocReference = await createUserDocumentFromAuth(user)
    }
   

  return (
    <div className="auth-container">
      <SignInComponent logGoogleUser={ logGoogleUser }/>
      <Signup />
    </div>
  );
};

export default Authentication;
