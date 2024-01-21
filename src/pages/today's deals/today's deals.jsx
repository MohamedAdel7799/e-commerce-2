import axios from "axios"
import React, { useEffect, useState } from "react"
import"./today's deals.css"



function TodaysDeals(props){
  
    const[data,setData]=useState([]);

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products').then(res=>setData(res.data)) },[])
  
    
    return(
        <div>
            <div className="container w-75" >
                <div className="d-flex justify-content-between ">
                    <h1 className="fw-bolder"> Today's Deals  </h1>
                    <button className="btn" >View More</button>
                </div>
                <div className=" h-auto  mt-5 " >
                <div className=" row gy-3 d-flex row-cols-lg-3 row-cols-sm-2 text-center  ">
                {
                        data.slice(0,6).map((e)=>{
                            return(  
                                <div className="col text-center  " >
                                   <div className="card h-100 py-3  d-block  rounded-4  shadow  " card-title={e.id}  >
                                       <div className="h-50">
                                         <img src={e.image} className="   img-fluid  " style={{width:"100px"}} />
                                       </div>

                                       <div className=" d-block p-3 overflow-hidden product-info " >
                                          <div className="d-flex justify-content-around mx-auto " >  
                                            <h6>{e.category }</h6> 
                                            <h6 className=" text-danger  ">{e.price} $</h6>             
                                          </div>
                                         
                                          <p className="w-75 mx-auto   overflow-hidden   mt-1  "  style={{height:"50px"}} >{e.title}</p>
                                          <button className="btn  w-50 rounded-4 btn-outline-info  btn-flex-sm-wrap  " > show product </button>
                                 
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


export default TodaysDeals