import {FETCH_USERS_SUCCESS,ADD_PRODUCT, ADD_USER,FETCH_USERS} from './actionTypes'

    export const initialState={
        
        products:[],
        users:[]
       
    }

 const productReducer = (state:initialState,action) => {
        
     
        switch(action.type){
            
            case FETCH_USERS_SUCCESS:
                return{
                ...state,
                
                products:action.payload
               
            }
            
            case ADD_PRODUCT:return{
                    ...state,
                   products:[...state.products,action.payload]
 
            }


            case ADD_USER:return{
                ...state,
                users:[...state.users,action.payload]
               
        }
        case FETCH_USERS:
            return{
            ...state,
            
            users:action.payload,
            
        }

       



            default:return state
        }
        
    }

    export default productReducer