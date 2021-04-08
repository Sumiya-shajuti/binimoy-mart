import { Table } from '@material-ui/core';
import React from 'react';

const ManageProducts = ({product}) => {



      // const { name, price, _id } = props.product;
      const deleteProduct = id => {

      }

      return (
            <div className="row">
                  <div >
                        {/* <h3>{_id}</h3> */}
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


//                          <Table striped bordered hover size="sm">
//   <thead>
//     <tr>

//       <th>Name</th>
//       <th>Price</th>
//       <th>Quantity</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>1</td>
//       <td>{name}</td>
//       <br/>
//       <td>{price}</td>
//     </tr>
//     <tr>
//       <td>2</td>
//      <td>{price}</td> 
//           </tr>
//     <tr>
//       <td>3</td>
//       <td colSpan="2">Larry the Bird</td>
//       <td>@twitter</td>
//     </tr>
//   </tbody>
// </Table> 