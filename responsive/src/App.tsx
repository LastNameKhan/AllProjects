import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import Band from './Components/Band';
import Tour from './Components/Tour';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Band />
      <Tour />
      <Contact />
    </div>
  );
}

export default App;
