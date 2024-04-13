import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";

const CarouselTriple = ({ items }) => {
  return (
    <Container style={{ marginTop: "30px", marginBottom: "30px" }}>
      <Row>
        <Col md={3}>
          <Carousel>
            {items[1].map((item, idx) => (
              <Carousel.Item key={idx}>
                <img
                  className="d-block w-100"
                  src={item.imageUrl}
                  alt={`Slide ${idx}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col md={6}>
          <Carousel>
            {items[0].map((item, idx) => (
              <Carousel.Item key={idx}>
                <img
                  className="d-block w-100"
                  src={item.imageUrl}
                  alt={`Slide ${idx}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col md={3}>
          <Carousel>
            {items[2].map((item, idx) => (
              <Carousel.Item key={idx}>
                <img
                  className="d-block w-100"
                  src={item.imageUrl}
                  alt={`Slide ${idx}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default CarouselTriple;
