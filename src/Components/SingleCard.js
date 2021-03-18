import React from "react";
import { Card, Button } from "react-bootstrap";
import "./SingleCard.css";


function SingleCard({Items}) {
  return (
    <div className="single row text-center">
      {
      Items.map((item) => {
    
      return <Card className="single-single-card  col-md-4 text-center" key={item.id}  data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out">
        
        <Card.Body className="card-body text-center">
        <Card.Img variant="top" src={item.img} className="single-image" />
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <a href="#" className="text-center">
            <Button variant="primary" className="text-center single-button">
              <a href={item.url} target="_blank">Live</a>
            </Button>
          </a>
        </Card.Body>
      </Card>
})}
    </div>
  );
}

export default SingleCard;
