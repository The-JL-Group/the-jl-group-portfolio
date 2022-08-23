import React, { useState, useEffect } from 'react';

// React Scroll Motion
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

// React Router Dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Loader from './components/Loader/Loader';
import ProgressBar from './components/ProgressBar/ProgressBar';
import Header from './components/Header/Header';
import Sidebar from './components/Header/Sidebar/Sidebar';
import Navbar from './components/Header/Navbar/navbar';
import TabletSlider from './components/Header/CardSlider/TabletSlider/TabletSlider';
import DesktopNavbar from './components/Header/Navbar/DesNav/DesktopNavbar';
import AboutBoth from './components/About/AboutBoth';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import ScrollToTop from './components/Scroll/ScrollToTop';

import Error from './components/Error/Error';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector('body').classList.add('loading')
      : document.querySelector('body').classList.remove('loading');
  }, [loading]);

  return (
      <div id="main" className="dark:bg-white dark:text-blk overflow-hidden">
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
            <Contact />
            <ScrollToTop />
         

            {/* Error Page */}
            <Error />
        </div>
        )} 
      </div>
  );
}

export default App;
