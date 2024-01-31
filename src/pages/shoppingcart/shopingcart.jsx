import React, { useContext, useEffect, useState } from "react"
import { Productcontext } from "../../App"


function Cart(){

    const {productdata}=useContext(Productcontext)

    const [cartitems,Setcartitems]=useState([])

    useEffect(()=>{
       Setcartitems(JSON.parse(localStorage.getItem('incart'))) 
    }) 


   

    

 

   
  
    return(
         <div> 
            
           
               
                  
        </div>
    )
}

export default Cart