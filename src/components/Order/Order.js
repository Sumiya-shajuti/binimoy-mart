import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Product from '../Product/Product';

import { useContext } from 'react';
import { UserContext } from '../../App';
import { Link } from '@material-ui/core';

const Order = () => {

    const { _id } = useParams();
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [product, setProduct] = useState([]);
  
    useEffect(() => {
        fetch('https://rhubarb-surprise-12760.herokuapp.com/product/' + _id)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [_id])

    const item = product.find(td => td._id == _id)
    console.log(item)
    const onSubmit = data => {

        //     const order= { ...loggedInUser,...setLoggedInUser };

        //         fetch(' https://rhubarb-surprise-12760.herokuapp.com/addOrder', {
        //             method: 'POST',
        //             headers: {'Content-Type': 'application/json'
        //             },
        //             body: JSON.stringify(order)
        //         })
        //             .then(res => res.json())
        //             .then(data =>  setProduct(data))

        // },[]);
    }
    return (
        <div>
            <div>
                <h1>CheckOut</h1>
                {/* <h1>{item.name}</h1> */}
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






