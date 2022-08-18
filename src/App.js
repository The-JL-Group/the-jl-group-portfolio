import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Header/Navbar/navbar';
import AboutJames from './components/About/About';
import AboutLina from './components/About/AboutLina';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';

import RentalCard from './components/About/AboutCards/JamesCard/RentalCard';

function App() {
  return (
    <div id="main" className="dark:bg-white dark:text-blk">
      <Navbar />
      <Header />
      <AboutJames />
      <AboutLina />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
