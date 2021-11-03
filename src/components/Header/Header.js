import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const Header = () => {
    const { allContext } = useAuth()
    const { user, logOut } = allContext;
    return (
        <div>

            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand as={NavLink} to="/home">Explorer</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                                <Nav.Link as={NavLink} to="/packages">Package</Nav.Link>
                                <Nav.Link as={NavLink} to="/blog">Blog</Nav.Link>
                                <Nav.Link as={NavLink} to="/guide">Our Guide</Nav.Link>
                                <Nav.Link as={NavLink} to="/about">About Us</Nav.Link>
                                {
                                    user?.email && <Nav.Link as={NavLink} to="/addService">Add Service</Nav.Link>
                                }
                                {user?.email && <Nav.Link as={NavLink} to="/myorder">Orders</Nav.Link>}



                            </Nav>
                            <Nav>
                                {user?.email ?
                                    <Button onClick={logOut} variant="light">Logout</Button> :
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>}

                                <Navbar.Text>
                                    Signed in as: <a href="#login">{user?.displayName}</a>
                                </Navbar.Text>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

        </div>
    );
};

export default Header;