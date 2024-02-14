import React from "react"
import {  useSelector } from "react-redux"


function Cart(){
    const cartitems = useSelector(state => state.cart.cart)
 
  
    return(

         <div> 
            {cartitems.length==0?(<div className=" vh-100 d-grid  ">
                <div className="m-auto h-75 w-75 bg-light shadow-lg  ">
                  <div className="w-100 p-4 bg-info rounded-top-5  d-flex justify-content-between ">
                    <div className="fw-bolder mx-4">
                        shopping cart
                    </div>
                    <div className="fw-bolder mx-4">icon</div>
                  </div>
                </div>

            </div>):(
            <div className="w-75 mx-auto bg-light shadow-lg my-5 ">
                 <div className="w-100 p-4 bg-info rounded-top-5  d-flex justify-content-between ">
                    <div className="fw-bolder mx-4">
                        shopping cart
                    </div>
                    <div className="fw-bolder mx-4">icon</div>
                  </div>
                <div className="w-100 my-5 ">{cartitems.map((e)=>{
                return (
                    <div className=" container w-100 my-5  ">
                        <div>
                            <ul>
                                <li className=" list-unstyled ">
                                    <div className=" py-3 d-flex justify-content-between">
                                        <div className=" d-flex  ">
                                            <img src={e.image} className=" img-fluid " style={{width:'130px', height:"150"}}></img>
                                            <div className=" my-auto mx-5  ">
                                                <p>{e.title}</p>
                                                <p>{e.price}</p>
                                            </div>
                                        </div>
                                        <div className="text-center mx-3 ">
                                            <div className="d-flex justify-content-around ">
                                                <button className="btn btn-danger"> + </button>
                                                <button className="btn btn-danger"> - </button>
                                            </div>
                                            <div className="">
                                            <button className="btn btn-info my-3"> remove </button>


                                            </div>

                                        </div>

                                       
                                    </div>
                                </li>
                            </ul>

                        </div>
                        

                    </div>
                )


            })}</div>




            </div>) }
           
           
                   
        </div>
    )
}

export default Cart