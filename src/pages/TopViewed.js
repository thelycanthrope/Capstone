import axios from 'axios';
import React, { useEffect,useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import NavBar from '../Components/NavBar';

import './page.css'


let data  ;



const styles ={
width:"600px",
height:"600px"
}


const options ={
  title:{
    display:true,
    text:'Top Viewed Products'
  }
}

const TopViewed = () => {
  const [bat, setBat] = useState()
  const [ball, setBall] = useState()
  const [gloves, setGloves] = useState()
  const [pads, setPads] = useState()
  const [accessories, setAccessories] = useState()
 
 
    axios.get('http://localhost:5500/views')
    .then( (r)=>{
     
      setBat(r.data[0].bat)
      setGloves(r.data[0].gloves)
      setPads(r.data[0].pads)
      setBall(r.data[0].ball)
      setAccessories(r.data[0].accessories)

      

      })
    .catch( e => console.log(e))
 
    


   data={
    labels: ['Bat','Ball','Gloves','Pads','Accessories'],
    colot:['rgba(255,255,255)',
    'rgba(255,255,255)',
    'rgba(255,255,255)',
    'rgba(255,255,255)',
    'rgba(255,255,255)'],
    
    datasets: [
      {
        data: [bat,ball,gloves,pads,accessories],
        backgroundColor:[
          'rgba(255,99,132)',
          'rgba(255,205,86)',
          'rgba(54,162,235)',
          'rgba(255,159,64)',
          'rgba(153,102,255)'
          ]
        
      }
    ]
  }
   
   
 const options={
  plugins: {
      legend: {
          labels: {
              // This more specific font property overrides the global property
              font: {
                  size:20,
                  weight:'bold',
                  style:'italic'
              }
              
          }
      }
  }
}
  

  return (
    <div className="bg-dark">
      <NavBar/>
      <br/><br/><br/>
      <br/>
      <h1 className="bg-dark text-white text-center">Top Viewed Products by Category</h1>
      <div className="bg-dark text-white border mt-4 mb-2 mx-auto"   style={{width:"50vh"}}>
        <div className="container text-white">
          <Doughnut data={data}  options={options}/>
          
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
};

export default TopViewed;