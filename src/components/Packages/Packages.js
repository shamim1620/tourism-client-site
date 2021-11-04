import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Cart from '../Cart/Cart';

const Packages = () => {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        const url = `https://tranquil-springs-05915.herokuapp.com/services`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setTickets(data)
                console.log(data)
            })
    }, [])
    return (
        <div className="container mt-4">
            <Row xs={1} md={3} className="g-4">

                {
                    tickets.map(ticket => <Cart
                        key={ticket.id}
                        ticket={ticket}
                    ></Cart>)
                }

            </Row>

        </div>
    );
};

export default Packages;