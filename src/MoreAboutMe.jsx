import React, { useState } from "react";
import "./MoreAboutMe.css";

function MoreAboutMe() {
  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState('whycode');

  // Function to handle tab clicks
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <section className="MoreAboutMe" id="MoreAboutMe"> 
      <div className="moreheading">
        <h2><span>More About Me</span></h2>
      </div>
      <div className="full-container-img">
        <div className="tab-container">
          <ul className="tab-menu">
            <li
              className={`tab ${activeTab === 'whycode' ? 'active' : ''}`}
              onClick={() => handleTabClick('whycode')}
            >
              Journey
            </li>
            <li
              className={`tab ${activeTab === 'glory' ? 'active' : ''}`}
              onClick={() => handleTabClick('glory')}
            >
              Glory
            </li>
            <li
              className={`tab ${activeTab === 'experience' ? 'active' : ''}`}
              onClick={() => handleTabClick('experience')}
            >
              Exp.
            </li>
            <li
              className={`tab ${activeTab === 'academics' ? 'active' : ''}`}
              onClick={() => handleTabClick('academics')}
            >
              Academic
            </li>
          </ul>

          <div className="tab-panels">
            <div id="whycode" className={`panel ${activeTab === 'whycode' ? 'active' : ''}`}>
              <h3>When I started?</h3>
              <p>
              I began coding almost three years ago with HTML, CSS, and JavaScript. Since then, I’ve broadened my skills to include various programming languages and frameworks, continually expanding my knowledge and expertise.
              </p>
              <a href="#"><button className="log-in">Learn More</button></a>
            </div>

            <div id="glory" className={`panel ${activeTab === 'glory' ? 'active' : ''}`}>
              <h3>What I got?</h3>
              <p>
              I am now focused on pursuing further studies, which has left this cabinet of mine hollow and empty. It represents a transition in my life, reflecting my shift from past interests to new academic and personal growth opportunities.
                </p>
              <button className="log-in">Cabinet</button>
            </div>

            <div id="experience" className={`panel ${activeTab === 'experience' ? 'active' : ''}`}>
              <h3>Projects? </h3>
              <p>
              I have created numerous projects using various traditional tech stacks, but this portfolio is my first venture into using ReactJS. It represents a significant step in my development journey, showcasing my adaptation to modern web technologies.
                </p>
              <button className="log-in" href = "#cv-content">Resume</button>
            </div>



            <div id="academics" className={`panel ${activeTab === 'academics' ? 'active' : ''}`}>
              <h3>Academics?</h3>
              <p>
              

SEE: TMV, Nepal <br /> Grade: 3.6 GPA  <br />
HSEB: SLGHHS, Jamnagar, India <br /> Grade: 57%
              </p>
              <button className="log-in">Certifications</button>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default MoreAboutMe;
