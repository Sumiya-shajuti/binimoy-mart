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
                <a href="/orders">Orders</a>
                <a href="/login">Login</a>
                <a href="/deals">Deals</a>
                <a href="/addProducts">Admin</a>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                </Form>
                {/* <a href="/addProducts">AddProducts</a> */}

            </nav>
        </div>

    );
};

export default Header;