
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';


const Order = () => {
    const { product_id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch('http://localhost:5055/product/' + product_id )
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [product_id])


    return (
        <div>
            <h1>Your Product.</h1>
            {/* <Product showAdd={false} product={product}></Product> */}
            <img style={{ height: '300px' }} src={product.imageURL} alt="" />
            <h1>{product.name}</h1>
            <h3>{product.price}</h3>
            <button className="main-button float-left submit-button"

            >Go to Checklist</button>


        </div>
    );




};

export default Order;

