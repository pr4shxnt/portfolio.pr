import React from "react";
import img1 from "./Images/img1.jpg";
import img2 from "./Images/img2.jpg";
import img3 from "./Images/img3.jpg";
import img4 from "./Images/img4.jpg";
import img5 from "./Images/img5.jpg";
import "./Aboutme.css";


function Aboutme(){
    return(
        <section class="textBox" id="aboutme">
    <div className="flexBox">
      <div className="textBoxBtn">
        <div className="btn">
          <div className="inner"></div>
          <h1><span>About Me</span></h1>
        </div>


      </div>
      <div className="textBox-full">
        <div className="container">
          <div className="pic">
            <img className="background" src={img1} alt="" />

            <div className="pic-content">
              <div className="profile-image">
                <i className="fa-regular fa-user"></i>
              </div>
              <h3 className="title">Name: Prashant Adhikari</h3>
            </div>
            <div className="backdrop"></div>
          </div>

          <div className="pic">
            <img className="background" src={img2} alt="" />

            <div className="pic-content">
              <div className="profile-image">
                <i className="fa-solid fa-school"></i>
              </div>

              <h3 className="title">Education: 10+2 India</h3>
            </div>
            <div className="backdrop"></div>
          </div>

          <div className="pic">
            <img className="background" src={img3} alt="" />

            <div className="pic-content">
              <div className="profile-image">
                <i className="fa-solid fa-desktop"></i>
              </div>

              <h3 className="title">Half year Experience</h3>
            </div>
            <div className="backdrop"></div>
          </div>

          <div className="pic">
            <img className="background" src={img5} alt="" />

            <div className="pic-content">
              <div className="profile-image">
                <i className="fa-solid fa-code"></i>
              </div>

              <h3 className="title">Full-stack Web Developer</h3>
            </div>
            <div className="backdrop"></div>
          </div>

          <div className="pic">
            <img className="background" src={img4} alt="" />

            <div className="pic-content">
              <div className="profile-image">
                <i className="fa-solid fa-cart-shopping"></i>
              </div>

              <h3 className="title">Freelance</h3>
            </div>
            <div className="backdrop"></div>
          </div>
        </div>

        <div className="text">

          <h1>Skill and <span>Education</span></h1>
          <p>I have recently completed my 12th grade education in India, marking a significant milestone in my academic
            journey. My time in high school has been both enriching and transformative, providing me with a solid
            foundation in a diverse range of subjects. Throughout these years, I’ve had the opportunity to delve into
            various fields, explore my interests, and develop crucial skills that will guide me in my future pursuits.


            I’m deeply passionate about coding and technology, and this enthusiasm has been a driving force throughout
            my journey. From the moment I first encountered programming, I was captivated by the power of code to
            create, solve problems, and bring innovative ideas to life.</p>


        </div>



      </div>

    </div>


    




  </section>
    )
}

export default Aboutme;