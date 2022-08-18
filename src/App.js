import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Header/Sidebar/Sidebar';
import Navbar from './components/Header/Navbar/navbar';
import DesktopNavbar from './components/Header/Navbar/DesNav/DesktopNavbar';
import AboutJames from './components/About/About';
import AboutLina from './components/About/AboutLina';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';

import RentalCard from './components/About/AboutCards/JamesCard/RentalCard';

function App() {
  return (
    <div id="main" className="dark:bg-white dark:text-blk">
      <Sidebar />
     
      <Navbar />
      <Header />
      <DesktopNavbar/>
    
      <AboutJames />

      <AboutLina />
      <Work />

      <Contact />
    </div>
  );
}

export default App;
