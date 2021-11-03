import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="bg-dark text-white">

            <Row>
                <Col xs="6" lg="3">
                    <h1>Explorer</h1>
                    <br />
                    <p className="d-flex align-items-center">Find best deals at Explorer.com.bd for Flight Tickets, Hotels, Holiday Packages. Book cheap air tickets , customized holiday packages and special deals on Hotel.</p>
                </Col>
                <Col xs="6" lg="3">
                    <h2>Contact Us</h2>
                    <br />
                    <div className='d-flex justify-content-center align-items-center'>
                        <div>
                            <h3 className="p-3"><i class="fas fa-phone-alt"></i></h3>
                        </div>
                        <div>
                            <p>+8801795485747</p>
                            <p>+8801786009537</p>

                        </div>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <div>
                            <h3 className="p-3"><i class="fas fa-envelope-open-text"></i></h3>
                        </div>
                        <div>
                            <a>info@explorer.com</a>
                            <br />
                            <a>support@explorer.com</a>
                        </div>
                    </div>
                </Col>
                <Col xs="6" lg="3">
                    <h2>Suppoort</h2>
                    <br />
                    <p>Contact Us</p>
                    <p>About Us</p>
                    <p>Our Blog </p>
                    <p>Packages</p>
                </Col>
                <Col xs="6" lg="3">
                    <h2>We Accepts:</h2>
                    <br />
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="p-3">
                            <h1><i class="fab fa-cc-visa"></i></h1>
                            <h1><i class="fab fa-cc-mastercard"></i></h1>
                        </div>
                        <div>
                            <h1><i class="fab fa-cc-paypal"></i></h1>
                            <h1><i class="far fa-money-bill-alt"></i></h1>
                        </div>
                    </div>
                </Col>
                <hr></hr>
            </Row>
        </div>
    );
};

export default Footer;