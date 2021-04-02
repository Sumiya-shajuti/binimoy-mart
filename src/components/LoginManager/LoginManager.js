
// import  firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from './firebase.config';
// import Login from '../Login/Login'

// export const initializeLoginFramework = () => {
//     if(firebase.apps.length === 0) {
//         firebase.initializeApp(firebaseConfig);
//     }
// }

// // Handle Google Sign In
// export const handleGoogleSignIn = () => {
//     const googleProvider = new firebase.auth.GoogleAuthProvider();
//     return firebase.auth().signInWithPopup(googleProvider)
//     .then(res => {
//       const {displayName, photoURL, email} = res.user;
//       const signedInUser = {
//         isSignedIn: true,
//         name: displayName,
//         email: email,
//         photo: photoURL,
//         success: true
//       };
//       return signedInUser;
//     })
//     .catch(err => {
//       console.log(err);
//       console.log(err.message);
//     })
//   }

// //   Handle FB Sign In
// // export const handleFbSignIn = () => {
// //     const fbProvider = new firebase.auth.FacebookAuthProvider();
// //     return firebase.auth().signInWithPopup(fbProvider)
// //     .then(res => {
// //         const {displayName, photoURL, email} = res.user;
// //         const signedInUser = {
// //           isSignedIn: true,
// //           name: displayName,
// //           email: email,
// //           photo: photoURL,
// //           success: true
// //         };
// //         return signedInUser;
// //       })
// //       .catch(err => {
// //         console.log(err);
// //         console.log(err.message);
// //       });
// //   }

// //   Handle Sign Out
// export const handleSignOut = () => {
//     return firebase.auth().signOut()
//     .then(res => {
//       const signedOutUser = {
//         isSignedIn: false,
//         name: '',
//         email: '',
//         photo: '',
//         error: '',
//         success: false
//       }
//       return signedOutUser;
//     }).catch(err => {
//         console.log(err)
//       // An error happened.
//     });
//   }

// //   Create User with Email and Password
//   export const createUserWithEmailAndPassword = (name, email, password) => {
//     return firebase.auth().createUserWithEmailAndPassword(email, password)
//     .then( res => {
//       const newUserInfo = res.user;
//       newUserInfo.error = '';
//       newUserInfo.success = true;
//       updateUserName(name);
//       verifyEmail();
//       return newUserInfo;
//     })
//     .catch( error => {
//       const newUserInfo = {};
//       newUserInfo.error = error.message;
//       newUserInfo.success = false;
//       return newUserInfo;
//     });
//  }

// // Sign In with Email and Password
// export const signInWithEmailAndPassword = (email, password) =>{
//     return firebase.auth().signInWithEmailAndPassword(email, password)
//     .then(res => {
//       const newUserInfo = res.user;
//       newUserInfo.error = '';
//       newUserInfo.success = true;
//       return newUserInfo;
//     })
//     .catch(function(error) {
//       const newUserInfo = {};
//       newUserInfo.error = error.message;
//       newUserInfo.success = false;
//       return newUserInfo;
//     });
//  }

// //  Update User Name
// const updateUserName = name =>{
//     const user = firebase.auth().currentUser;

//     user.updateProfile({
//       displayName: name
//     }).then(function() {
//       console.log('user name updated successfully')
//     }).catch(function(error) {
//       console.log(error)
//     });
//   }

// //   Verify Email
// const verifyEmail = () => {
//     const user = firebase.auth().currentUser;
//     user.sendEmailVerification().then(function () {
  
//     }).catch(function (error) {
  
//     });
//   }

// //   Reset Password
// export const resetPassword = (email) =>{
//     const auth = firebase.auth();
//     auth.sendPasswordResetEmail(email).then(function() {
//         // Email sent.
//       }).catch(function(error) {
//         // An error happened.
//       });
// }



// log in
// import React, { useContext, useState } from 'react';
// import { Col, Container, Form, Row } from 'react-bootstrap';
// import { Link, useHistory, useLocation } from 'react-router-dom';
// import './Login.css'
// import Google from '../icons/Group 573.png'

// import {UserContext} from '../../App'
// import { initializeLoginFramework, handleGoogleSignIn, handleSignOut, handleFbSignIn, signInWithEmailAndPassword, resetPassword } from './LoginManager';
// import Home from '../Home/Home';


