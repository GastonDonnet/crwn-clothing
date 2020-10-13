import React, { Component } from "react";
import "./SignUp.scss";
import { FormInput } from "../FormInput/FormInput";
import { Button } from "../Button/Button";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user.actions";

class SignUp extends Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    const {dispatch} = this.props

    if (password !== confirmPassword) {
      alert("No coinciden las contraseñas");
      return;
    }
    
    dispatch(signUpStart({ displayName, email, password }))
   
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">No tengo una cuenta</h2>
        <span>Ingresa con tu email y contraseña</span>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
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
            value={displayName}
            label="Nombre"
            name="displayName"
            type="text"
            required
          />{" "}
          <FormInput
            handleChange={this.handleChange}
            value={password}
            label="Contraseña"
            name="password"
            type="password"
            required
          ></FormInput>
          <FormInput
            handleChange={this.handleChange}
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
}


export default connect()(SignUp)