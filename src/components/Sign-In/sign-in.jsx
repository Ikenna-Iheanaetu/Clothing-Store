import { useState } from "react";
import FormInput from "../form-input/form-input";
import Button from '../../components/button-component/button';

import { createUserDocumentFromAuth, signInWithEmailAndPassword,signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from '../../utils/firebase/firebase-utils'

const SignIn = () => {
    const defaultFormField = {
        email: '',
        password: '',
    }

    const [formFields, setFormFields] = useState(defaultFormField)
    const {email, password} = formFields

    const onChangeHandler = (event) => {
        const { name, value } = event.target

        setFormFields({...formFields, [name] : value})
    } 

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup()
        await createUserDocumentFromAuth(user)
    }

    const onSubmit = async (event) => {
        event.preventDefault()

        try{
            const { user } = await signInAuthUserWithEmailAndPassword(email, password)
        console.log(user);
        }catch(error){
            switch (error.code) {
                case 'auth/user-not-found':
                    alert('This user does not exist, sign up to create an account')
                    break;
                case 'auth/wrong-password':
                    alert('Incorrect entry, try again')
                    break;
                default:
                    console.log(error)
                    break;
            }
        }
    }

  return (
    <div className="sign-in-sign-up-container">
      <h2>Sign In</h2>
      <span>Sign In if you already have an account</span>

      <form onSubmit={onSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={onChangeHandler}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={onChangeHandler}
          name="password"
          value={password}
        />
        <div className="button-container-auth">
            <Button>Sign in</Button>
            <Button type='button' classes='google-sign-in' onClick={ signInWithGoogle }>Sign in with Google</Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
