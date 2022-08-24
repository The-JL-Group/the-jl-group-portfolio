import React from 'react';

// React Router Dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Error from './pages/Error';

function App() {
  return (
    <Router>
      <div id="main" className="dark:bg-white dark:text-blk overflow-hidden">
        <div>
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Error Page */}
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
