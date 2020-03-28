import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Preloader from './components/common/Preload';


// Rutas
import Routes from './Routes';



function App() {  
  const [load, setLoad] = useState(false);
  console.log(load);
  useEffect(
    () => {
      
      setLoad(true);
      console.log(load);
    }, []
  );

  console.log(load);

  return (
    
    <div className="h-100">
      <Navbar/>
      {load ? <Routes /> : <Preloader/>}
      
    </div>
  );
}


export default App;
