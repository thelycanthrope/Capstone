import { ADD_PRODUCT } from "../Actions/productTypes";
import initialState from '../Actions/productReducer'



 const reducer = (state=initialState,action) => {
    switch(action.type){
        case ADD_PRODUCT:return{
            ...state,
                   prods:[...state.prods,action.payload]
 
            }
            default:return state
        }
    }



export default reducer