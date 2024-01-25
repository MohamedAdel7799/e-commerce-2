import React from "react";
import { useParams } from "react-router-dom";


function Showproduct(){
    const {id}=useParams()
    return(
        <div>

          <h1> product {id}</h1>
        
        </div>
        
        )
}

export default Showproduct
