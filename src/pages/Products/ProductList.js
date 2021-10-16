import React from 'react'
import Products from "./Products";

function ProductList(props) {
   

    let node = props.products && props.products.map(prod=> (
        
        <Products id={prod.id}
            key={prod.id}
            pname={prod.pname}
            price={prod.price} 
            url={prod.url}
            description={prod.description}
            quantity={prod.quantity}
            manufacturer={prod.manufacturer}
            category={prod.category}
            />
        
    ))
   
    
    return (
        <div>
            <div className="container " >
           
                <div className="row">
                    {node}
                </div>
            </div>
        </div>
    )
}

export default ProductList
