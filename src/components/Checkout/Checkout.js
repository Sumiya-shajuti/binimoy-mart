
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useForm } from "react-hook-form";


// const Checkout = () => {
//     const { register, handleSubmit, watch, errors,name } = useForm();
//     const { _id } = useParams();
//     const [product, setProducts] = useState([]);
// const items =product.find( td => td._id==_id)
//     console.log(items)
//     useEffect(() => {
//         fetch('http://localhost:5055/products')
//         .then(res => res.json())
//         .then(data => setProducts(data))
//     }, [])

//     const onSubmit = data => {
//         const ordered = {
//             name: data.name,
//             price:data.price,
//             weight:data.weight
          
//         };
//     }
   
//     return (
//         <div>
        
//             <h1>Confirm your order</h1>
//             <form onSubmit={handleSubmit(onSubmit)}></form>
            
//             <img style={{ height: '300px' }} src={product.imageURL} alt="" />
//             <h1>{name}</h1>
//             <form action="/checkout" class="inline">
//                         <button className="main-button float-left submit-button"
//                             onClick={() =>onSubmit( product)}
//                         >Place Order</button>
//                     </form>


//         </div>
//     );




// };

// export default Checkout;

import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const Checkout = () => {
  const { _id } = useParams();
    const [ordered, setOrdered] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch(`http://localhost:5050/products/${_id}=`+loggedInUser.email, {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => setOrdered(data));
    }, [])
    const {name,price} =ordered;
    const user ={
      productName :name,
      productPrice:price
    }

    return (
        <div>
            <h3>You have: {ordered.length}1 ordered product</h3>
                       {
                ordered.map(item => <li key={item._id}>{item.name} from: {(new Date(item.checkIn).toDateString('dd/MM/yyyy'))} to: {(new Date(item.checkOut).toDateString('dd/MM/yyyy'))}</li>)
            }
        </div>
    );
};

export default Checkout;