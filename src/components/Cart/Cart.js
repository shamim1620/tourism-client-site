import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const { _id, description, price, title, image_url } = props.ticket;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            <p>{description}</p>
                            <h4>${price}</h4>
                        </Card.Text>

                        <Link to={`/booking/${_id}`} >

                            <button className="btn btn-warning">Book Now</button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default Cart;