
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Product from '../Product/Product';

import { useContext } from 'react';
import { UserContext } from '../../App';
import { Link } from '@material-ui/core';

const Checkout = () => {

    const { _id } = useParams();
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://rhubarb-surprise-12760.herokuapp.com/product/' + _id)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [_id])

    const [product, setProduct] = useState([]);
    const items = product.find(pd => pd._id == _id)
     console.log(items)
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
                {/* <h1>{items.name}</h1> */}
                <Checkout showAdded={false} product={product}></Checkout>
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

export default Checkout;