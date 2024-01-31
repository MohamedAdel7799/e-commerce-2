import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import"./today's deals.css"
import { CgChevronDoubleDown ,CgChevronDoubleUp  } from "react-icons/cg";
import { Link } from "react-router-dom";
import { Productcontext } from "../../App";
import ReactStars from "react-rating-stars-component";



function TodaysDeals(){
  
       const {productdata}=useContext(Productcontext)
        const[viewmor,Setviewmor]=useState(false)
     
     
        let showmore =()=>{
          Setviewmor(true)  
        }
   
        let showless=()=>{
   
           Setviewmor(false)
        }
   
  
    
    return(
        <div>
           <div className="container w-75 mb-5   " >
                <div className="d-flex justify-content-between ">
                    <h1 className="fw-bolder"> today's deals</h1> 
                    { viewmor ? (<button className="btn fw-bold" onClick={showless} > view less {<CgChevronDoubleUp />} </button> )
                    :(<button className="btn fw-bold" onClick={showmore}  > view more {<CgChevronDoubleDown/>} </button> )

                    }
                </div>
                <div className=" h-auto  mt-5   " >
                <div className=" row gy-3   d-flex row-cols-lg-3 row-cols-sm-2 row-cols-xs-2 text-center  ">
                    { viewmor? (
                         productdata.map((e)=>{
                            return(  
                                <div className="col col-sm-5 text-center  " >
                                   <div className="card h-100 py-3 d-block   rounded-4  shadow  " key={e.id}  >
                                       <div className="h-50 my-auto ">
                                         <img src={e.image} className="img-fluid  " style={{width:"100px"}} />
                                       </div>

                                       <div className=" d-block p-3   " >
                                          <div className="d-flex justify-content-around mx-auto " >  
                                            <h6>{e.category }</h6> 
                                            <h6 className=" text-danger  ">{e.price} $</h6>             
                                          </div>
                                          
                                            
                                            <p className="w-75 mx-auto  overflow-hidden pt-1  "  style={{height:"50px"}}>{e.title}</p>
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
                                            <button className="btn btn-info w-50 rounded-4 btn-sm  " onClick={()=>{localStorage.setItem(e.id , e.title)}} > <Link to={`/${e.id}`} className=" text-decoration-none fw-bold text-light  "> Show product </Link> </button>
                                            <div></div>

                                                   
                                       </div>
                                   </div>
                                </div> ) 
                            })

                    ):( productdata.slice(0,6).map((e)=>{
                        return(  
                            <div className="col col-sm-5 text-center  " >
                               <div className="card h-100 py-3 d-block   rounded-4  shadow  " key={e.id}  >
                                   <div className="h-50 my-auto ">
                                     <img src={e.image} className="img-fluid  " style={{width:"100px"}} />
                                   </div>

                                   <div className=" d-block p-3   " >
                                      <div className="d-flex justify-content-around mx-auto " >  
                                        <h6>{e.category }</h6> 
                                        <h6 className=" text-danger  ">{e.price} $</h6>             
                                      </div>
                                      
                                        <p className="w-75 mx-auto  overflow-hidden pt-1  "  style={{height:"50px"}}>{e.title}</p>
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
                                        <button className="btn btn-info w-50 rounded-4 btn-sm "   > <Link to={`/${e.id}`} className=" text-decoration-none text-light fw-bold   "> Show product </Link> </button>
                                        <div></div>

                                               
                                   </div>
                               </div>
                            </div> ) 
                        }))



                    }
                  
                    </div>        
                        
                </div>
            </div>
        </div>
    )
}


export default TodaysDeals