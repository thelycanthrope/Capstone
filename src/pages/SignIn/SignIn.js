import React, { useEffect } from 'react'
import './signin.css'
import { Formik,Form,Field,ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser} from '../../Actions/actions'
import {toast} from 'react-toastify'
import NavBar from '../../Components/NavBar'




toast.configure();
const initialValues={
  email:"",
  password:""
}
const validationSchema =Yup.object ({
  email:Yup.string().email('Invalid Format').required('Mandatory field'),
  password:Yup.string().required('Mandatory Field') 
})



function SignIn(props) {


  const onsubmit = (values,actions) =>{
    
   
    let i=0;
    let c=false;

    for(i;i<se.users.length;i++)
    {
      if(values.email===se.users[i].email){
        //email matches
        c=true;
        if(values.password===se.users[i].password){
          //passwrod matches
          
          // signIn(values.email)//fires sign in action

          localStorage.setItem('loggedin',values.email)

          toast.success('Credentials mathes...signed in successfully',{position:toast.POSITION.TOP_CENTER})
          props.history.push('/home')
          
          // window.location.reload()
          break;
        }
        else{
         //wrong password
          toast.error('Wrong Password!',{position:toast.POSITION.TOP_CENTER})
          break;
        }
      }
      else{
        //wrong email
        c=false;
      }
    }

    //wrong email
   if(c===false){
    
     toast.error('wrong mail',{position:toast.POSITION.TOP_CENTER})
   }
  
   

  }
  const dispatch=useDispatch();
  const se=useSelector( state => state)
  useEffect ( ( ) =>{
    dispatch(fetchUser());
  },[dispatch])

  
  
console.log('se',se);

    return (
      <div className="bg-dark ">
       <NavBar/>
        <br></br>
        <div className="row">
          
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onsubmit}>

          {/* ***********************signin form************************** */}
          <Form className="container col-sm " id="here2">
            <h3 className="text-white mx-5 "> Sign In</h3>
            <div className="mx-5 px-5 my-5 py-5 border " id="here">
              <div className="form-group ">
                <label htmlFor="exampleInputEmail1" className="text-white">Email address</label>
                <div  className="text-danger"><ErrorMessage name="email"/></div>
                <Field type="email" className="form-control  bg-dark text-white" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"   name="email"/>
                {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
              </div>
              <div className="form-group ">
                <label htmlFor="exampleInputPassword1" className="text-white">Password</label>
                <div className="text-danger"><ErrorMessage name="password"/></div>
                <Field type="password" className="form-control bg-dark text-white" id="exampleInputPassword1" placeholder="Password" name="password" />
              </div>
              <button type="submit" className="btn bg-dark border-white text-white">SignIn</button>
            </div>
          </Form>

                  {/************registration form********************* */  }
          
          </Formik>
          {/* <Register/> */}
          <div className="col-sm border mx-5 mb-3">
            <h1 className="text-white text-center mt-5 py-5">Hello Friend!</h1>
            <h5 className="text-white text-center " style={{fontFamily:'"Times New Roman", Times, cursive'}}>Fill your personal details to start journey with us!</h5>
              <br></br> <br></br>
            <Link to='/register' > <div className="text-center"><button className=" btn btn-dark bg-dark text-white border"> Register</button> </div> </Link>
            </div> 
        </div>
        
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
      </div>
    )
}

export default SignIn
