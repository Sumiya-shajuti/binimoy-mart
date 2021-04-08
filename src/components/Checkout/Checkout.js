import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';


const CheckOut = () => {
      const { _id } = useParams();
    console.log(_id);
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState({});
    console.log(product);
    const [loggedInUser, setLoggedInUser] = useContext
        (UserContext);
    useEffect(() => {
        fetch(`http://localhost:5055/product/${_id}`)
            .then(res => res.json())
            .then(data => {
              setProduct(data,"data");
                setLoading(false); 
            })
          
    }, [_id])

  
    const check = (event) => {
        event.preventDefault()
        
        const newOrder = { ...loggedInUser, ...product };
        newOrder.orderTime = new Date().toString()
        setProduct(newOrder)

        console.log(newOrder);
        fetch('http://localhost:5055/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div>
                     <h1>CheckOut</h1>
            <div>
                <table style={{ width: '80%' }} >

                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                  
                    <tr>
                        <th>{product.name}</th>
                        <th>01</th>
                        <th>{product.price}</th>
                        <th>{product.price}</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>

                    </tr>

                </table >
            </div>
            {
                loading ? <p> ...loading
                  </p> :
                    <div style={{ width: '80%', margin: '170px', marginLeft: '600px' }} >

                        <button className="main-button float-left submit-button"
                            onClick={check}
                        >Checkout</button>
                    </div>
            }

        </div>
    );
};
export default CheckOut;
