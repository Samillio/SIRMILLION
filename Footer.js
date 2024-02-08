import React, { useState, useEffect } from 'react';
import './Footer.css';

function Footer() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setShowFooter(isBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer style={{ display: showFooter ? 'block' : 'none' }}>
      <div className="container">
        <p>&copy; 2024 Sirmillion. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
