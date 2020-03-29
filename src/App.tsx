import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Preloader from './components/common/Preload';


// Rutas
import Routes from './Routes';



function App() {  
  const [load, setLoad] = useState(false);
  useEffect(
    () => {
      
      setLoad(true);
    }, []
  );


  return (
    
    <div className="h-100">
      <Navbar/>
      {load ? <Routes /> : <Preloader/>}
      
    </div>
  );
}


export default App;
