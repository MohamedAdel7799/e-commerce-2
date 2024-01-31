import React, { useContext, useEffect, useState } from "react";
import { json, useNavigate, useParams } from "react-router-dom";
import { Productcontext } from "../../App";
import { GoStarFill } from "react-icons/go";
import ReactStars from "react-rating-stars-component";
import Swal from "sweetalert2";



function Showproduct(){
    const {productdata}= useContext(Productcontext)
    const {id}=useParams()

    const navigate=useNavigate()

    
    function addtocart(){
      localStorage.setItem('products',JSON.stringify(productdata))
      localStorage.setItem('incart',JSON.stringify(id))
 


    }


  

    
     
    return(
        <div >  
          
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
                          <div className=" text-center   mt-3 ">
                             <h4> {e.rating.rate <4?(<div className=" d-flex  justify-content-center text-center "> <ReactStars
                                  count={5}                               
                                  size={24}
                                  Color="#ffd700"
                                  edit={false}
                                 value={3} /> </div>)
                                 :
                                 (<div className=" d-flex  justify-content-center text-center "> <ReactStars
                                 count={5}                               
                                 size={24}
                                 Color="#ffd700"
                                 edit={false}
                                value={4} /> </div>)} 
                                </h4>
                          </div>
                          <div className="text-center mt-5  ">
                            <button className="btn btn-primary" onClick={addtocart} > add to cart  </button>
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
