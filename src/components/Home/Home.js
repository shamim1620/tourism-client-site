import React from 'react';
import { Carousel } from 'react-bootstrap';
import tour from '../../media/image/tour.jpg';
import boat from '../../media/image/boat.jpg';
import bridge from '../../media/image/bridge.jpg';
import './Home.css';

const Home = () => {
    return (
        <div className="container">

            <Carousel>
                <Carousel.Item interval={1000} className="carousel-item">
                    <img
                        className="d-block img-fluid"
                        src={tour}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500} className="carousel-item">
                    <img
                        className="d-block "
                        src={boat}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                        className="d-block "
                        src={bridge}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Home;