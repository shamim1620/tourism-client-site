import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const { _id, name, description, price, title } = props.ticket;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            <p> {name}</p>
                            <p>{description}</p>
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