import axios from "axios"


export const signIn = (mail) => {
    
    axios.put('http://localhost:5500/loggedin/1',{loggedin:"true",email:mail})
    .then( r => console.log(r))
    .catch( e =>console.log(e))
    
}


export const signOut = () => {
    axios.put('http://localhost:5500/loggedin/1',{loggedin:"false"})
    .then( r => console.log(r))
    .catch( e =>console.log(e)) 
    
}

