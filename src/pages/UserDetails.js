import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { fetchUser} from '../Actions/actions'
import NavBar from '../Components/NavBar';
import './page.css'


let user={

  email: "",
  password: "",
  fname: "",
  lname:"" ,
  location: "",
  contactno:""

}

function set  (users,email)  {

  for( let i=0;i<users.users.length;i++){
    if(email===users.users[i].email){
      user={...users.users[i]}
      console.log(user);
    }
  }
  
}


const UserDetails = () => {
  const [email,setEmail]=useState()
  

const users=useSelector( state => state )

  const dispatch = useDispatch()
  
  useEffect ( ( ) =>{
    dispatch(fetchUser()) },[dispatch])


  useEffect ( ( ) =>{ 
//     axios.get('http://localhost:5500/loggedin/1')
// .then ( (r) => {setEmail(r.data.email)})
// .catch( err => console.log(err)) 
setEmail(localStorage.getItem('loggedin'))
},[])


console.log(email)


email && users ? set(users,email):console.log('else')



return (
  <div className="bg-dark ">
    <NavBar/>
    
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className="container text-white d-flex justify-content-center ">
      <div className="card text-center bg-dark border" style={{ width: "25rem" }}>
        <div className="card-body">
          <h5 className="card-title" >Welcome, <span className="bg-success ">&nbsp;{user.fname} {user.lname}&nbsp;</span></h5>
          <p className="card-text">Registerd Email: <span className="bg-warning text-dark" style={{fontWeight:"bold"}}>&nbsp;{user.email}&nbsp;</span></p>
          <p className="card-text ">Registered Contact No: <span className="bg-primary" style={{fontWeight:"bold"}}>&nbsp;{user.contactno}&nbsp;</span></p>
          <p className="card-text">Registered Location: <span className="bg-light text-danger" style={{fontWeight:"bold"}}>&nbsp;{user.location}&nbsp;</span></p>
          <div className="card-footer text-muted border">

          </div>


        </div>
      </div>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br> 
  </div>
  );
};

export default UserDetails;
