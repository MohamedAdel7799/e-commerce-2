import axios from "axios";
import {  createContext, useEffect, useState } from "react";


export const productcontext =createContext()

function Productcontextprovider({Children}){
  
    const [productdata ,Setproductdata]=useState()
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products').then(res=>(Setproductdata(res.data)))
    })

    return(
        <>
        <productcontext.Provider value={{productdata}}>    
            {Children}
        </productcontext.Provider>
        </>
    )
}

export default Productcontextprovider