import Carousel from "react-bootstrap/Carousel"
import "bootstrap/dist/css/bootstrap.min.css"
import ImgSlider from "../assets/imgHero1.jpeg"

export default function Hero(){

    return (
        <div className="hero-sec" style={{zIndex:"-1"}}>
      <Carousel>
      <Carousel.Item>
        <img style={{height:"90vh"}}
          className="d-block w-100"
          src={ImgSlider}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:"90vh"}}
          className="d-block w-100"
          src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:"90vh"}}
          className="d-block w-100"
          src="https://images.pexels.com/photos/36487/above-adventure-aerial-air.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>
    )
}

