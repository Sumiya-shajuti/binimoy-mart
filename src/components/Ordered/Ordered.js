import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Ordered = () => {
    const [ordered, setOrdered] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser.email);
    useEffect(() => {
        fetch('http://localhost:5055/ordered?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
               
            }
        })
            .then(res => res.json())
            .then(data => setOrdered(data));
    }, [])

    return (
        <div>
            <h3>You have: {ordered.length} ordered products</h3>
            {
                ordered.map(order => <li _id={order._id}>{order.name} {order.orderTime} </li>)
            }
        </div>
    );
};

export default Ordered;