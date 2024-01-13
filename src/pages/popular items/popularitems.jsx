import axios from "axios";
import React, { useEffect, useState } from "react";
import "./popularitems.css"




function PopularItems(){
     

    const[data,setData]=useState([])
    useEffect(()=>{

        axios.get('https://fakestoreapi.com/products').then(res=>(setData(res.data))
    )},[])

    
    


    return(
        <div>
            <div className="container w-75 mb-5   " >
                <div className="d-flex justify-content-between ">
                    <h1 className="fw-bolder"> Popular Items</h1>
                    <button className="btn"  >View More</button>
                </div>
                <div className=" h-auto  mt-5   " >
                <div className=" row gy-3   d-flex row-cols-lg-3 row-cols-sm-2 row-cols-xs-2 text-center  ">
                    {
                        data.slice(0,8).map((e)=>{
                            return(  
                                <div className="col col-sm-5 text-center  " >
                                   <div className="card h-100 py-3 d-block   rounded-4  shadow  " card-title={e.id}  >
                                       <div className="h-50 my-auto ">
                                         <img src={e.image} className="img-fluid  " style={{width:"100px"}} />
                                       </div>

                                       <div className=" d-block p-3   " >
                                          <div className="d-flex justify-content-around mx-auto " >  
                                            <h6>{e.category }</h6> 
                                            <h6 className=" text-danger  ">{e.price} $</h6>             
                                          </div>
                                          
                                            <p className="w-75 mx-auto  overflow-hidden pt-1  ">{e.title}</p>
                                            <button className="btn btn-outline-info w-50 rounded-4 btn-sm  " > show product </button>
                                         
                                          
                                       </div>
                                   </div>
                                </div> ) 
                            })}
                    </div>        
                        
                </div>
            </div>

        </div>
    )
}


export default PopularItems