import React, { Component } from "react";
import "./SignIn.scss";
import { FormInput } from "../FormInput/FormInput";
import { Button } from "../Button/Button";
import { signInWithGoogle } from "../../firebase/firebase.utils";

export default class Signin extends Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2>Ya tengo una cuenta</h2>
        <span>Ingresa con tu email y contraseña</span>

        <form className="form" onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            value={email}
            label="Email"
            name="email"
            type="email"
            required
          ></FormInput>
          <FormInput
            handleChange={this.handleChange}
            value={password}
            label="Contraseña"
            name="password"
            type="password"
            required
          ></FormInput>

          <div className="buttons">
            <Button type="submit">Ingresar</Button>
            <Button onClick={signInWithGoogle} isGoogleSignIn>
              Ingresar con Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
