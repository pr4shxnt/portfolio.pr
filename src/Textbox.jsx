import React, { useEffect } from 'react';
import Typed from 'typed.js';
import "./Textbox.css";
import Headerside from "./Images/Headerside.png";

function Textbox() {
  useEffect(() => {
    // Ensure the element exists before initializing Typed.js
    const element = document.querySelector('.element');
    if (element) {
      const options = {
        strings: ['Developer', 'Student', 'Freelancer', 'Coder', 'Designer '],
        typeSpeed: 40,
        backSpeed: 50,
        backDelay: 1000,
        loop: true,
      };

      const typed = new Typed(element, options);

      return () => {
        typed.destroy();
      };
    } else {
      console.error('Element with class "element" not found.');
    }
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div className="textContainer">
      <div className="boxText">
        <h1>
          I am a <br /> <span className="element"></span>
        </h1>
        <p>
          I am a fullstack web developer from Nepal and I am pursuing my hobby
          as a developer and I have been learning it for the last 3 years. My experiences have not only equipped me with technical skills but also instilled in me a passion for lifelong learning and problem-solving.
        </p>
      </div>
      <div className="img-box">
        <img src={Headerside} alt="Header Side" className='image12' />
      </div>
    </div>
  );
}

export default Textbox;
