import React from 'react';
import logo from '../Green Cart Icon Grocery Logo.png'
import './Header.css'
import { Link } from 'react-router-dom';

import { FormControl, Form, Button } from 'react-bootstrap';


const Header = () => {
    return (

        <div className="header">
            <div>
                <img style={{ height: '100px' }} src={logo} alt="" />
            </div>
            <nav>

                <Link to="/home">Home</Link>
                <Link to="/checkOut">Order</Link>
                <Link to="/login">Login</Link>
                <Link to="/deals">Deals</Link>
                <Link to="/addProducts">Admin</Link>

            </nav>
        </div>

    );
};

export default Header;