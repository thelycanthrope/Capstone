import React from 'react'
import {Formik,Form,Field,ErrorMessage, useFormikContext } from "formik"
import * as Yup from 'yup'
import './add.css'
import posts from './posts'

import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Prompt } from 'react-router'
import NavBar from '../../Components/NavBar'


const initialValues={
    pname:"",
	description:"",
	manufacturer:"",
	price:"",
    quantity:"",
    url:"",
    category:""
}

const validationSchema = Yup.object({
    pname:Yup.string().required('Product Name is mandatory field'),
	description:Yup.string().required('Description is mandatory field'),
	manufacturer:Yup.string().required('Manufacturer is mandatory field'),
	price:Yup.string().required('Price is mandatory field') ,
    quantity:Yup.string().required('Quantity is mandatory field'),
    url:Yup.string().required('URL is mandatory field'),
    category:Yup.string().required('Category is Mandetory Field')
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




toast.configure();

function AddProduct(props) {

    const onSubmit = (value) =>{
     
       posts(value);
       toast.success("Product added successfully!")
       props.history.push('/home');
     }

    return (
        <div className="bg-dark">
            <NavBar/>
            
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}  >
            <div> <br></br>
            <br></br>
            <br/>
            <h1 className="text-white text-center">Add New Product</h1>
            <br></br>


          
            <Form className=" container  border rounded "> <PromptIfDirty/>

                <div className=" row">
                <div className="col-sm">
                    <label htmlFor="pname" className="form-label text-white d-flex justify-content-center">Product Nme</label> <span style={{color:"red"}}><ErrorMessage name="pname"/></span>
                    <div className="input-group mb-3">
                        <Field type="text" className="form-control text-white bg-dark" id="pname" name="pname" aria-describedby="basic-addon3" />
                    </div>
                </div>

                <div className="col-sm">
                    <label htmlFor="manufacturer" className="form-label text-white d-flex justify-content-center "> Manufacturer</label><span style={{color:"red"}}><ErrorMessage name="manufacturer"/></span>
                    <div className="input-group mb-3">
                        <Field type="text" className="form-control text-white bg-dark" id="manufacturer" name="manufacturer" aria-describedby="basic-addon3" />
                    </div>
                </div>
                </div>

                <div>
                    <label htmlFor="description" className="form-label text-white d-flex justify-content-center">Description for Product</label><span style={{color:"red"}}><ErrorMessage name="description"/></span>
                    <div className="input-group mb-3">
                        <Field type="text" className="form-control text-white bg-dark" id="description" name="description" aria-describedby="basic-addon3" />
                    </div>
                </div>


                    <div className=" row  ">
                <div className=" col-sm ">
                   <label htmlFor="price" className="form-label text-white d-flex justify-content-center" id="ttttt">Price</label>
                   <span style={{color:"red"}}><ErrorMessage name="price"/></span>
                    <div className="input-group mb-3">
                    <span className="input-group-text text-white bg-dark" id="span">&#8377;</span>  <Field type="text" className="form-control text-white bg-dark  " id="price" name="price" aria-describedby="basic-addon3" />
                    </div>
                </div>


                <div className=" col-sm ">
                   <label htmlFor="quantity" className="form-label text-white d-flex justify-content-center">Quantity</label><span style={{color:"red"}}><ErrorMessage name="quantity"/></span>
                    <div className="input-group mb-3 ">
                        <Field type="text" className="form-control text-white bg-dark " id="quantity" name="quantity" aria-describedby="basic-addon3" />
                    </div>
                </div>

                <div className=" col-sm ">
                   <label htmlFor="category" className="form-label text-white d-flex justify-content-center">Category</label><span style={{color:"red"}}><ErrorMessage name="category"/></span>
                    <div className="input-group mb-3 ">
                        <Field type="text" className="form-control text-white bg-dark " id="category" name="category" aria-describedby="basic-addon3" />
                    </div>
                </div>

                </div>

                <div>
                    <label htmlFor="url" className="form-label text-white fs-3 d-flex justify-content-center">Image URL</label><span style={{color:"red"}}><ErrorMessage name="url"/></span>
                    <div className="input-group mb-3">
                        <span className="input-group-text text-white bg-secondary mr-1" id="basic-addon3">https://exampleimage.com/
                        </span>
                        <Field type="text" className="form-control text-white bg-dark" id="url" name="url" aria-describedby="basic-addon3" />
                    </div>
                </div>

                <div className="">
                    <button type="submit" className="btn text-white w-100 mb-2 bg-dark border" >Submit</button>
                </div>
                
            </Form>
            
            <br></br>
            </div>
            
        </Formik >
        <br></br>
        <br></br>
        <br></br>
        </div>
    )
}


export default AddProduct
