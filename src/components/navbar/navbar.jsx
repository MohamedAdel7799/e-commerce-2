import React from "react";
import"./navbar.css"




function Navbar(){

   

    return(
       
      <>
      <div className=" position-static    ">
      <nav className="navbar navbar-expand-lg p-1 bg-light    " >
        <div className="d-flex justify-content-between w-100  " >
          <div className="text-start  w-25 text-center ">
            <img className=" img-fluid   " style={{width:"100px"}} src={require('./kisspng-woocommerce-computer-icons-portable-network-graphi-5b6ef27e0eaf30.7504378015339976940602.png')} ></img>
          </div>
          <div className="my-auto">
             
          </div>
          
          <div className=" my-auto  " >
             <ul className=" list-unstyled d-flex justify-content-around fw-bold    ">
                <li className="mx-3">watch list</li>
                <li className="mx-3"> cart</li>
                <li className="mx-3">account</li>
             </ul>

          </div>

        </div>

      </nav>
      <nav className="navbar navbar-expand-lg p-0 ">
          <div className=" container-fluid  " style={{backgroundColor:"#009090"}}>
            <button className="navbar-toggler mx-1  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse   fw-semibold  justify-content-center  " id="navbarSupportedContent">
              <ul className="navbar-nav  ">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">All Category</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active  " href="#todaysdeals">Today's Deals</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active " href="#hotoffers">Hot Offers</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active " href="#">Gift Cards</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active " href="#menuitems">Menu Items</a>
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
