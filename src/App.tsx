import React from 'react';
import './App.css';
import Container from './components/common/Container';
import Navbar from './components/Navbar';
import Banner from './components/common/Banner';
import Home from './containers/Home';

// Rutas
import Routes from './Routes';

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Routes />
      
    </div>
  );
}

export default App;