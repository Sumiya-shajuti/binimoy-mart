import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Ordered = () => {
    const [ordered, setOrdered] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://rhubarb-surprise-12760.herokuapp.com/ordered?email='+loggedInUser.email, {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => setOrdered(data));
    }, [])

    return (
        <div>
            <h3>You have: {ordered.length} ordered products</h3>
            {
                 ordered.map(order => <li _id={order._id}>{order.name}  Order Date: {(new Date(order.checkOut).toDateString('dd/MM/yyyy'))}</li>)
            }
        </div>
    );
};

export default Ordered;