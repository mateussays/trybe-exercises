import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Sistema de Cadastramento!</h1>
        <Link to="/Login">Faça seu Login</Link>
      </div>
    );
  }
}

export default Home;