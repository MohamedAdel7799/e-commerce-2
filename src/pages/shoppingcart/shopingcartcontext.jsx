import React, { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";



export const shopingcartcontext = createContext({})

const Cartcontext = ({children})=>{
    const[catritems,Setcartirems]=useState([]);
    const getitemsQuantity =(id)=>{
        return  catritems.find((item)=> item.id == id)?.quantity || 0
    } 

    const increascartquantity =(id)=>{
        Setcartirems((curritems)=>{

            if(curritems.find(item => item.id ===id) == null){
                return[...curritems , {id , quantity:1}]
            }else{
                return curritems.map((item)=>{
                    if (item.id === id ){

                        return {...item ,quantity: item.quantity +1}
                    }else {
                        return item;
                    }
                })
            }
        })

    }


    const decreascartquantity =(id)=>{
        Setcartirems((curritems)=>{

            if(curritems.find(item => item.id ===id) == null){
                return curritems.filter((item)=>item.id!==id)
            }else{
                return curritems.map((item)=>{
                    if (item.id === id ){

                        return {...item ,quantity: item.quantity - 1}
                    }else {
                        return item;
                    }
                })
            }
        })

    }

    const removeitemfromcart =(id)=>{
        Setcartirems((curritems)=>curritems.filter((item)=> item.id !== id))
    };


    return(

        <shopingcartcontext.Provider value={{catritems ,getitemsQuantity, increascartquantity , decreascartquantity ,removeitemfromcart }}>
                        {children}
        </shopingcartcontext.Provider>
    )
}

export default Cartcontext 

export const useCartcontext =()=>{
    return useContext(shopingcartcontext);
}