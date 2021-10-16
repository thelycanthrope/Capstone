import React, { useState } from 'react'
import './card.css'
import {Link} from 'react-router-dom';
import ProductDetails from './ProductDetails'
const stt={
    
    width: "200px",
    height: "300px",
    verticalAlign: "middle",
    backgroundColor:"black"
}

   




function Products(props) {
    let path=`/products/${props.id}`;
  
    return (
        
        <div  className="bg-dark mr-5">
            
            <div className="col-sm-11 ml-3 mb-3 mt-3 a-section a-spacing-medium carddd shadow-white rounded border" id="cardd" >
                <div className="card text-center align-middle bg-dark "  >
                <Link  to={{pathname:'/products/'+props.id,state:props}} >  <img src={props.url} className="card-img-top my-2 img-thumbnail ml-2" alt="..." style={stt}/></Link>
                        <div className="card-body ">
                        <Link  to={{pathname:'/products/'+props.id,state:props}} > <h5 className="card-title text-center text-light "  id="details" style={{width:"15rem"}}>{props.pname}</h5></Link>
                            <p className="card-text text-center text-light border-bottom-0" id="price">&#8377; {props.price}</p>
                           
                        </div>
                        </div>
                </div>
            </div>
          
        )
    }

    export default Products

