import React from "react";
import "./Testimonial.css";
import { Carousel, CarouselItem } from "react-bootstrap";
import brittney from "../assets/brittney.jpeg";
import mila from "../assets/mila.jpg";
import stewart from "../assets/stewart.jpg";
import danny from "../assets/danny.jpg";
import laura from "../assets/laura.jpg";
import ksalone from "../assets/ksalone.png";

function Testimonial() {
  return (
    <div className="testimonial">
      
      <h1 className="text-center text-secondary m-1">Testimonials from Fiverr Clients</h1>
      <Carousel >
        <Carousel.Item key="1" className="text-center">
     
            {/**single testimonial */}
            <div className="single-card text-center">
              <div className="testimonial-image">
                <img
                  className="d-block w-100"
                  src={brittney}
                  alt="First slide"
                />
              </div>
              <div className="testimonial-text">
                {" "}
                <h3>Brittney</h3>
                <p>
                  Working with Keerthana was amazing. She exceeded my
                  expectations and worked in a quick and professional manner.
                  She was very helpful and answered all of my questions along
                  the way! I would recommend her to anyone.
                </p>
              </div>
            </div>
            </Carousel.Item>
            <Carousel.Item key="2">
             {/**single testimonial */}
             <div className="single-card">
              <div className="testimonial-image">
                {" "}
                <img className="d-block w-100" src={mila} alt="Second slide" />
              </div>

              <div className="testimonial-text">
                <h3>Mila</h3>
                <p>
                  I was immensely impress with the result of the work that anan
                  did for my company. She has attention to detail and was able
                  to communicate and understand what I needed and delivered on
                  time. I trust that she will do amazing work for you as well.
                </p>
              </div>
            </div>
            {/**single testimonial */}
            </Carousel.Item>
      <Carousel.Item key="3">
           
            <div className="single-card">
              <div className="testimonial-image">
                <img
                  className="d-block w-100"
                  src={stewart}
                  alt="Second slide"
                />
              </div>

              <div className="testimonial-text">
                <h3>Stewartwhicker</h3>
                <p>
                  keerthana_anand was fantastic to work with. Very fast and
                  professional.
                </p>
              </div>
            </div>
      
            </Carousel.Item>
            <Carousel.Item>
            {/**single testimonial */}
            <div className="single-card">
              <div className="testimonial-image">
                <img className="d-block w-100" src={laura} alt="Second slide" />
              </div>

              <div className="testimonial-text">
                {" "}
                <h3>Laura Moon</h3>
                <p>
                  The seller has been really easy to work with. Time was taken
                  to validate my needs before beginning the work. I am very
                  impressed and pleased with the final results.
                </p>
              </div>
            </div>
            </Carousel.Item>
            <Carousel.Item>
            {/**single testimonial */}
            <div className="single-card">
              <div className="testimonial-image">
                <img className="d-block w-100" src={danny} alt="Second slide" />
              </div>

              <div className="testimonial-text">
                {" "}
                <h3>Danny Martins</h3>
                <p>
                  We are very happy with the end result of our quiz!
                  Communication was great and all tweaks were made without any
                  issue. Thank you!!
                </p>
              </div>
            </div>
            </Carousel.Item>
            <Carousel.Item>
            {/**single testimonial */}
            <div className="single-card">
              <div className="testimonial-image">
                <img
                  className="d-block w-100"
                  src={ksalone}
                  alt="Second slide"
                />
              </div>

              <div className="testimonial-text">
                {" "}
                <h3>Ksalone</h3>
                <p>
                  She was definitely patient and considerate. She took my ideas
                  and created it perfectly. I definitely plan to use her again.
                  Highly recommended.
                </p>
              </div>
           
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Testimonial;
