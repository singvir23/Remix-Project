import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import DearAleph from './components/DearAleph';
// import SelfCare from './components/SelfCare';

function App() {
  return (
    <Router>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ textAlign: 'center', padding: '20px' }}
      >
        <h1>Welcome to Customs Remix Project</h1>

        {/* Navigation Buttons */}
        <div style={{ marginBottom: '20px' }}>
          <Link to="/dear-aleph">
            <motion.button
              style={{ marginRight: '10px' }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Go to Dear Aleph
            </motion.button>
          </Link>
          {/* 
          <Link to="/self-care">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Go to Self-Care
            </motion.button>
          </Link>
          */}
        </div>

        {/* Route Definitions */}
        <Routes>
          <Route path="/dear-aleph" element={<DearAleph />} />
          {/* <Route path="/self-care" element={<SelfCare />} /> */}
        </Routes>
      </motion.div>
    </Router>
  );
}

export default App;
