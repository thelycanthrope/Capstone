import { Formik,Form,Field,ErrorMessage, useFormikContext } from 'formik'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { fetchUser } from '../../Actions/actions'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import addUser from '../../Actions/addUser'
import { Prompt, useHistory } from 'react-router'
import NavBar from '../../Components/NavBar'



toast.configure();

const initialValues={
  email:"",
  password:"",
  fname:"",
  lname:"",
    location:"",
    contactno:""
}

const validationSchema = Yup.object({
    email:Yup.string().email('Invalid format').required('Email is mandatory field'),
	password:Yup.string().required('password is mandatory field'),
	fname:Yup.string().required('First Name is mandatory field'),
	lname:Yup.string().required('Last Name is mandatory field') ,
    location:Yup.string().required('Location is mandatory field'),
    contactno:Yup.string().required('Contact No. is mandatory field')
})


const PromptIfDirty = () => {
  const formik = useFormikContext();
  return (
    <Prompt
      when={formik.dirty && formik.submitCount === 0}
      message="Are you sure you want to leave? You have with unsaved changes."
    />
  );
};



function Register(props) {
  const inusers=useSelector( (state) => {return state});
  const history=useHistory()
  const dispatch=useDispatch();
  // const formik = useFormikContext();
  useEffect( () => {
    dispatch(fetchUser())
  },[dispatch])
  let users;
  const onsubmit = (values,actions) => {
  
    let i;
    let ret=false;
    for ( i = 0; i < users.length; i++) {
      if (values.email === users[i].email) {
      ret=true;
      break;
      }
    }
    if(!ret){
      console.log(values,'ret');
      addUser(values);
      actions.resetForm({values:''})
      toast.success('Registration successfull ...sign in to do opertions',{position:toast.POSITION.TOP_CENTER})
      history.push('/signin')
    }
    else{
      toast.error('User Exists with this email',{position:toast.POSITION.TOP_CENTER})
    }
    
  }
  
  (typeof(inusers)!=='undefined')?users=[inusers.users]:console.log();
 


    return (
      <div className="bg-dark">
        <NavBar/>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onsubmit}>
    
            <Form className=" col-sm "><PromptIfDirty/>
          <h3 className="text-white container text-center pt-5">New user?  fill the details to Register</h3>
            <div className="mx-5 px-5 py-5 border">
              <div >
                <label htmlFor="Email1" className="form-label text-white">Email address</label>
                <div style={{color:"red"}}><ErrorMessage name="email"/></div>
                <Field type="email" className="form-control bg-dark text-white" placeholder="email address" id="Email1" aria-describedby="emailHelp"  name="email"/>
              </div>

              <div >
                <label htmlFor="Password1" className="form-label  text-white mt-3">Password</label>
                <div style={{color:"red"}}><ErrorMessage name="password"/></div>
                <Field type="password" className="form-control bg-dark text-white" placeholder="Password" id="Password1"  name="password"/>
              </div>

              <div className="row">

              <div className="col-sm">
                <label htmlFor="userfname" className="form-label text-white mt-3">First Name</label>
                <div style={{color:"red"}}><ErrorMessage name="fname"/></div>
                <Field type="text" className="form-control bg-dark text-white" placeholder="First Name" id="userfname" aria-describedby="emailHelp" name="fname"/>
                </div>
                <div className="col-sm">
                <label htmlFor="uselname" className="form-label text-white mt-3">Last Name</label>
                <div style={{color:"red"}}><ErrorMessage name="lname"/></div>
                <Field type="text" className="form-control bg-dark text-white" placeholder="Last Name" id="uselname" aria-describedby="emailHelp" name="lname"/>
              </div>
              </div>
              <div className="row">

              <div className="col-sm">
                <label htmlFor="location" className="form-label text-white mt-3">Location</label>
                <div style={{color:"red"}}><ErrorMessage name="location"/></div>
                <Field type="text" className="form-control bg-dark text-white" placeholder="location" id="location" aria-describedby="emailHelp" name="location"/>
                </div>
                <div className="col-sm">
                <label htmlFor="contact" className="form-label text-white mt-3">Contact No.</label>
                <div style={{color:"red"}}><ErrorMessage name="contactno"/></div>
                <Field type="text" className="form-control bg-dark text-white" placeholder="contact No." id="contact" aria-describedby="emailHelp" name="contactno"/>
              </div>
              </div>

              <button type="submit" className="btn bg-dark border-white text-white w-100 mt-3">Register</button>
            </div>
            <br/>
            <br/>
            <br/>
           
          </Form>
         

        </Formik>
        </div>
    )
}




export default Register