// const Login = () => {

//     const [loggedInUser, setLoggedInUser] = useContext(UserContext);
//     const history = useHistory();
//     const location = useLocation();
//     const { from } = location.state || { from: { pathname: "/" } };

//     const [user, setUser] = useState({
//         isSignedIn: false,
//         name: '',
//         photo: '',
//         email: '',
//         password: '',
//         error: '',
//         success: false,
//     })

    
//     initializeLoginFramework();

//     const googleSignIn = () => {
//         handleGoogleSignIn()
//         .then(res => {
//             handleResponse(res, true);
//         })
//     }

//     const fbSignIn = () => {
//         handleFbSignIn()
//         .then(res => {
//             handleResponse(res, true);
//         })
  
//     }

//     const signOut = () => {
//         handleSignOut()
//         .then(res => {
//             handleResponse(res, false);
//         })
//     }

//     const handleResponse = (res, redirect) =>{
//         setUser(res);
//         setLoggedInUser(res);
//         if(redirect){
//             history.replace(from);
//         }
//     }    

//     const handleBlur = (e) => {
//         let isFieldValid = true;
//         if(e.target.name === 'email'){
//           isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)
//         }
//         if(e.target.name === 'password'){
//           const isPasswordValid = e.target.value.length > 5;
//           const passwordHasNumber = /\d{1}/.test(e.target.value)
//           isFieldValid = isPasswordValid && passwordHasNumber;
//         }
//         if(isFieldValid){
//           const newUserInfo = {...user};
//           newUserInfo[e.target.name] = e.target.value;
//           setUser(newUserInfo)
//         }
//         // console.log(e.target.value, e.target.name)
//     }

//     const handleSubmit = (e) => {    
//         if(user.email && user.password){
//           signInWithEmailAndPassword(user.email, user.password)
//           .then(res => {
//             handleResponse(res, true);
//           })
//         }
//         e.preventDefault();
//     }

//     return (
//         <div>
//             <Home></Home>
//             <Container style={{marginTop: '50px'}}>
//             <Row>
//                 <Col></Col>
//                 <Col className="form-part">
//                     <h3 style={{textAlign:'center'}}>Login</h3>                    
//                     <Form onSubmit={handleSubmit}>
//                     <Form.Group controlId="formBasicEmail">
//                         <Form.Control name="email" onBlur={handleBlur} style={{border:'none', borderBottom:'1px solid gray'}} type="email" placeholder="Username or Email" required />
//                     </Form.Group>

//                     <Form.Group controlId="formBasicPassword">
//                         <Form.Control name="password" onBlur={handleBlur} style={{border:'none', borderBottom:'1px solid gray'}} type="password" placeholder="Password" required />
//                     </Form.Group>

//                     <div className="form-bottom">
//                         <Form.Group>
//                             <Form.Check type="checkbox" label="Remember Me"/>
//                         </Form.Group>
                        
//                         <Form.Group controlId="formBasicCheckbox">
//                         <Link onClick={() => resetPassword(user.email)} style={{color:'#F9A51A'}}>Forgot Password</Link>
//                         </Form.Group>
//                     </div>

//                     <button style={{width: '100%'}} className="head-button" variant="primary" type="submit">Login</button>

//                     <Form.Group style={{marginTop:'5px', textAlign:'center'}}>
//                         <p>Don't have account? <Link to="/signup" style={{color:'#F9A51A'}}>Create an Account</Link></p>
//                     </Form.Group>
//                     </Form>

//                     <div className="d-flex justify-content-center">
//                         <div style={{borderTop: '1px solid gray', width:'48%'}}></div>
//                         <p style={{marginTop:'-13px'}}>or</p>
//                         <div style={{borderTop:'1px solid gray', width:'48%'}}></div>
//                     </div>

              
//                     <p style={{color: 'red', textAlign:'center'}}>{user.error}</p>
//                     {user.success && <p style={{color: 'green', textAlign:'center'}}>User logged In successfully!</p>}
//                 </Col>
//                 <Col></Col>
//             </Row>
//             </Container>
//         </div>
//     );
// };

// export default Login;