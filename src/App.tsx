import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Preloader from './components/common/Preload';


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
