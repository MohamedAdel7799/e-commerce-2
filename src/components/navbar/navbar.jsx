import React from "react";
import"./navbar.css"




function Navbar(){

   

    return(
        <nav className="navbar navbar-expand-lg p-0   ">
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
                  <a className="nav-link active  " href="#">Today's Deals</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active " href="#">Hot Offers</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active " href="#">Gift Cards</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active " href="#">Menu Items</a>
                </li>          
              </ul>       
            </div>
          </div>
          <div>
            
          </div>
      </nav>
   
    )
}

export default Navbar
