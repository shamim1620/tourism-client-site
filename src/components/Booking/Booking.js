import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import useCart from '../../Hooks/useCart';

const Booking = () => {
    const { addToCart } = useCart();
    const { allContext } = useAuth();
    const { user } = allContext;
    const { uid } = user;
    const history = useHistory();
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        fetch(`https://tranquil-springs-05915.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);
    return (
        <div className="container m-5">

            <Row xs={1} md={3} className="g-4">

                <Col>
                    <Card>
                        <Card.Img variant="top" src={service.image_url} />
                        <Card.Body>
                            <Card.Title>{service.title}</Card.Title>
                            <Card.Text>
                                <p className="text-danger">{service.description}</p>
                                <p className="text-danger" >{service.price}</p>
                            </Card.Text>
                            <button onClick={
                                () => {
                                    if (uid) {
                                        addToCart(service);
                                    } else {
                                        history.push('/login');
                                    }
                                }
                            } className="btn btn-warning">Add Cart</button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>

    );
};

export default Booking;