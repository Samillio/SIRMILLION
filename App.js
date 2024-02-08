import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Services from './Services';
import Hire from './Hire';
import Register from './Register';
import Footer from './Footer';
import MobileFlashingOrderPage from './MobileFlashingOrderPage'; // Import MobileFlashingOrderPage component

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/services" element={<Services />} />
          <Route path="/hire" element={<Hire />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mobile-flashing-order" element={<MobileFlashingOrderPage />} /> {/* Add this route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
