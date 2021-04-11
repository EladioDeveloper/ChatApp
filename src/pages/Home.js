import React, { Component } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  render() {
    return (
      <div className="home">
        <Header></Header>
        <section>
          <div className="jumbotron jumbotron-fluid py-5">
            <div className="container text-center py-5">
              <h1 className="display-4">Bienvenido a Chat App</h1>
              <p className="lead">
                El mejor aplicativo para chatear sobre proyectos
              </p>
              <div className="mt-4">
                <Link className="btn btn-primary px-5 mr-3" to="/signup">
                  Crear una cuenta
                </Link>
                <Link className="btn px-5" to="/login">
                  Iniciar Sesion
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </div>
    );
  }
}
