import React from "react";
import { Container, Row , Col ,Card, Button } from "react-bootstrap";
import "./SingleCard.css";


function SingleCard({Items}) {
  return (
    <div className="single  text-center">
      <section>
      <Container fluid className="d-flex justify-content-center">
      <Row>
        
      {
      Items.map((item) => {
    
      return   <Col md={{ span: 3 }}>
        <div className="d-flex justify-content-center align-items-center"> 
      <Card className="single-single-card text-center" key={item.id}  data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out">
         <Card.Img variant="top" src={item.img} className="single-image" />
        <Card.Body className="card-body text-center">
       
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <a href="#" className="text-center">
            <Button variant="primary" className="text-center single-button" href={item.url}>
              <a href={item.url} target="_blank">Live</a>
            </Button>
          </a>
        </Card.Body>
      </Card>
      </div>
     </Col>
})}
    </Row>
    </Container>
    </section>
    </div>

  );
 
}

export default SingleCard;
