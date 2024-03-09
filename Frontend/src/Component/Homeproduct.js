import axios from 'axios';
import "./Homeproduct.css";
import React, { useEffect, useState } from 'react'

export default function Homeproduct() {

const [details, setDetails] = useState([]);

useEffect(()=>{
    getDetails()
},[])

const getDetails = async() => {
await axios.get("http://localhost:5500/getallproductslistuser")
.then(response=>{
    console.log(response.data);
console.log(response.data.findDetails12);
setDetails(response.data.findDetails12)
})
.catch(error=>{
    console.log(error.data.message);
})

}

  return (
    <div className='container'>
        {details.length ? details.map((item)=>{
        return(
            <div key={item._id} className='card' style={{width:"18rem"}} >
                <img src={item.image} className='card-img-top' alt='not found1' />
                <div className='col'>{item.name}</div>
                <div className='col'>{item.price}</div>
                <div className='col'>{item.quantity}</div>
                <div className='col'>{item.category}</div>
                <div className='col'>{item.description}</div>
            </div>
        )
 
        }): null}

    </div>
  )
}
