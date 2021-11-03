import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = (props) => {
    const { _id, description, price, title, image_url } = props.ticket;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" height="220px" src={image_url} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            <p>{description}</p>
                            <h4>${price}</h4>
                        </Card.Text>
                        <div className="button-info">

                            <Link to={`/booking/${_id}`} >

                                <button className="btn btn-warning  m-5">Book Now</button>
                            </Link>
                            <Link to={`/update/${_id}`} >

                                <button className="btn btn-danger">Update</button>
                            </Link>
                        </div>

                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default Cart;