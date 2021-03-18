import React from "react";
import "./Portfolio.css";
//import { Card, Button } from "react-bootstrap";
import SingleCard from "./SingleCard";
import ecom from "../assets/ecom.png";
import pic from "../assets/pic.png";
import pro from "../assets/pro.png";
import praga from "../assets/praga.png";
import task from "../assets/task.png";
import quiz from "../assets/quiz.png";
import news from "../assets/newsgrid.png";
import edge from "../assets/edge.png";
import hotel from "../assets/hotelindex.png";


function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1 className="text-center m-4 text-light">Project Portfolio</h1>
      <div className="row">
      <div className="col-md-3 portfolio-single-card">
          <SingleCard
            img={ecom}
            title={"Ecom App"}
            description={"i want to fly"}
            url={"https://react-ecom-app-f98aa.web.app/"}
          />
        </div>
        <div className="col-md-3 portfolio-single-card">
          <SingleCard
            img={pic}
            title={"Photo Downloader"}
            description={"Conquer the sky"}
            url={"https://pickyourpic.netlify.app"}
          />
        </div>
        <div className="col-md-3 portfolio-single-card">
          <SingleCard
            img={pic}
            title={"Esha App"}
            description={"i want you by my side"}
          />
          </div>
          <div className="col-md-3 portfolio-single-card">
          <SingleCard
            img={pic}
            title={"Esha App"}
            description={"i want you by my side"}
          />
          </div>
             
        <div className="col-md-3 portfolio-single-card">
          <SingleCard
            img={pro}
            title={"Ecom App"}
            description={"i want to fly"}
            url={"https://kaykosmetics.netlify.app/"}
          />
        </div>
        <div className="col-md-3 portfolio-single-card">
          <SingleCard
            img={task}
            title={"Girly Task List"}
            description={"Conquer the sky"}
            url={"https://girlytask.netlify.app/"}
          />
        </div>
        <div className="col-md-3 portfolio-single-card">
          <SingleCard
            img={quiz}
            title={"Fiverr Quiz Apps"}
            description={"i want you by my side"}
            url={"https://quizportfolio.netlify.app/"}
          />
        </div>
      
        
        <div className="col-md-3 portfolio-single-card">
          <SingleCard
            img={news}
            title={"Ecom App"}
            description={"i want to fly"}
            url={"https://kaykosmetics.netlify.app/"}
          />
        </div>
        <div className="col-md-3 portfolio-single-card">
          <SingleCard
            img={hotel}
            title={"Girly Task List"}
            description={"Conquer the sky"}
            url={"https://girlytask.netlify.app/"}
          />
        </div>
        <div className="col-md-3 portfolio-single-card">
          <SingleCard
            img={praga}
            title={"Fiverr Quiz Apps"}
            description={"i want you by my side"}
            url={"https://quizportfolio.netlify.app/"}
          />
        </div>
        <div className="col-md-3 portfolio-single-card">
          <SingleCard
            img={edge}
            title={"Fiverr Quiz Apps"}
            description={"i want you by my side"}
            url={"https://quizportfolio.netlify.app/"}
          />
        
        </div>
        </div>
     
    </div>
  );
}

export default Portfolio;
