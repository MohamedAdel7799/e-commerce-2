import React from "react";



function Navbar(){

   

    return(
        <nav class="navbar navbar-expand-lg p-0 ">
        <div class="container-fluid   ">
          <button class="navbar-toggler mx-1  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse   fw-semibold  justify-content-center  " id="navbarSupportedContent">
            <ul class="navbar-nav  ">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">All Category</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active  " href="#">Today's Deals</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active " href="#">Hot Offers</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active " href="#">Gift Cards</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active " href="#">Menu Items</a>
              </li>          
            </ul>       
          </div>
        </div>
      </nav>
   
    )
}

export default Navbar
