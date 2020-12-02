import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import {useDispatch, useSelector} from 'react-redux';
import data from '../data';
import Product from '../components/Product';

import Rating from '../components/Rating';
import {detailsProduct } from '../actions/productActions';

export default function ProductScreen(props){
	const dispatch = useDispatch();
	const productId = props.match.params.id;
	const [qty, setQty] = useState(1);
const productDetails= useSelector( (state) => state.productDetails);
const { loading, error, product } = productDetails;
useEffect(() => {
	dispatch(detailsProduct(productId));
},[dispatch, productId]);
	const addToCartHandler = () =>{
		props.history.push(`/cart/${productId}?qty=${qty}`);
	};
	return <div>

 
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav mx-auto">
      
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle px-5" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Furniture
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>

       <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle px-5" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Electronics
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>

       <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle px-5" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Fashion
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>



      <li className="nav-item px-5">
        <a className="nav-link" href="#">Sellers</a>
      </li>
      <li className="nav-item px-5">
        <a className="nav-link" href="#">Pricing</a>
      </li>

    </ul>
  </div>
</nav>


<div>
{loading? (
	<LoadingBox></LoadingBox>
	) : error ? (
	  <MessageBox variant="danger row center">Cannot load products...Check your Internet Connection</MessageBox>
	  ):(

	
<div className="row top">
<div className="acol-2">
<img className="large" src={product.image} alt={product.name}></img>
</div> 
<div className="acol-1">
<ul>
<li>
<h1>{product.name}</h1>
</li>

<li>
<Rating rating={product.rating} numReviews={product.numReviews}></Rating>
</li>

<li>
Price: ${product.price}</li>
<li>
Description:
<p>{product.description}</p>
</li>

</ul>
</div>
<div className="acol-1">
<div className="acard acard-body">
<ul>
<li>
<div className="row">
<div>Price</div>
<div className="price">${product.price}</div>
</div>
</li>

<li>
<div className="row">
<div>Status</div>
<div >{product.countInStock>0?<span className="success">In Stock</span>:<span className="danger">Out of Stock</span>}</div>
</div>
</li>
{
	product.countInStock > 0 &&   (
	<>
	<li>
	<div className="row">
	<div>Quantity</div>
	<div>
	<select value={qty} onChange={e => setQty(e.target.value)}>
	{
		[...Array(product.countInStock).keys()].map( x => (
		<option key={x+1} value={x+1}>{x+1}</option>
		))
	}
	</select>
	</div>
	</div>

	
	</li>
	<li>
<button onClick={addToCartHandler} className="primary block">Add to cart</button>

</li>

	</>
	)
}

</ul>
</div>
</div>
</div>

      )}
</div>

			</div>;
}