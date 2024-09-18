import React from "react";
import "./Footer.css";

function Footer(){
    return(
        <footer class="footter">
    <div class="footer-wrapper">
      <div class="footer-section">
        <div class="footer-subscribe">
          <h2>
            Subscribe to the my Blog to stay up-to-date with the latest releases
          </h2>
          <div class="input-box">
            <input type="email" placeholder="Email Address" />
            <button>
              <svg className="svg" width="41" height="22" viewBox="0 0 41 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40.002 11.001H0.501953M40.002 11.001L30.002 1.00098M40.002 11.001L30.002 21.001"
                  stroke="#0E100F"></path>
              </svg>
            </button>
          </div>
        </div>
        <nav className="footer-nav">
          <div>
            <h3>Projects</h3>
            <ul>
              <li><a href="https://pr4shxnt.github.io/BurgerHouse-Project/">Burger House</a></li>
              <li><a href="https://pr4shxnt.github.io/UDAEH/">UDAEH</a></li>
              <li><a href="#">Portfolio</a></li>
            </ul>
          </div>

          <div>
            <h3>Connect</h3>
            <ul>
              <li><a href="https://x.com/pr4xnt">Twitter</a></li>
              <li><a href="https://github.com/pr4shxnt">GitHub</a></li>
              <li><a href="https://www.facebook.com/pr4shant.xd">Facebook</a></li>
              <li><a href=" https://wa.me/9779742433049">Whatsapp</a></li>
            </ul>
          </div>
        </nav>
      </div>

      <div class="footer-copyright">
        <p>©Prashant Adhikari, All rights reserved.</p>

      </div>
    </div>
  </footer>
    )
}

export default Footer; 