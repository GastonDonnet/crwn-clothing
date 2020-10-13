import React, {  useState, } from "react";
import "./SignIn.scss";
import { FormInput } from "../FormInput/FormInput";
import { Button } from "../Button/Button";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";
import { connect } from "react-redux";

const SignIn = ( { dispatch })=> {
  const [userCredentials, setuserCredentials] = useState({email: "", password: ""})
  const { email, password } = userCredentials;

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(emailSignInStart({ email, password }));
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setuserCredentials({...userCredentials, [name]: value})
  };

    return (
      <div className="sign-in">
        <h2>Ya tengo una cuenta</h2>
        <span>Ingresa con tu email y contraseña</span>

        <form className="form" onSubmit={handleSubmit}>
          <FormInput
            handleChange={handleChange}
            value={email}
            label="Email"
            name="email"
            type="email"
            required
          ></FormInput>
          <FormInput
            handleChange={handleChange}
            value={password}
            label="Contraseña"
            name="password"
            type="password"
            required
          ></FormInput>

          <div className="buttons">
            <Button type="submit">Ingresar</Button>
            <Button
              type="button"
              onClick={() => dispatch(googleSignInStart())}
              isGoogleSignIn
            >
              Ingresar con Google
            </Button>
          </div>
        </form>
      </div>
    );
  
}

export default connect()(SignIn);
