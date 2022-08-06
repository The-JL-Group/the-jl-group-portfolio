import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Header/Navbar/navbar';
import About from './components/About/About';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';

function App() {
  return (

    <div className="dark:bg-white dark:text-blk">
      <Header />

      <Navbar />
      <Header />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
