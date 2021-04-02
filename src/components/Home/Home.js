import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';


const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5055/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div className="row-3">
            {
                products.map(product =><Product key={product} product={product}></Product>)
            }
        </div>
    );
};
// products.map(product =><Product key={product} product={product}></Product>)

export default Home;