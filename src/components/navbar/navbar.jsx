import React from "react";
import"./navbar.css"
import { Link } from "react-router-dom";
import { FaCartArrowDown ,FaRegUser ,FaMobileAlt  } from "react-icons/fa";




function Navbar(props){


   const scroll=(e)=>{
    window.scrollTo({

      top:e.current.offsetTop,
      behavior:"smooth"
    });
   };


    return(
       
      <>
      <div className=" ">  
       <nav className="navbar navbar-expand-lg p-0 shadow-sm ">
          <div className=" container-fluid  " style={{backgroundColor:"#009090"}}>
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
                      scroll(props.popularitems)
                    }}  >Popular items</Link>
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
                    <Link className="nav-link active fw-bold " to='cart' >  {<FaCartArrowDown /> } cart </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link active fw-bold" to='login' >  {<FaRegUser />}   login </Link>
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
