import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Product from '../Product/Product';
import img from '../spinner.png'


const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(' https://rhubarb-surprise-12760.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div className="row-3">
             <div className="product-container">
                {
                    products.length === 0 &&  <img style={{ height: '500px',marginLeft:'450px' }} src={img} alt="" />
                  
                 
                }
            {
                products.map(product =><Product key={product} product={product}></Product>)
            }
        </div>
        </div>
    );
};

export default Home;