import { Link } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
// import Product from '../Product/Product';
import ManageProducts from '../ManageProducts/ManageProducts'


const Manage = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(' https://rhubarb-surprise-12760.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div className="row-3">
            {
                products.map(product =>< ManageProducts key={product} product={product}></ ManageProducts>)
            }
        </div>
    );
};

export default Manage;



