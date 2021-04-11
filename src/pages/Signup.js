import React, { Component } from "react";
import { Link } from "react-router-dom";
import { signup } from "../helpers/auth";
import { signInWithGoogle, signInWithGitHub } from "../helpers/auth";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.googleSignIn = this.googleSignIn.bind(this);
    this.githubSignIn = this.githubSignIn.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ error: "" });
    try {
      await signup(this.state.email, this.state.password);
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  async googleSignIn() {
    try {
      await signInWithGoogle();
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  async githubSignIn() {
    try {
      await signInWithGitHub();
    } catch (error) {
      console.log(error);
      this.setState({ error: error.message });
    }
  }

  render() {
    return (
      <div className="container">
        <form className="mt-5 py-5 px-5" onSubmit={this.handleSubmit}>
          <h1>
            Registrarse en
            <Link className="title ml-2" to="/">
              Chat App
            </Link>
          </h1>
          <p className="lead">
            Llena el siguiente formulario para crear una cuenta.
          </p>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Email"
              name="email"
              type="email"
              onChange={this.handleChange}
              value={this.state.email}
            ></input>
          </div>
          <div>
            <input
              className="form-control"
              placeholder="Password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
              type="password"
            ></input>
          </div>
          <div className="form-group">
            {this.state.error ? <p>{this.state.error}</p> : null}
            <button className="btn btn-primary px-5" type="submit">
              Registrarse
            </button>
          </div>
          <hr></hr>
          <p>O</p>
          <button
            className="btn btn-danger mr-2"
            onClick={this.googleSignIn}
            type="button"
          >
            Registrarse con Google
          </button>
          <button
            className="btn btn-secondary"
            type="button"
            onClick={this.githubSignIn}
          >
            Registrarse con GitHub
          </button>
          <hr></hr>
          <p>
            ¿Ya tienes una cuenta? <Link to="/login">Inicia Sesion</Link>
          </p>
        </form>
      </div>
    );
  }
}
