import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                                <Nav.Link as={NavLink} to="/packages">Package</Nav.Link>
                                <Nav.Link as={NavLink} to="/blog">Blog</Nav.Link>
                                <Nav.Link as={NavLink} to="/about">About Us</Nav.Link>
                                <Nav.Link as={NavLink} to="/addService">Add Service</Nav.Link>

                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets">More deets</Nav.Link>
                                <Nav.Link eventKey={2} href="#memes">
                                    Dank memes
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

        </div>
    );
};

export default Header;