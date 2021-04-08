import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const CheckOut = () => {
    const { _id } = useParams();
    const [product, setProduct] = useState([]);
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('https://rhubarb-surprise-12760.herokuapp.com/products/')
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [_id])

    const items = product.find(pd => pd._id == _id)
    console.log(items)
    const check = data => {
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
                        <th>{items?.name}</th>
                        <th>01</th>
                        <th>{items?.price}</th>
                        <th>{items?.price}</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>

                    </tr>

                </table >
            </div>
           <div style={{ width: '80%',margin:'170px',marginLeft:'600px' }} >
            <form action="/checkout" class="inline">
                            <button className="main-button float-left submit-button"
                                onClick={() =>check(product)}
                            >Place Order</button>
                        </form>
                        </div>
           
        </div>

    );
};
export default CheckOut;
 //         <div>
        //             <div>
        //                 <h1>CheckOut</h1>
        //                 {/* <h1>{items.name}</h1> */}
        //                 {/* <CheckOut showAdded={false} product={product}></CheckOut> */}
        //                 <p>Your added product <Link to="/product"></Link></p>
                       
        //             </div>
        //         </div>
        //     );
        // };