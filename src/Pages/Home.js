import React, { useState, useEffect } from 'react';

import Loader from '../components/Loader/Loader';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import Header from '../components/Header/Header';
import Sidebar from '../components/Header/Sidebar/Sidebar';
import Navbar from '../components/Header/Navbar/navbar';
import TabletSlider from '../components/Header/CardSlider/TabletSlider/TabletSlider';
import DesktopNavbar from '../components/Header/Navbar/DesNav/DesktopNavbar';
import AboutBoth from '../components/About/AboutBoth';
import Work from '../components/Work/Work';
import Testimonials from '../components/Testimonials/Testimonials';
import Contact from '../components/Contact/Contact';
import ScrollToTop from '../components/Scroll/ScrollToTop';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector('body').classList.add('loading')
      : document.querySelector('body').classList.remove('loading');
  }, [loading]);

  return (
    <div>
      {loading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <div>
          <ProgressBar />
          <Sidebar />
          <Navbar />
          <Header />
          <DesktopNavbar />
          <TabletSlider />
          <AboutBoth />
          <Work />
          <Testimonials/>
          <Contact />
          <ScrollToTop />
        </div>
      )}
    </div>
  );
};

export default Home;
