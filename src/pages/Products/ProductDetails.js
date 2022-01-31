import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory, useLocation, withRouter} from 'react-router-dom'
import {Link} from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './detail.css'
import NavBar from '../../Components/NavBar';


let history;

toast.configure();

function ProductDetails() {
    window.scrollTo(0,0)
   const location=useLocation()
    const [is,setIs]=useState();
    const [topViewed, settopViewed] = useState()
 
    
const category=location.state.category
    
   
   history=useHistory();


    useEffect( () => {
        
   

    setIs(localStorage.getItem('loggedin'))
 
    axios.get('http://localhost:5500/views/1')
.then( (r)=>{
   
     

settopViewed({...r.data})



        switch(category){
    case 'bat':
    topViewed.bat=topViewed.bat+1
        break;

    case 'ball':
        
        topViewed.ball=topViewed.ball+1
 
     break;

    case 'pads':
     
        topViewed.pads=topViewed.pads+1
       
    break;

    case 'gloves':

        topViewed.gloves=topViewed.gloves+1

    break;

    case 'accessories':

        topViewed.accessories=topViewed.accessories+1
    break;

    default:console.log(category);
    
}

topViewed?
axios.put('http://localhost:5500/views/1',topViewed):null
.then(r=>console.log(r))
.catch(e => console.log(e))

}

)
.catch( e => console.log(e))





},[category,topViewed])
 
    return (
        
        <div className="bg-dark text-white">
            <NavBar/>

            {is
         ? <><Link to={{pathname:'/update',state:location}}><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-pencil border mt-2 ml-2 p-1" viewBox="0 0 16 16" data-tip data-for="edit">
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
            </svg></Link> 
            <ReactTooltip id="edit" place="bottom" effect="solid">
                Update Product
            </ReactTooltip> </> 
            : <>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-pencil border mt-2 ml-2 p-1" viewBox="0 0 16 16" data-tip data-for="edit">
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
            </svg>
            <ReactTooltip id="edit" place="bottom" effect="solid">
                Please sign in to Update Product
            </ReactTooltip> </> }


            {is
                ?<button className="btn btn-dark bg-dark float-right border-0 pt-0 pr-0" onClick={delFun.bind(location.state.id)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-trash border  mt-2 mr-2 p-1" viewBox="0 0 16 16" data-tip data-for="delete"   >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
            </svg>
            <ReactTooltip id="delete" place="bottom" effect="solid">
                Delete Product
            </ReactTooltip>
            </button>

            :<>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-trash border float-right mt-2 mr-2 p-1" viewBox="0 0 16 16" data-tip data-for="delete"   >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
            </svg>
            <ReactTooltip id="delete" place="bottom" effect="solid">
                Please sign in Delete Product
            </ReactTooltip>
            </>}

            <br></br>
            <div className="container bg-dark text-white ">
                <div className="row">
                    <div className="col sm">
                    <img src={location.state.url} className="border img-thumbnail rounded mx-3 my-5 bg-dark" alt=""></img>
                    </div>
                    <div className="col sm">
                    <h1>{location.state.pname}</h1>
                    <h2 className="text-center"> <span className="blink">&#8377; {location.state.price} </span></h2>
                   <span >Quantities available</span> <span className="bg-success px-2" > {location.state.quantity}</span>
                   <span className="pl-5"> Manufacturer :</span>     <span className="bg-info px-2"> {location.state.manufacturer}</span>
                    <h3>Product details</h3>
                    <ul>
                    <li> <p>{location.state.description}</p></li>
                    <li> <p>{location.state.description}</p></li>
                    <li> <p>{location.state.description}</p></li>
                    <li> <p>{location.state.description}</p></li>
                    <li> <p>{location.state.description}</p></li>
                    <li> <p>{location.state.description}</p></li>
                    <li> <p>{location.state.description}</p></li>
                    </ul>
                    </div>
                </div>
            </div>
            <br/>
        </div>
    
    )
}

const delFun = (id) => {
    
    const r=window.confirm("are you sure?")
    if(r){
    axios.delete(`http://localhost:5500/products/${id}`)
    .then ( d => console.log(d))
    .catch(err => console.log(err))
    toast.success('Product has been deleted successfully',{position:toast.POSITION.TOP_CENTER})
history.push('/products');

    }
    else{
       
        toast.error('You cancelled the operation',{position:toast.POSITION.TOP_CENTER})
    }
  
  }
export default withRouter(ProductDetails)
