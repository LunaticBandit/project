import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Carousel, Card, Button, Row, Col } from "react-bootstrap"

const CarouselCarta = ({ cardData }) => {
  // Llenar el array cardData con elementos duplicados o circulares para asegurar que siempre haya suficientes elementos para mostrar 3 cartas en el carousel
  const filledData = [...cardData, ...cardData, ...cardData];

  return (
    <Carousel interval={null} indicators={false} style={{ marginBottom: "20px", background:"#204294"}}>
      {filledData.map((_, index) => (
        index % 3 === 0 && (
          <Carousel.Item key={index} style={{ margin:"25px 0 25px 100px",width:"85%"}}>
            <Row>
              {filledData.slice(index, index + 3).map((card, i) => (
                <Col key={i} sm={4}>
                  <Card style={{width: "18rem" }}>
                    <Card.Img variant="top" src={card.img} alt={card.title} />
                    <Card.Body>
                      <Card.Title>{card.title}</Card.Title>
                      <Card.Subtitle style={{ color: "black" }}>{card.nombre}</Card.Subtitle>
                      <Button variant="primary">Ver más</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        )
      ))}
    </Carousel>
  );
};

export default CarouselCarta;
