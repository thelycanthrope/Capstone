

import ADD_PRODUCT from './actionType'

 const addProduct = (data) => {
    return{
        type:ADD_PRODUCT,
        payload:data
    }
}
export default addProduct