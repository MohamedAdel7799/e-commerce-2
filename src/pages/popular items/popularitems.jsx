import axios from "axios";
import React, { useEffect,  useState ,usecontext } from "react";
import "./popularitems.css"
import { CgChevronDoubleDown ,CgChevronDoubleUp  } from "react-icons/cg";
import { Link } from "react-router-dom";





function PopularItems(){
     
    const {productdata}= usecontext() 
    const[data,setData]=useState([])
    useEffect(()=>{

        axios.get('https://fakestoreapi.com/products').then(res=>(setData(res.data)),
        
        
    )},[])

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
                         data.map((e)=>{
                            return(  
                                <div className="col col-sm-5 text-center  " key={e.id}>
                                   <div className="card h-100 py-3 d-block   rounded-4  shadow  "   >
                                       <div className="h-50 my-auto ">
                                         <img src={e.image} className="img-fluid  " style={{width:"100px"}} />
                                       </div>

                                       <div className=" d-block p-3   " >
                                          <div className="d-flex justify-content-around mx-auto " >  
                                            <h6>{e.category }</h6> 
                                            <h6 className=" text-danger  ">{e.price} $</h6>             
                                          </div>
                                          
                                            <p className="w-75 mx-auto  overflow-hidden pt-1  "  style={{height:"50px"}}>{e.title}</p>
                                            <button className="btn btn-outline-info w-50 rounded-4 btn-sm  " onClick={()=>{localStorage.setItem(e.id , e)
                                            console.log(localStorage.getItem(e.id))}} > <Link to={`/${e.id}`} >show product</Link> </button>
                                            <div></div>

                                    
                                       </div>
                                   </div>
                                </div> ) 
                            })

                    ):( data.slice(0,6).map((e)=>{
                        return(  
                            <div className="col col-sm-5 text-center" key={e.id} >
                               <div className="card h-100 py-3 d-block   rounded-4  shadow  "   >
                                   <div className="h-50 my-auto ">
                                     <img src={e.image} className="img-fluid  " style={{width:"100px"}} />
                                   </div>

                                   <div className=" d-block p-3   " >
                                      <div className="d-flex justify-content-around mx-auto " >  
                                        <h6>{e.category }</h6> 
                                        <h6 className=" text-danger  ">{e.price} $</h6>             
                                      </div>
                                      
                                        <p className="w-75 mx-auto  overflow-hidden pt-1  "  style={{height:"50px"}}>{e.title}</p>
                                        <button className="btn btn-outline-info w-50 rounded-4 btn-sm "  onClick={()=>{localStorage.setItem(e.id , e)
                                        console.log(localStorage.getItem(e.id))
                                        }} > show product </button>
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