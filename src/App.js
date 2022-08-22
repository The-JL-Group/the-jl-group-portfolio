import React, { useState, useEffect } from 'react';
import Loader from './components/Loader/Loader';
import Header from './components/Header/Header';
import Sidebar from './components/Header/Sidebar/Sidebar';
import Navbar from './components/Header/Navbar/navbar';
import TabletSlider from './components/Header/CardSlider/TabletSlider/TabletSlider';
import DesktopNavbar from './components/Header/Navbar/DesNav/DesktopNavbar';
import AboutBoth from './components/AboutBoth';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import ScrollToTop from './components/Scroll/ScrollToTop';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector('body').classList.add('loading')
      : document.querySelector('body').classList.remove('loading');
  }, [loading]);

  return (
    <div id="main" className="dark:bg-white dark:text-blk">
      {loading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <div>
          <Sidebar />
          <Navbar />
          <Header />
          <DesktopNavbar />
          <TabletSlider />

          {/* <AboutJames />
          <AboutLina /> */}
          <AboutBoth />
          <Work />
          <Contact />
          <ScrollToTop />
        </div>
      )}
    </div>
  );
}

export default App;
