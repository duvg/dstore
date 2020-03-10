import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

// Rutas
import Routes from './Routes';

function App() {
  
  return (
    <div className="h-100">
      <Navbar/>
      <Routes />
      
    </div>
  );
}

export default App;