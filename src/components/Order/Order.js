import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Product from '../Product/Product';

import { useContext } from 'react';
import { UserContext } from '../../App';
import { getDatabaseOrder, processOrder } from '../../utilities/databaseManager';
import { Link } from '@material-ui/core';



const Order = () => {

    const { _id } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [product, setProducts] = useState([]);
    const items = product.find(td => td._id == _id)
    console.log(items)
    useEffect(() => {
        fetch('http://localhost:5055/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])



    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = product => {
        
        const order= { ...loggedInUser,...setLoggedInUser };

        fetch('http://localhost:5055/addOrder', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    processOrder();
                    alert('your order placed successfully');
                }
            })

    };

    return (

                <div>
            <div>
            <h1>CheckOut</h1>
            <Product showAdded={false} product={product}></Product>
   
            <p>Your added product <Link to="/product"></Link></p>
            <form action="/checkout" class="inline">
                <button className="main-button float-left submit-button"
                    onClick={() => onSubmit(product)}
                >Place Order</button>
            </form>

        </div>
</div>
    );
};

export default Order;





