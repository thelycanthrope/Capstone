import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import TopViewed from '../pages/TopViewed';
import AllProductsPage from '../pages/Products/AllProductsPage';
import UserDetails from '../pages/UserDetails';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn/SignIn';
import Footer from './Footer';

import AddProduct from '../pages/AddProducts/AddProduct';
import ProductDetails from '../pages/Products/ProductDetails';
import Update from '../pages/Products/Update';
import Register from '../pages/SignIn/Register';


function Appp() {
    return (
        <div >
            
            <Router>
            
               
            <Switch>
                <Route exact path="/home" component={Home} />
               
                <Route exact path="/TopViewed" component={TopViewed} />
                <Route exact path='/UserDetails' component={UserDetails}/>
                <Route exact path='/signIn' component={SignIn}/>
                <Route exact path='/products' component={AllProductsPage}/>
                <Route exact path='/addproduct' component={AddProduct}/>
                <Route path="/products/" component={ProductDetails} ></Route>
                <Route exact path="/update" component={Update}></Route>
                <Route path='/register' component={Register}></Route>
                <Redirect from="/" to='/home' />
            </Switch>
            </Router>
           
            <Footer/>
        </div>
    )
}

export default Appp
