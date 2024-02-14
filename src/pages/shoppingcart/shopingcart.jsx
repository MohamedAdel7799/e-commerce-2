import React from "react"
import {  useSelector } from "react-redux"


function Cart(){
    const cartitems = useSelector(state => state.cart.cart)
 
  
    return(

         <div> 
            {cartitems.map((e)=>{
                return (
                    <div>
                        <h1>{e.title}</h1>
                        <h2>{e.price}</h2>

                    </div>
                )


            })}
           
                   
        </div>
    )
}

export default Cart