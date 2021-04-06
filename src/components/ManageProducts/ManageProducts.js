import { Table } from '@material-ui/core';
import React from 'react';

const ManageProducts = (props) => {



      const { name, price, _id } = props.product;

      return (
            <div className="row">
                  <div className=" col-md-7">
                        {/* <h3>{_id}</h3> */}
                        <h4> {name}</h4>
                  </div>
                  <div className=" col-md-5">
                        <h3>{price}</h3>
                        <button onClick="deleteProduct(${_id})">delete</button>
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