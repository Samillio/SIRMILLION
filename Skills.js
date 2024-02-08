import React from 'react';
 // Import CSS file for styling

function Skills() {
  return (
    <div className="skills-container">
      <h2 className="text-3xl font-bold mb-4 text-center" >Skills & Experience</h2>
      <p className="text-gray-600 text-center">Proficient in React, CSS, and JavaScript for frontend development.
         Experienced in backend technologies including Express and PHP.</p>
      <div className="content-container grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Skills Card */}
        <div className="skills bg-white rounded-lg shadow-md p-4">
          <h3 className="text-xl font-semibold mb-2">Skills</h3>
          <div className="skills-list">
            <h4 className="text-lg font-semibold">Programming Languages</h4>
            <ul className="mb-4">
              <li>1. React</li>
              <li>2. Bootstrap</li>
              <li>3. CSS</li>
              <li>4. JavaScript</li>
            </ul>
            <h4 className="text-lg font-semibold">Backend</h4>
            <ul>
              <li>1. Express</li>
              <li>2. PHP</li>
              <li>3. PostgresSQL</li>
              <li>4. MySQLi</li>
              <li>5. Python</li>
              <li>6. JavaScript</li>
            </ul>
          </div>
        </div>
        
        {/* Experience Card */}
        <div className="experience bg-white rounded-lg shadow-md p-4">
          <h3 className="text-xl font-semibold mb-2">Experience</h3>
          <ul>
            <li className="mb-4">
              <strong>Web Developer</strong>
              <br />
              <span className="text-gray-500 text-sm">2020 - Date</span>
              <br />
              Kirinyaga University of Technology
            </li>
            <li className="mb-4">
              <strong>Computer Networking</strong>
              <br />
              <span className="text-gray-500 text-sm">2022 - Date</span>
              <br />
              Cisco Company Kenya
            </li>
            <li className="mb-4">
              <strong>Web Designer</strong>
              <br />
              <span className="text-gray-500 text-sm">2020 - Date</span>
              <br />
              Brookfield Academy, zuritips.com
            </li>
            <li className="mb-4">
              <strong>Programming Tutor</strong>
              <br />
              <span className="text-gray-500 text-sm">2012 - 2023</span>
              <br />
              Dexter College
            </li>
            <li>
              <strong>Mobile repair and maintenance</strong>
              <br />
              <span className="text-gray-500 text-sm">2019 - Currently</span>
              <br />
              Nakuru Town
            </li>
          </ul>
        </div>
     
      </div>
    </div>
  );
}

export default Skills;
