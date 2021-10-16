import React, { useState, useEffect } from 'react'
import axios from 'axios'


import 'C:/Users/AN20066262/Desktop/CAPSTONE/capstoneproject/node_modules/bootstrap/dist/css/bootstrap.min.css'


function Comp1() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/products')
            .then((res) => { setProducts(res.data) })
            .catch((err) => console.log(err))
    }, [])


    return (
        products.length === 0 ? <h1></h1> :
        
            <div>
                
                <div className="card mb-3" style={{maxWidth: "540px"}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://m.media-amazon.com/images/I/71Lx9l3NivL._AC_UY218_.jpg" alt="..."/>
                        </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div> 


    )
}


export default Comp1
