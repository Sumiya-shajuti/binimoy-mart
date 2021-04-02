import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { createContext, useContext, useState } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from "react-router";
import './Login.css'

firebase.initializeApp(firebaseConfig)
function LogIn() {
  const [newUser, setNewUser] = useState(false);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

//   if (firebaseConfig.apps.length ===0){
//       firebase.initializeApp(firebaseConfig)
//   }
  const [user, setUser] = useState({
    isSignIn: false,

    name: '',
    email: '',
    password: ''
  })

  const provider = new firebase.auth.GoogleAuthProvider();
  const handleSignIn = () => {
    firebase.auth().signInWithPopup(provider)
      .then(res => {
        const { displayName, email, password } = res.user;
        const signedInUser = { name: displayName, email, password }
        setLoggedInUser(signedInUser)
        history.replace(from);

      })
      .catch(err => {
        console.log(err);
        console.log(err.message);
      })

  }
  const handleSignOut = () => {
    firebase.auth().signOut()
      .then(res => {
        const signedOutuser = {
          isSignIn: false,
          name: '',
          phone: '',
          email: '',
          error: ''
        }
        setUser(signedOutuser);

      })
      .catch(err => {
        // An error happened
      })
  }
  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === 'email') {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
      // console.log(isEmailValid);

    }
    if (e.target.name === 'password') {
      const isPasswordValid = e.target.value.length > 6;
      const passwordNumber = /\d{1}/.test(e.target.value)
      isFieldValid = isPasswordValid && passwordNumber;

    }

    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
      setLoggedInUser(newUserInfo);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newUser && user.name && user.password) {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const newUserInfo = { ...user }
          newUserInfo.error = ""
          newUserInfo.success = true;
          setUser(newUserInfo)
          setLoggedInUser(newUserInfo);
          history.replace(from);
        })
        .catch((error) => {
          const newUserInfo = { ...user }
          newUserInfo.error = error.message
          newUserInfo.success = false
          setUser(newUserInfo)
        });

    }

    // console.log(user.email,user.password);
    if (user.email && user.password) {
      if (!newUser && user.email && user.password) {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
          .then(res => {
            const newUserInfo = { ...user }
            newUserInfo.error = ""
            newUserInfo.success = true;
            setUser(newUserInfo)
            setLoggedInUser(newUserInfo);
            history.replace(from);
          })
          .catch((error) => {
            const newUserInfo = { ...user }
            newUserInfo.error = error.message
            newUserInfo.success = false
            setUser(newUserInfo)
          });
      }

    
    }
  }

  return (
    <div className="App">

      <h1> Create account</h1>

      <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
      <label htmlFor="newUser">New User Sign up</label>
      <form className="login-form" onSubmit={handleSubmit} form method="login">
        {newUser && <input name="name" onBlur={handleBlur} placeholder="Name" required />}
        <br />
        <input type="text" name="email" onBlur={handleBlur} placeholder=" Email " required />
        <br />
        <input type="password" name="password" onBlur={handleBlur} placeholder="Password" required action="/home" />
        <br />
               {
          newUser ? <input className="accountCreateBtn" type="submit" name="submit" value="Create an account" /> :
            <input className="accountCreateBtn" type="submit" name="submit" value="Log in" />
        }
       

      </form>
      <p style={{ color: 'black' }}>{user.error}</p>
      {
        user.isSignIn ? <button onClick={handleSignOut}>Sign out</button> :
          <button className="sign-form" onClick={handleSignIn}>


            <h5 className="sign-in">Already Sign In?</h5>
            <p> Continue with Google</p> </button>
      }
      {
        user.isSignIn && <div>
          <p> Welcome, {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      }
    </div>
  );
}

export default LogIn;



