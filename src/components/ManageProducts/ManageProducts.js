import { Table } from '@material-ui/core';
import React from 'react';

const ManageProducts = ({ product }) => {
      const deleteProduct = id => {
            fetch(`http://localhost:5055/deleteProduct/${id}`, {
                  method: 'DELETE',

            })
                  .then(res => res.json())
                  .then(data => {
                        console.log(data);
                  })
      }
      return (
            <div className="row">
                  <div >
                        <h4> {product.name}</h4>
                  </div>
                  <div >
                        <h3>{product.price}</h3>
                        <button onClick={() => deleteProduct(product._id)}>Delete</button>
                  </div>
            </div>
      );
};

export default ManageProducts;


// import { useStyles } from '@material-ui/pickers/views/Calendar/SlideTransition';
// import React, { useEffect, useState } from 'react';

// const ManageProducts = () => {
//       const classes = useStyles()
//       const[products,setProducts] = useState([]);


//       useEffect(() => {
//             fetch('https://rhubarb-surprise-12760.herokuapp.com/products/')
//                 .then(res => res.json())
//                 .then(data => 
//                     setProducts(data));

//         }, [products])
//         const handleDeleteProduct = (id) =>{
//                         fetch(`http://localhost:5055/deleteProduct/${id}`, {
//                               method: 'DELETE'
//                                                      })
//                               .then((res => res.json())
//                               .then((data => {
//                                     const newData =products.filter((product) => {
//                                           return product._id ! == data._id;
//                                     })
//                                  setProducts(newData)
//                               });
//                   }

//       return (
//             <div>

//             </div>
//       );
// };

// export default ManageProducts;
