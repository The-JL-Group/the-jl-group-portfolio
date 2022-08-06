import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Header/Navbar/navbar';
import About from './components/About/About';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Toggle from './components/Header/Toggle';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Contact />
      <Toggle />
    </div>
  );
}

export default App;
