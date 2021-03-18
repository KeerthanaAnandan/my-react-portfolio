import React from "react";
import { Nav, Navbar } from "react-bootstrap";
//import logo from "../assets/logo.png";
import "./HeaderNav.css";
//import { Link } from "react-router-dom";
import {Link} from 'react-scroll';


function HeaderNav() {
  return (
    <div className="header py-1">
      <Navbar
        expand="lg"

        //style={{ backgroundColor: "rgb(206, 159, 88)"
      >
        <Navbar.Brand href="#home" className=" col-6">
   
        {" "}
            <h2 className="header-logo"  >
              <span>K</span>eerthana<span>A</span>nandan
            </h2>

            
         

          {/* <img src={logo} alt="" width="15%" />*/}
        </Navbar.Brand>
        <div className="header-flex ">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav col-6 ">
            <Nav className="mr-auto">
            <Link activeClass="active" to="home" spy={true} smooth={true}>
               <Nav.Link
               
                className="text-capitalize header-text p-3"
              >
                home
              </Nav.Link></Link>
            
              <Link  to="about" spy={true} smooth={true}>
            <Nav.Link
              
                className="text-capitalize header-text p-3"
              >
                about
              </Nav.Link></Link>
        
           
              <Link  to="portfolio" spy={true} smooth={true}>
              <Nav.Link
               
                className="text-capitalize header-text p-3"
              >
                portfolio
              </Nav.Link>
              </Link>
              <Link  to="contact" spy={true} smooth={true}>
                <Nav.Link
                 // href="#contact"
                  className="text-capitalize header-text p-3"
                >
                  contact
                </Nav.Link></Link>
              
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default HeaderNav;
