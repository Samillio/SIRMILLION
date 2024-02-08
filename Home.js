import React from 'react';
import About from './About';
import Skills from './Skills';
import Services from './Services';
import Hire from './Hire';
import Register from './Register';
import './Home.css'; // Import CSS file for styling
import img1 from './images/sam.jpg';

function Home() {
  return (
    <div className="home-container">
      <div className="intro-section">
        <div className="intro-container">
          <div className="image-section">
            <img src={img1} alt="Sam's Portrait" />
          </div>
          <div className="description-section">
            <h2>Welcome to Sirmillion Services</h2>
            <p>My Name is Samwel Mwangi .Undergraduate with Degree in Electronics And Computer
              Engineering where i specialised in  Web Developement, Computer Nertwoking,
              Domestic Power Installation,Database creation, Mobile Phone Flashing.
              All Online Services, Computer maintanance and Repair and lastly Electrical and Computer 
              Projects.
            </p>
          </div>
        </div>
      </div>
      <div className="about-section">
        <About />
      </div>
      <div className="skills-section">
        <Skills />
      </div>
      <div className="services-section">
        <Services />
      </div>
      <div className="hire-section">
        <Hire />
      </div>
      <div className="register-section">
        <Register />
      </div>
    </div>
  );
}

export default Home;
