import React, { createContext, useState } from 'react';
import './App.css';
import Admin from './components/Admin/Admin'
import Home from './components/Home/Home'
import Manager from './components/Manage/Manage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import Header from './components/Header/Header'
import Deals from './components/Deals/Deals.js'
import NotFound from './components/NotFound/NotFound'
import Login from './components/Login/Login'
import AddProducts from './components/AddProducts/AddProducts'
import Orders from './components/Order/Order'
import Checkout from './components/Checkout/Checkout';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <h1>{loggedInUser.name}</h1>
      <div>
        <div className="Header">

          <Router>
            <Header />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route path="/addProducts">
                <AddProducts />
              </Route>

              <Route path="/manager">
                <Manager />
              </Route>
              <Route path="/login">

                <Login></Login>
              </Route>
              <Route path="/admin">
                <Admin></Admin>
              </Route>

              <Route path="/product/:_id">
                <Orders />
              </Route>

              <Route path="/deals">
                <Deals />
              </Route>

              <Route path="/checkout">
                <Checkout />
              </Route>

              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="*">

                <NotFound></NotFound>
              </Route>

            </Switch>
          </Router>
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;