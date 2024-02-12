import React, { useContext, useEffect, useState } from "react";
import {  Link, useParams } from "react-router-dom";
import { Productcontext } from "../../App";
import ReactStars from "react-rating-stars-component";
import { FaShare } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";



function Showproduct(){

    const {productdata}= useContext(Productcontext)
    const {id}=useParams()
    const [data,Setdata] =useState([])
    const [ cartitems,Setcartitems]=useState([])
    const [items, Setitems]=useState([])
    
      function Addtocart(item){
        Setcartitems([...cartitems , item])
        window.localStorage.setItem('cart',JSON.stringify(cartitems))
        Setitems([cartitems])
        window.localStorage.setItem('cartitems',JSON.stringify(items))
      }


   

    useEffect(()=>{
      Setdata(productdata)

    },[])


   


     
    return(
        <div >  
          
          {data.map((e)=>{
           
            if(e.id == id){
               return(              
                <div className="vh-100 d-grid ">
                  <div className="container   d-grid  shadow-lg  rounded-5  my-5   ">
                    <div className="row row-cols-lg-2 row-cols-sm-1    ">
                       <div className="col  text-center h-100 ">
                        <div className=" my-5 ">
                          <img className=" img-fluid " style={{width:"200px"}} src={e.image} ></img>
                        </div>
                       </div>
                       <div className="col">
                               <div className=" d-grid">
                                <div>
                                  <h2 className=" my-2 fw-bolder ">{e.category}</h2>
                                  <h3 className="my-3"  value={e.title} >{e.title}</h3>
                                  <p className="my-3">{e.description}</p>
                                   <div className=" text-start    ">
                                              {e.rating.rate <4?(<div className="  text-start align-content-center  "> <div><ReactStars
                                                    count={5}   size={24}     Color="#ffd700"  edit={false}     value={3} /></div>   </div>):
                                                  (<div className="   text-start   "> <div><ReactStars
                                                  count={5}   size={24}     Color="#ffd700"  edit={false}     value={4} /></div>  </div>)} 
                                               
                                            </div>
                                  <h4 className="my-3"><span className="text-info fw-bolder ">{e.price}$</span> <span className=" fw-normal  text-decoration-line-through ">{e.price +20 }$</span> </h4>
                                 
                                </div>
                                <div className="d-flex my-5 justify-content-start ">
                                  <div> <button className="btn btn-info px-5  " onClick={
                                    ()=>{return(Addtocart([e]))}
                                  }> Add To Cart </button> </div>
                                  <div><button className="btn btn-light mx-2"> {<FcLike/>} </button></div>
                                  <div><button className="btn btn-light mx-2"> {<FaShare/>} </button></div>

                                </div>

                               </div>
                       </div>
                    </div>
                   

                  </div>
                  <div className="my-2 container text-center text-info">
                    <h2>Products associated with this item</h2>
                  </div>
                  <div className=" container text-center row row-cols-lg-3 mx-auto  py-5 g-4 ">
                  { data.filter(product => product.category === e.category && product.title != e.title ).map((product)=>{
                    return(
                      <div className="col   py-5 rounded-5 text-center mx-auto">
                        <div className="h-50">
                           <img src={product.image} className=" img-fluid " style={{width:"100px"}} ></img>

                        </div>
                        <div className="my-3  h-25 ">
                          <p>{product.title}</p>
                          <h6>{product.price} $</h6>
                        </div>
                        <div className="h-25 py-2">
                          <button className="btn btn-info"> show Details </button>
                        </div>
                        

                        
                      </div>
                    )
                  })}

                  </div>      
                </div>


                )}})}

                

  
        </div>
        
        )
}

export default Showproduct
