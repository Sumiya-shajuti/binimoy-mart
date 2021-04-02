import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './Product.css'
const Product = (props) => {
     const {imageURL,name,price,_id} = props.product ;
        
     
    return (
        <div className="product">
            <img style={{height: '300px'}} src={imageURL} alt=""/>
            {/* <h3>{name}</h3> */}
            <h4 className="product-name"><Link to={"/product/"+_id}>{name}</Link></h4>
                    <div className="button">
                    <h3>{price}</h3>
                    <form action="/login" class="inline">
                        <button className="main-button float-left submit-button"
                            onClick={() => props.addProduct( props.product)}
                        >Buy Now</button>
                    </form>

                </div> 
        </div>
    );
};
 
export default Product;