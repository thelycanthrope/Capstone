import axios from 'axios';
import {FETCH_USERS_SUCCESS,ADD_PRODUCT,ADD_USER,FETCH_USERS} from './actionTypes'


export const fetchUsersSuccess = (prods) => {
    
    return{
        type:FETCH_USERS_SUCCESS,
        payload:prods  
    }
}


export const addProduct = (data) => {
    
    return{
        type:ADD_PRODUCT,
        payload:data
    }
}

export const fetchUserrr = (users) => {
    
    return{
        type:FETCH_USERS,
        payload:users  
    }
}

export const addUserr = (data) => {
    
    return{
        type:ADD_USER,
        payload:data
    }
}









export const fetchUser = () => {
    return (dispatch) =>{
        axios.get('http://localhost:5500/users')
        .then( (res) =>{
            
            dispatch(fetchUserrr(res.data))
        })
        .catch ( (err) => {console.log(err)})
    }
    
}




 const fetchData   = () => {
     return (dispatch) =>{
         axios.get('http://localhost:5500/products')
         .then( (response) =>{
             
                dispatch(fetchUsersSuccess(response.data))
         })
         .catch( (error) => {
                console.log(error);
         })
     }
    
}
export default fetchData