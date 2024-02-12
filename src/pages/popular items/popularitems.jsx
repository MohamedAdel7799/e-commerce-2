import React, { useContext,   useState  } from "react";
import "./popularitems.css"
import { CgChevronDoubleDown,CgChevronDoubleUp  } from "react-icons/cg";
import { Link } from "react-router-dom";
import { Productcontext } from "../../App";
import ReactStars from "react-rating-stars-component";





function PopularItems(){

  const {productdata}= useContext(Productcontext)

     

    const[viewmor,Setviewmor]=useState(false)
     
     
     const showmore =()=>{
       Setviewmor(true)     
     }

     const showless=()=>{

        Setviewmor(false)
     }
     
    return(
        <div className="    ">
            <div className="container w-75 mb-5 " >
                <div className="d-flex justify-content-between ">
                    <h1 className="fw-bolder"> Popular Items</h1> 
                    { viewmor ? (<button className="btn fw-bold text-info" onClick={showless} > view less {<CgChevronDoubleUp />} </button> )
                    :(<button className="btn fw-bold text-info" onClick={showmore}  > view more {<CgChevronDoubleDown/>} </button> )

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

                                            <div className=" text-center   mt-3 ">
                                              {e.rating.rate <4?(<div className=" d-flex  justify-content-around text-center align-content-center  "> <div><ReactStars
                                                    count={5}   size={24}     Color="#ffd700"  edit={false}     value={3} /></div> <div>in stock {e.rating.count}</div>  </div>):
                                                  (<div className=" d-flex  justify-content-around  text-center align-content-center  "> <div><ReactStars
                                                  count={5}   size={24}     Color="#ffd700"  edit={false}     value={4} /></div> <div>in stock {e.rating.count}</div>  </div>)} 
                                               
                                            </div>
                                            <button className="btn btn-info w-50 rounded-4 btn-sm  " 
                                             > <Link className=" text-decoration-none fw-bold  text-light  " to={`/${e.id}`} >show Details</Link> </button>
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
                                        <div className=" text-center   mt-3 ">
                                              {e.rating.rate <4?(<div className=" d-flex  justify-content-around text-center align-content-center  "> <div className=" p-0 m-0  "><ReactStars
                                                    count={5}   size={24}     Color="#ffd700"  edit={false}     value={3} /></div> <div className=" p-0 m-0  ">in stock {e.rating.count}</div>  </div>):
                                                  (<div className=" d-flex  justify-content-around text-center "> <div><ReactStars
                                                  count={5}   size={24}     Color="#ffd700"  edit={false}     value={4} /></div> <div className=" p-0 m-0  ">in stock {e.rating.count}</div>  </div>)} 
                                               
                                            </div>
                                        <button className="btn btn-info w-50 rounded-4 btn-sm "   > <Link to={`/${e.id}`} className=" text-decoration-none fw-bold text-light  "> Show Details </Link> </button>
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