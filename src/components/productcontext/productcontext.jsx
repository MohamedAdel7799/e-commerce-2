import axios from "axios";
import { Children } from "react";
import {  createContext, useEffect, useState   } from "react";


export const productcontext = createContext()

function Productcontextprovider( ){
  
    const [productdata ,Setproductdata]=useState()
    useEffect(()=>{
        axios.get('').then(res=>(Setproductdata(res.data)))
    })

    return(
        
        <productcontext.Provider value={{productdata}}>  
          
        </productcontext.Provider>
        
    )
}

export default Productcontextprovider