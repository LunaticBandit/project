
import React, { useState } from "react"
import { Carousel, Row, Col, Card, Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./CarouselCartaStyles.css"

const CarouselCarta = ({ cardData }) => {
  const [showSplitView, setShowSplitView] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const openSplitView = (card) => {
    setSelectedCard(card);
    setShowSplitView(true);
  };

  const closeSplitView = () => {
    setShowSplitView(false);
    setSelectedCard(null);
  };

  const filledData = [...cardData, ...cardData, ...cardData];

  return (
    <>
      <Carousel interval={null} indicators={false} style={{ marginBottom: "20px", background:"linear-gradient(to bottom right,#1e3c72 0%, #1e3c72 1%, #2a5298 100%, white)"}}>
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
                        <Card.Subtitle style={{ color: "black", margin:"10px 0" }}>{card.nombre}</Card.Subtitle>
                        <Button style={{position:"relative", left:"25%", marginTop:"5px"}} onClick={() => openSplitView(card)}>Ver más</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          )
        ))}
      </Carousel>

      {showSplitView && (
        <div className="carta-ventana">
          
          <div className="ventana-izq">
            <img src={selectedCard.img} alt={selectedCard.title} />
          </div>
          <div className="ventana-der">
            <h2 className="titulo ">{selectedCard.title}</h2>
            <p className="texto">{selectedCard.info}</p>
            <Button className="close-button" onClick={closeSplitView}>Cerrar</Button>
          </div>
        </div>
      )}
    </>
  );
};

export default CarouselCarta;
