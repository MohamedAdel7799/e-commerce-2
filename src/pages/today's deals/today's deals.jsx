import axios from "axios"
import React, { useEffect, useState } from "react"



function TodaysDeals(){
  
    const[data,setData]=useState([]);

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products').then(res=>setData(res.data)) },[])
  
    
    return(
        <div>
            <div className="container w-75" >
                <div className="d-flex justify-content-between ">
                    <h1 className="fw-bolder"> Today's Deals</h1>
                    <button className="btn btn-light" >View More</button>
                </div>
                <div className=" h-auto bg-light mt-5 " >
                <div className=" row  d-flex row-cols-lg-3 row-cols-sm-2 text-center  ">
                    {
                        data.map((e)=>{
                            return(  
                                <div className="col" >
                                   <div className="card" card-title={e.id} >
                                    <h3>{e.id}</h3>
                                     <h3>{e.title}</h3>
                                     <h2>{e.category}</h2>
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