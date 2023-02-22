import React from "react";
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase-utils';
import Signup from "../../components/Sign-up/sign-up-component";

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocReference = await createUserDocumentFromAuth(user)
    }
   

  return (
    <div>
      <h1>This is the sign in page</h1>
      <button onClick={ logGoogleUser }>Sign in with google Popup</button>
      <Signup />
    </div>
  );
};

export default SignIn;
