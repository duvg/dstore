import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { connect } from 'react-redux';

// Rutas
import Routes from './Routes';
import { IState } from './redux/ducks';


function App(state: IState) {
  // Validar al usuario autenticado
  const [token, setToken] = useState('');
  console.log(state);
  useEffect(() => {

  }, [token]);


  return (
    <div className="h-100">
      <Navbar/>
      <Routes />
    </div>
  );
}

const mapStateToProps = (state: IState) => state;
export default connect(mapStateToProps)(App);