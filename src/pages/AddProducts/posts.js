 import axios from 'axios'
 import addProduct from './actions'

 function posts  (values)  {
     
        console.log(typeof(values),'valllls');
        axios.post(' http://localhost:5500/products',values)
        .then( (r) => {console.log(r,'adding product')(addProduct(values))})
        .catch( (error) => {console.log(error);} )
    
    
}

export default posts