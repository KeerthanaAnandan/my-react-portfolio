import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Carousel.css";
import brittney from "../assets/brittney.jpeg";
import mila from "../assets/mila.jpg";
import stewart from "../assets/stewart.jpg";
import danny from "../assets/danny.jpg";
import laura from "../assets/laura.jpg";
import ksalone from "../assets/ksalone.png";

function  CarouselSlide (){

    return (
      <div>
        <h1 className="text-center ">Testimonials from Fiverr Clients</h1>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
        
      >
        <div >
          <img src={brittney} />
          <div className="myCarousel">
           
            <h3>Brittney</h3>
                <p>
                  Working with Keerthana was amazing. She exceeded my
                  expectations and worked in a quick and professional manner.
                  She was very helpful and answered all of my questions along
                  the way! I would recommend her to anyone.
                </p>
          </div>
        </div>
        <div >
          <img src={mila} />
          <div className="myCarousel">
          <h3>Mila</h3>
                <p>
                  I was immensely impress with the result of the work that anan
                  did for my company. She has attention to detail and was able
                  to communicate and understand what I needed and delivered on
                  time. I trust that she will do amazing work for you as well.
                </p>
          </div>
        </div>
        <div >
          <img src={brittney} />
          <div className="myCarousel">
          <h3>Stewartwhicker</h3>
                <p>
                  keerthana_anand was fantastic to work with. Very fast and
                  professional.
                </p>
          </div>
        </div>
        <div >
          <img src={brittney} />
          <div className="myCarousel">
          <h3>Laura Moon</h3>
                <p>
                  The seller has been really easy to work with. Time was taken
                  to validate my needs before beginning the work. I am very
                  impressed and pleased with the final results.
                </p>
          </div>
        </div>
        <div >
          <img src={brittney} />
          <div className="myCarousel">
          <h3>Danny Martins</h3>
                <p>
                  We are very happy with the end result of our quiz!
                  Communication was great and all tweaks were made without any
                  issue. Thank you!!
                </p>
          </div>
        </div>
        <div >
          <img src={brittney} />
          <div className="myCarousel">
          <h3>Ksalone</h3>
                <p>
                  She was definitely patient and considerate. She took my ideas
                  and created it perfectly. I definitely plan to use her again.
                  Highly recommended.
                </p>
          </div>
        </div>

      </Carousel>
      </div>
    );
  }

export default CarouselSlide;