import React,{ useEffect, useState,Suspense,lazy} from 'react'
import fetchData from '../../Actions/actions'
import {useSelector,useDispatch} from 'react-redux'
import ReactTooltip from 'react-tooltip';
import { Link} from 'react-router-dom';
import {HashLoader} from 'react-spinners'
import 'react-dropdown/style.css';
import { Field, Form, Formik } from 'formik';
import NavBar from '../../Components/NavBar';
const ProductList=lazy( () => import('./ProductList'))






function AllProductsPage(props) {
    const products= useSelector( (state) => {return state});
    const [flag,setFlag]=useState(false)
    const [array,setArray]=useState([])
    console.log("all prod page",products);
    const dispatch = useDispatch();
  
    const [is,setIs]=useState();
    useEffect( () => {
    //     axios.get('http://localhost:5500/loggedin/1')
    // .then( r => { setIs(r.data.loggedin) })
    // .catch( e => console.log(e))
    dispatch(fetchData())
    setIs(localStorage.getItem('loggedin'))

},[])

  
    const handleSubmit = (values) => {
        
        if(values.options!=='All'){
           setFlag(true)
        setArray( products.products.filter( (prod) =>{
              return (prod.category===values.options.toLowerCase());
        }))}
        else if (values.options==='All'){
           setFlag(false)
        }

    
    }




    return (
        
            <div style={{ backgroundColor: "black" }}>
                
                <NavBar/>
         
                
                 <Formik  initialValues={{category:'options'}} onSubmit={ handleSubmit.bind(products)}>

                    <Form >
                <Field as='select'  name="options" className="bg-dark text-white mr-3 h-100"  data-tip data-for="category">
                <option value="All">All</option>
               
                    <option value="Bat" >Bat</option>
                    <option value="Ball">Ball</option>
                    <option value="Pads">Pads</option>
                    <option value="Gloves">Gloves</option>
                    <option value="Accessories">Accessories</option>
                </Field>
                            <ReactTooltip id="category" place="top" effect="solid" >
                                Select category
                            </ReactTooltip>
                <button type="submit" className=" btn btn-dark text-warning"> Filter</button>
                {is
                        ?<> <Link to="/addproduct" className="btn btn-dark btn-outline-light  float-right"  data-tip data-for="addd">Add Product</Link>
                        <ReactTooltip id="addd" place="bottom" effect="solid" >
                                Add Product
                            </ReactTooltip></>

                        : <>
                            <button className="btn btn-dark btn-outline-light  float-right" data-tip data-for="add"> Add Product</button>
                            <ReactTooltip id="add" place="bottom" effect="solid" >
                                Please Sign in to add
                            </ReactTooltip>
                        </>
                }
              
                </Form>
                </Formik>
                
                
                  
           
            <Suspense fallback={<div className="text-center"><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><HashLoader size={140} color='orange'/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></div>}>
                    
               
                {flag===true
           ?<ProductList products={array}/>
            :typeof(products)!=='undefined'?
            <ProductList products={products.products}/>:null
            }
           
           </Suspense>
           
        </div>
    )
}
export default (AllProductsPage)




