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
                    <Carousel.Caption className="text-black">
                        <h3>Travel Whole World</h3>
                        <p>Explorer is your best tour partner</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500} className="carousel-item">
                    <img
                        className="d-block "
                        src={boat}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Safety First</h3>
                        <p>Your safety our responsibility.We have trustable hotel and transpor </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                        className="d-block "
                        src={bridge}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Custom Package</h3>
                        <p>Save money and tour with us. It will be best experience in your life</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Home;