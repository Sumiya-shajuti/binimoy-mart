import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddProducts.css'
import Manage from '../Manage/Manage'

const AddProducts = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setIMageURL] = useState(null);

    const onSubmit = data => {
        const productData = {
            name: data.name,
            price: data.price,
            weight: data.weight,
            imageURL: imageURL
        };
        const url = ` https://rhubarb-surprise-12760.herokuapp.com/addProduct`;

        console.log(productData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => console.log('server side response', res))
    };


    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '78aa26fbd49b5c4de5b5f68eb80c6dfa');
        imageData.append('image', event.target.files[0]);


        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setIMageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (

        <div>
            {/*  Side navigation  */}
            <div class="sidenav">
                <h2 className="brand">BINIMOY MART</h2>
                <a href="./addProducts">Add Product</a>
                <br />
                <a href="./manager">Manage History</a>
                <br />
                <a href="#">Contact</a>
            </div>

            {/*  Page content  */}


            <div class="main">

                <h5>Add Product</h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* <h6>New Product</h6> */}
                    <input name="name" defaultValue="Add new product" ref={register} />
                    <br />
                    {/* <h6>Add Price</h6> */}
                    <input name="price" defaultValue="Price" ref={register} />
                    <br />
                    {/* <h6>Weight</h6> */}
                    <input name="weight" defaultValue="Weight" ref={register} />
                    <br />
                    {/* <h6>Add Photo</h6> */}
                    <input name="exampleRequired" type="file" onChange={handleImageUpload} />

                    <input type="submit" /></form>
            </div>
        </div>
    );
};


export default AddProducts;