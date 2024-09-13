import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Navbar';
import Textbox from './Textbox';
import Aboutme from './Aboutme'
import MoreAboutMe from './MoreAboutMe';
import Socials from './Socials';
import CVSection from './CVSection';
import Footer from './Footer';


function App(){
    return (<>
    <Navbar />
    <Textbox />
    <Aboutme />
    <MoreAboutMe/>
    <Socials/>
    <CVSection/>
    <Footer/>
    </>
    )
}

export default App;