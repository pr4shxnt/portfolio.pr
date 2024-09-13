import React from "react";
import "./CVSection.css";
import PrashantCVRESUME from "./Images/PrashantCVRESUME.pdf";

function CVSection() {
    return (
        <section className="cv-showcase" id="cv-showcase">
            <div className="cv-content" id="cv-content">
                <h2><span>My CV</span></h2>
                <p>
                    Explore my professional journey and achievements in detail. Below is a preview of my CV. Feel free to download
                    it for more insights into my background and qualifications.
                </p>
                <div className="cv-preview">
                    <iframe src={PrashantCVRESUME} type="application/pdf" width="100%" height="600px">
                        This browser does not support PDFs. Please download the CV to view it: 
                        <a href={PrashantCVRESUME} download>Download CV</a>.
                    </iframe>
                </div>
                <a href={PrashantCVRESUME} download>
                    <button className="log-in">Download CV</button>
                </a>
            </div>
        </section>
    );
}

export default CVSection;
