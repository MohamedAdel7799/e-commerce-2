import React, { useEffect, useState } from "react"


function Cart(){

    const [cart ,Setcart]=useState([])

    useEffect(
        ()=>{
            Setcart(JSON.parse(localStorage.getItem('cart')))
        }
    ,[cart])



 


   

    

 

   
  
    return(
         <div> 
            {
                cart.map((e)=>{
                    return(
                        <h4>{e.name}</h4>
                    )

                })
            }
            
       
            
           
               
                  
        </div>
    )
}

export default Cart