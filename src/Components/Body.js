import React from "react";
import "./Body.css";
//import img from "../assets/bg1.jpg";
import {Button} from "react-bootstrap";
import {Link} from 'react-scroll';

function Body() {
  return (
    <div className="body" id="home">
      {/*<img src={img} alt="image" className="body-image" />*/}
      <div className="body-text" >
        <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="150" data-aos-duration="1000">
        <h1>Hy, I'm Keerthana Anandan</h1>
        <h4>The React Js Developer</h4></div>
        <Link  to="portfolio" spy={true} smooth={true}>
        <Button className="body-button" data-aos="fade-in"  data-aos-delay="600">View Work</Button>
     </Link>
      </div>
    </div>
  );
}

export default Body;
