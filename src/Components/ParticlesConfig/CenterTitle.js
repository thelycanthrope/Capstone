import React from 'react'
import {Link} from 'react-router-dom'

export default function CenterTitle() {
  return (
    
    <div id="text_div " >
      <div className="center_all text-center container d-flex justify-content-center">
        {/* ------------card----------- */}
        <div className="card text-center" id="card" style={{width:"30rem"}}>
            <div className="card-header" id="card-header">
                <h1>Lycan inventory</h1>
            </div>
            <div className="card-body ">
                <h5 className="card-title" id="card-title">Cricket Products</h5>
                <p className="card-text">Click below to explore Cricket products like Bat, Ball, Stumps, Thrower</p>
                
                <Link  to="/products" className="btn btn-dark btn-outline-light" id="demo" >Click to view Products</Link>
              </div>
              <div className="card-footer text-muted" id="text-muted">
                  Keep exploring   
              </div>
        </div>
        {/* ------------CARD END--------------- */}
      </div>
    </div>
    
  );

}