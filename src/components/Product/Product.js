
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './Product.css'
const Product = (props) => {
    const { imageURL, name, price, _id } = props.product;

    return (
        <div className="product">

            <img style={{ height: '300px' }} src={imageURL} alt="" />
            <h4 className="product-name">{name}</h4>
            <div className="button">
                <h3>{price}</h3>
                <Link to={`/product/${_id}`}>
                    <button>Buy Now</button>


                </Link>
            </div>
        </div>

    );
};

export default Product;

{/* <Link to={"/product/" + _id}>{name}</Link> */ }