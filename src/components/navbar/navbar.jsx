import React, { useEffect, useState } from "react";
import"./navbar.css"
import { Link } from "react-router-dom";
import { FaCartArrowDown ,FaRegUser ,FaMobileAlt  } from "react-icons/fa";
import { UseSelector, useSelector } from "react-redux";
import Swal from "sweetalert2";


function Navbar(props){

  const cartitems=useSelector(state=>state.cart.cart)
   const scroll=(e)=>{
    window.scrollTo({
      top:e.current.offsetTop,
      behavior:"smooth"
    });
   };

   const [user,Setuser]=useState(null)
   useEffect(()=>{

   Setuser(localStorage.getItem('signin')) 
   })

   const logout =()=>{
    localStorage.removeItem('signin')
   }

    return(
       
      <>
      <div className=" ">  
       <nav className="navbar navbar-expand-lg p-0 shadow-sm ">
          <div className=" container-fluid bg-info  " >
            <div className="navbar-brand ">
             <img className="img-fluid mx-3 " style={{width:"100px"}} src={require('./kisspng-woocommerce-computer-icons-portable-network-graphi-5b6ef27e0eaf30.7504378015339976940602.png')} ></img>

            </div>
            <button className="navbar-toggler mx-1  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse    fw-semibold  justify-content-end  " id="navbarSupportedContent">
              <ul className="navbar-nav  ">
                  <li className="nav-item">
                    <Link className="nav-link active fw-bold" onClick={()=>{
                      scroll(props.allcategory)
                    }} aria-current="page">All Category</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active fw-bold" onClick={()=>{
                      scroll(props.popularitems)
                    }}  >Popular items</Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link active fw-bold  " onClick={()=>{
                      scroll(props.todaysdeals)
                    }}  >Today's Deals</Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link active fw-bold" onClick={()=>{
                      scroll(props.hotoffers)
                    }} >Hot Offers</Link>
                  </li>

              
                  <li className="nav-item">
                    <Link className="nav-link active fw-bold" onClick={()=>{
                      scroll(props.footer)
                    }}  >Help</Link>
                  </li>                                  
              </ul>
                           
            </div>
            <div className="collapse navbar-collapse   fw-semibold  justify-content-end  " id="navbarSupportedContent">
              <ul className="navbar-nav  ">
               

                  <li className="nav-item">
                    {!user?(''):( <Link className="nav-link active fw-bold " to='cart' > <span className="" > <i class="fa badge fa-lg fw-bolder text-dark  " value={cartitems.length}>&#xf07a;</i></span> </Link>)}
                   
                  </li>

                  <li className="nav-item">
                    {
                      user?(<Link className="nav-link active fw-bold"  onClick={()=>{
                        const swalWithBootstrapButtons = Swal.mixin({
                          customClass: {
                            confirmButton: "btn btn-success",
                            cancelButton: "btn btn-danger"
                          },
                          buttonsStyling: false
                        });
                        swalWithBootstrapButtons.fire({
                          title: "Are you sure?",
                          text: "You won't logout!",
                          icon: "warning",
                          showCancelButton: false,
                          confirmButtonText: "Yes, logout !",
                          cancelButtonText: "No, cancel!",
                          reverseButtons: true
                        }).then((result) => {
                          if (result.isConfirmed) {
                            swalWithBootstrapButtons.fire({
                              title: "Deleted!",
                              text: "Your succssfuly loged out",
                              icon: "success",
                              
                              
                            })
                          logout() ;
                          } 
                        });
                      }}  >  {<FaRegUser />}   logout </Link>
                      ):( <Link className="nav-link active fw-bold"  to='login' >  {<FaRegUser />}   signin </Link>
                      )
                    }
                  </li>
                       
              </ul>
                           
            </div>
          </div>
      </nav>
      

      </div>
      
      </>
          
       
   
    )
}

export default Navbar
