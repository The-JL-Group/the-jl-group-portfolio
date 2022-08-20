import React, { useState, useEffect } from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

import Loader from './components/Loader/Loader';
import Header from './components/Header/Header';
import Sidebar from './components/Header/Sidebar/Sidebar';
import Navbar from './components/Header/Navbar/navbar';
import TabletSlider from './components/Header/CardSlider/TabletSlider/TabletSlider';
import DesktopNavbar from './components/Header/Navbar/DesNav/DesktopNavbar';
import AboutJames from './components/About/About';
import AboutLina from './components/About/AboutLina';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading 
      ? document.querySelector("body").classList.add("loading") 
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  return (
    <div id="main" className="dark:bg-white dark:text-blk">
      {loading ? (
        <Loader setLoading={setLoading}/>
      ) : (
        <div>
          <Sidebar />
          <Navbar />
          <Header />
          <DesktopNavbar/>
          <TabletSlider />
        
          <AboutJames />
          <AboutLina />
          <Work />
          <Contact />
        </div>
      )}
     
    </div>
  );
}

export default App;
