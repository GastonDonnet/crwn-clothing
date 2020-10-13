import React, { useState } from "react";
import "./SignUp.scss";
import { FormInput } from "../FormInput/FormInput";
import { Button } from "../Button/Button";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user.actions";

const SignUp = ({dispatch})=> {
  
  const [userCredentials, setuserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("No coinciden las contraseñas");
      return;
    }
    dispatch(signUpStart({ displayName, email, password }))
   
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setuserCredentials({...userCredentials, [name]: value });
  };

  
    
    return (
      <div className="sign-up">
        <h2 className="title">No tengo una cuenta</h2>
        <span>Ingresa con tu email y contraseña</span>

        <form className="sign-up-form" onSubmit={handleSubmit}>
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
            value={displayName}
            label="Nombre"
            name="displayName"
            type="text"
            required
          />{" "}
          <FormInput
            handleChange={handleChange}
            value={password}
            label="Contraseña"
            name="password"
            type="password"
            required
          ></FormInput>
          <FormInput
            handleChange={handleChange}
            value={confirmPassword}
            label="Confirmar contraseña"
            name="confirmPassword"
            type="password"
            required
          ></FormInput>
          <div className="buttons">
            <Button type="submit">Registrarse</Button>
          </div>
        </form>
      </div>
    );
  
}


export default connect()(SignUp)