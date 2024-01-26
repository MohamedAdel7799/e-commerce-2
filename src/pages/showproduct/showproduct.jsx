import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Productcontext } from "../../App";


function Showproduct(){
    const {productdata}= useContext(Productcontext)
    const {id}=useParams()
    
     
    return(
        <div className=" ">      
          {productdata.map((e)=>{
           
            if(e.id == id ){
               return(
                <div className="vh-100 d-grid">
                    <div className=" row row-cols-auto m-auto h-auto shadow-lg ">
                       <div className="col d-grid w-auto h-auto p-5   ">
                          <div className=" border-1 w-auto  my-auto  ">
                            <img alt="hi" src={e.image}  className="img-fluid" style={{width:"300px"}}></img>
                          </div>
                       </div>  
                       <div className="col w-auto d-grid h-auto p-5 ">
                        <div className="my-auto">
                          <div className="text-center mt-3 fw-bold   ">
                            <h3>{e.category}</h3>
                          </div>
                          <div className="mt-3 ">
                             <h4>{e.title}</h4>
                          </div>
                          <div className="text-center text-danger mt-3 ">
                             <h4>{e.price} $</h4>
                          </div>
                          <div className="text-center mt-5  ">
                            <button className="btn btn-primary" onClick={()=>{  localStorage.setItem(e.id,e)}} > add to cart  </button>
                          </div>
                        </div>                          
                       </div>           
                    </div>
                    
            
                </div>
                )}})}

  
        </div>
        
        )
}

export default Showproduct
