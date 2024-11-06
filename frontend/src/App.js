import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DearAleph from './components/DearAleph';
import SelfCare from './components/SelfCare';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/dear-aleph" element={<DearAleph />} />
          <Route path="/self-care" element={<SelfCare />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
