import React from "react";
import "./About.css";
import img from "../assets/about2.jpg";
import { Button } from "react-bootstrap";
import {Link} from "react-router-dom";

function About() {
  return (
    <div className="about" id="about">
      <div className="row about-container">
        <div className="col-lg-6 col-sm-12 about-first text-center">
          <img src={img} alt="img" width="70%" />
        </div>

        <div className="col-lg-6 col-sm-12 about-second text-center d-flex flex-column justify-content-center align-items-center p-4">
               <div  
               data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
           <h5> I'm a front-end developer with one year of professional experience.I
            fell in love with coding during my undergraduate study which is when
            i realized sometimes you need to take wrong paths to know which is
            the right one.
          </h5>
          
          <h5>
            I'm interested in learning all kinds of web technologies, but my
            major focus is on React Js.
          </h5></div>
          <span className="d-flex flex-row">
            <Link to="/resume"><Button className="p-2 m-1 d-inline resume-button" data-aos="fade-left" data-aos-offset="200"     data-aos-duration="2000" data-aos-delay="550"   data-aos-easing="ease-in-out">Resume</Button></Link>
            
            <Button className="p-2 m-1 d-inline github-button"    data-aos-easing="ease-in-out"           data-aos="fade-right"     data-aos-duration="2000"
    data-aos-offset="200"
    data-aos-delay="550">
              <a href="https://github.com/KeerthanaAnandan" target="_blank">
                Github
              </a>
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;
