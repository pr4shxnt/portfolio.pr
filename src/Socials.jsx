import React from "react";
import "./Socials.css";

function Socials(){
    return(
        <div className="Socials-container" id="Socials-container">
            <div className="HEADABT">
            <h2><span>SOCIALS</span></h2>
    </div>
        
    
    <div id="cards">
      
      <div className="card">
        <div className="card-content">
          <i className="fa-brands fa-instagram"></i>
          <h2>Instagram</h2>

          <p>Followers: <span>N/A</span></p>

          <a href="http://www.instagram.com/pr4xnt">
            <i className="fa-solid fa-link"></i>
            <span>Follow me</span>
          </a>
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <i className="fa-brands fa-github"></i>
          <h2>GitHub</h2>

          <p>Followers: <span>N/A</span></p>

          <a href="https://www.github.com/pr4shxnt" target="_blank">
            <i className="fa-solid fa-link"></i>
            <span>Follow me</span>
          </a>
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <i className="fa-brands fa-linkedin"></i>
          <h2>Linkedin</h2>

          <p>Followers: <span>N/A</span></p>

          <a href="https://www.linkedin.com/in/prashant-adhikari-687171310/">
            <i className="fa-solid fa-link"></i>
            <span>Follow me</span>
          </a>
        </div>
      </div>
    </div>
    </div>
   




    )
}

export default Socials;