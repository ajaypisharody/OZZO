import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import 'bootstrap/dist/css/bootstrap.min.css';

 import './font-awesome-4.7.0/css/font-awesome.min.css';
 import data from './data';
 import Product from './components/Product';

 import {BrowserRouter, Route} from 'react-router-dom';
 import HomeScreen from './screens/HomeScreen';
 import ProductScreen from './screens/ProductScreen';
 import RegisterScreen from './screens/RegisterScreen';
 import SigninScreen from './screens/SigninScreen';
 import CartScreen from './screens/CartScreen';
 import PaymentMethodScreen from './screens/PaymentMethodScreen';
 import ShippingAddressScreen from './screens/ShippingAddressScreen';
 import PlaceOrderScreen from './screens/PlaceOrderScreen';
 import OrderScreen from './screens/OrderScreen';
 import OrderHistoryScreen from './screens/OrderHistoryScreen';
 import ProfileScreen from './screens/ProfileScreen';
 import { Link } from 'react-router-dom';
 import { useSelector, useDispatch } from 'react-redux';
 import { signout } from './actions/userActions';
 import PrivateRoute from './components/PrivateRoute';
 
function App() {
  const cart = useSelector(state => state.cart);
  const { cartItems } =cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () =>{
    dispatch(signout());

  }
  return (
    <BrowserRouter>

    <div className="grid-container" style={{fontSize: '1.8rem'}}>


      <header className="row center">
        <div >
          <Link className="brand" to="/" style={{textDecoration: 'none'}}><img src="/img/logo.png" style={{height: '70px'}}></img></Link>
        </div>

  <div className="search-container" style={{paddingTop: '0px',paddingLeft:'3rem'}}>
    <form action="/action_page.php">
      <input type="text" placeholder="Search a product" name="search" style={{paddingTop: '0px',width: '25em',fontFamily:'Helvetica',borderRadius: '0.5rem'}}/>
    <Link to="search.html"><i className="fa fa-search fa-lg" aria-hidden="true" style={{color:'white'}}></i></Link>
    </form>
  </div>

        <div style={{paddingLeft: '8rem'}}>
<Link to="/wishlist"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-bookmark-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M4 0a2 2 0 0 0-2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4zm4 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
</svg></Link>

        <Link to="/cart"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-cart4" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
</svg>
{cartItems.length> 0 && (
  <span className="badge">{cartItems.length}</span>
  )}
</Link>

{userInfo ? (
    <div className="dropdown">
      <Link to ="#"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <path fillRule="evenodd" d="M2 15v-1c0-1 1-4 6-4s6 3 6 4v1H2zm6-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg> 
 &nbsp;{userInfo.name} <i className="fa fa-caret-down"></i> </Link>{' '}
 <ul className="dropdown-content">
 <li>
<Link to="/profile">Profile</Link>
 </li>
 <li>
 <Link to="/orderhistory">OrderHistory</Link>
 </li>
 
 <li>
<Link to="#signout" onClick={signoutHandler}>Sign Out</Link>
 </li>
 </ul>
 </div>
      ) : (
<Link to="/signin" >
          <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <path fillRule="evenodd" d="M2 15v-1c0-1 1-4 6-4s6 3 6 4v1H2zm6-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>
        </Link>
        
      )
}
{
  userInfo && userInfo.isAdmin && (
    <div className="dropdown">
    <Link to="#admin">Admin {' '} <i className="fa fa-caret-down"></i></Link>
    <ul className="dropdown-content">
    <li>
    <Link to ="/dashboard">Dashboard</Link>
    </li>
    <li>
    <Link to ="/productList">Products</Link>
    </li>
    <li>
    <Link to ="/orders">Orders</Link>
    </li>
    <li>
    <Link to ="/userList">Users</Link>
    </li>
    </ul>
    </div>
    ) 
}
        

        </div>
     
</header>

  



      <main>

<Route path="/cart/:id?" component={CartScreen} ></Route>


<Route path="/product/:id" component={ProductScreen}></Route>

<Route path="/signin" component={SigninScreen}></Route>

<Route path="/register" component={RegisterScreen}></Route>
<Route path="/shipping" component={ShippingAddressScreen}></Route>
<Route path="/payment" component={PaymentMethodScreen}></Route>
<Route path="/placeorder" component={PlaceOrderScreen}></Route>
<Route path="/order/:id" component={OrderScreen}></Route>
<Route path="/orderhistory" component={OrderHistoryScreen}></Route>
<PrivateRoute path="/profile" component={ProfileScreen}></PrivateRoute>

<Route path="/" component={HomeScreen} exact></Route>

      </main>
      

      <footer className="row center" style={{textAlign: 'center'}}>
        OZZO Copyright 2020
        
      </footer>


    </div>
    </BrowserRouter>
      );
}

export default App;
