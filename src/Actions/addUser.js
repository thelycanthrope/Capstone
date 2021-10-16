import { addUserr } from "./actions";
import axios from 'axios'

const addUser = (user) => {
    console.log('adduser',user);
    axios.post('http://localhost:5500/users',user)
    .then( (res) => {addUserr(user)})
    .catch( (err) => {console.log(err)})
    
}

export default addUser