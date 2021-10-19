import React, {  useEffect,useState} from 'react'

import { NavLink, useHistory,withRouter } from 'react-router-dom'

import log from '../Images/lycan.jpg'


let history;
const st = {
    width: "170px",
    height: "45px"
}
const back = {
    backgroundColor: "black",
    borderBottom:"1px solid white"
}


const signOut = () => {
    // axios.put('http://localhost:5500/loggedin/1',{loggedin:"false"})
    // .then( r => console.log(r))
    // .catch( e =>console.log(e)) 
    
    localStorage.clear()
    history.push('/home'); 
     
    // window.location.reload();

}



function NavBar() {

   


history=useHistory();


    const [is,setIs]=useState();
    
  let  pathname=history.location.pathname;


useEffect( () => {
    
    // axios.get('http://localhost:5500/loggedin/1')
    // .then( r => { setIs(r.data.loggedin) })
    // .catch( e => console.log(e))

    setIs(localStorage.getItem('loggedin'))
},[])


  

   
   
    return (

        
    
   

        <div className="here" style={back}>
            {/* <nav>
                    <NavLink exact to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/services">Services</NavLink></nav> */}
            {/* <nav>
                <NavLink exact activeClassName="active" to="/about">About</NavLink>
                <NavLink activeClassName="active" to="/">Products</NavLink>
            </nav> */}

                

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark container">
                <NavLink className="navbar-brand" exact to="/" activeClassName='active'><img src={log} style={st} alt=""/></NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/home" activeClassName='active'>Home</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/TopViewed" activeClassName='active'>TopViewed</NavLink>
                        </li>

                        <li className="nav-item">
                            {is
                            ?<NavLink className="nav-link" to="/userdetails" activeClassName='active'>User Details</NavLink>
                            :null}
                        </li>

                    </ul>
                    {pathname==='/products'
                    ?<form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-light" type="submit" style={{ color: "white", backgroundColor: "black" }}>Search</button>
                    </form>:null}
                    <ul className="navbar-nav mr-auto ml-3">
                        <li className="nav-item navbar-nav ">
                            {!is?
                            <NavLink className="nav-link container-fluid" to="/signIn" activeClassName='active'>Sign In</NavLink>
                            :<button className="btn btn-dark bg-dark text-light container-fluid"   onClick={signOut}>Sign Out</button>}
                        </li>
                    </ul>
                </div>



            </nav>

        </div >
       
    )
    
}

export default withRouter(NavBar)



