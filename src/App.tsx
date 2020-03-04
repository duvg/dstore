import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './components/common/Container';
import Button from './components/common/Button';
import Alert from './components/common/Alert';
import Navbar from './components/Navbar';
import Banner from './components/common/Banner';
import Home from './containers/Home';
function App() {
  function handleClick () {
    console.log("dale");
  }
  return (
    <div className="App">
      <Navbar/>
      <Container>
        <Banner />
        <Home />
      </Container>
    </div>
  );
}

export default App;