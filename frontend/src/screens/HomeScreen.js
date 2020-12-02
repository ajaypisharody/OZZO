import React, {useEffect } from 'react';

import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import 'bootstrap/dist/css/bootstrap.min.css';


 import Product from '../components/Product';
import data from '../data';

 import MessageBox from '../components/MessageBox';

 import LoadingBox from '../components/LoadingBox';
 import {useDispatch, useSelector } from 'react-redux';

import { listProducts } from '../actions/productActions';
export default function HomeScreen(){
		const dispatch = useDispatch();
	 const productList = useSelector(state => state.productList);
	 const {loading,error, products }= productList;

	useEffect(() => {
		dispatch(listProducts());
	},[]);
	return (
		<React.Fragment>
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

<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={{height: '400px'}}>
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  
  <div className="carousel-inner">
    <div className="carousel-item active">
     <a href="carousel.html"> <img className="d-block w-100 " src="img/1.webp" alt="First slide" style={{height: '400px', borderRadius: '0rem'}}/></a></div>
    <div className="carousel-item">
     <a href="carousel.html"> <img className="d-block w-100 " src="img/2.webp" alt="Second slide" style={{height: '400px', borderRadius: '0rem'}}/></a></div>
    <div className="carousel-item">
     <a href="carousel.html"> <img className="d-block w-100 " src="img/3.webp" alt="Third slide" style={{height: '400px', borderRadius: '0rem'}}/></a></div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>  
<div>

  <div className="row center" style={{paddingTop: '30px'}}>
   {

            data.advert.map(advert=>(
            <div key={advert._id} className="advert">
            <a href={`/advert/${advert._id}`}>
            <img className="advertmedium" src={advert.image} alt={advert.name} /></a>
            </div>
            ))

}
  

</div>
</div>

<div>
{loading? <LoadingBox></LoadingBox>:error?<MessageBox variant="danger row center">Cannot load products...Check your Internet Connection</MessageBox>:

          <div className="row center" style={{paddingTop: '30px'}}>
          {

            products.map(product=>(


            <Product key={product._id} product={product}></Product>
              ))
            
          }
           

             
          </div>
      }
        </div>


    
<div>
  <div className="row center" style={{paddingTop: '30px'}}>
  {
  data.banner.map(banner=>(
        <div key={banner._id} className="advert">
            <a href={`/banner/${banner._id}`}>
            <img className="advertlarge" src={banner.image} alt={banner.name} />
                    </a>
        </div>
       
  ))
  }
</div>
</div>


</React.Fragment>
		);
}