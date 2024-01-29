import axios from "axios";
import React, { useContext, useEffect,  useState  } from "react";
import "./popularitems.css"
import { CgChevronDoubleDown,CgChevronDoubleUp  } from "react-icons/cg";
import { Link } from "react-router-dom";
import { Productcontext } from "../../App";





function PopularItems(){

  const {productdata}= useContext(Productcontext)
     


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
                    <h1 className="fw-bolder"> Popular Items</h1> 
                    { viewmor ? (<button className="btn fw-bold" onClick={showless} > view less {<CgChevronDoubleUp />} </button> )
                    :(<button className="btn fw-bold" onClick={showmore}  > view more {<CgChevronDoubleDown/>} </button> )

                    }
                </div>
                <div className=" h-auto  mt-5   " >
                <div className=" row gy-3   d-flex row-cols-lg-3 row-cols-sm-2 row-cols-xs-2 text-center  ">
                    { viewmor? (
                         productdata.map((e)=>{
                            return(  
                                <div className="col col-sm-5 text-center  " key={e.id}>
                                   <div className="card h-100 py-3 d-block   rounded-4  shadow  "   >
                                       <div className="h-50 my-auto ">
                                         <img alt="hi" src={e.image}  className="img-fluid  " style={{width:"100px"}} />
                                       </div>

                                       <div className=" d-block p-3   " >
                                          <div className="d-flex justify-content-around mx-auto " >  
                                            <h6>{e.category }</h6> 
                                            <h6 className=" text-danger  ">{e.price} $</h6>             
                                          </div>
                                          
                                            <p className="w-75 mx-auto  overflow-hidden pt-1  "  style={{height:"50px"}}>{e.title}</p>
                                            <button className="btn btn-outline-info w-50 rounded-4 btn-sm  " 
                                             > <Link className=" text-decoration-none  " to={`/${e.id}`} >show Details</Link> </button>
                                            <div></div>

                                    
                                       </div>
                                   </div>
                                </div> ) 
                            })

                    ):( productdata.slice(0,3).map((e)=>{
                        return(  
                            <div className="col col-sm-5 text-center" key={e.id} >
                               <div className="card h-100 py-3 d-block   rounded-4  shadow  "   >
                                   <div className="h-50 my-auto ">
                                     <img src={e.image} alt="hi" className="img-fluid  " style={{width:"100px"}} />
                                   </div>

                                   <div className=" d-block p-3   " >
                                      <div className="d-flex justify-content-around mx-auto " >  
                                        <h6>{e.category }</h6> 
                                        <h6 className=" text-danger  ">{e.price} $</h6>             
                                      </div>
                                      
                                        <p className="w-75 mx-auto  overflow-hidden pt-1  "  style={{height:"50px"}}>{e.title}</p>
                                        <button className="btn btn-outline-info w-50 rounded-4 btn-sm "   > <Link to={`/${e.id}`} className=" text-decoration-none  "> Show Details </Link> </button>
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


export default PopularItems