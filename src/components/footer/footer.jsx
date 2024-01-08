import React from "react"

function Footer(){
     
    return(
       
     
        <footer className=" text-light py-3  " style={{backgroundColor:"#009090"}}>
          <div className="container row mx-auto ">
            <div class=" grid  d-flex justify-content-around ">
               <div class="g-col-lg-3 g-col-md-6 mb-4 mb-md-0   text-start  ">
                   <ul className=" list-unstyled text-dark ">
                        <li><a href={""} className="text-decoration-none text-dark fw-bold " >Shopping With uS </a></li>                
                        <li><a href={""} className="text-decoration-none text-dark" >Making payments</a></li>
                        <li><a href={""} className="text-decoration-none text-dark" >Delivery options</a></li>
                        <li><a href={""} className="text-decoration-none text-dark" >Buyer Protection</a></li>
                        <li><a href={""} className="text-decoration-none text-dark" >Shopping With uS</a></li>
                        <li><a href={""} className="text-decoration-none text-dark" >Shopping With uS</a></li>
                    </ul>
                </div>
               <div class="g-col-lg-3 g-col-md-6 mb-4 mb-md-0   text-start  ">   
                    <ul className=" list-unstyled  ">
                        <li> <a href={""} className="text-decoration-none text-dark fw-bold  " > Customr service</a> </li>                
                        <li><a href={""}  className="text-decoration-none text-dark">Help Center</a></li>
                        <li><a href={""}  className="text-decoration-none text-dark">Terms and Conditions</a></li>
                        <li><a href={""}  className="text-decoration-none text-dark">Consumers (Transcation)</a></li>
                        <li><a href={""}  className="text-decoration-none text-dark">Take our feedback survy</a></li>
                        <li><a href={""}  className="text-decoration-none text-dark">Transaction Service Agreemrnt</a></li>
                    </ul>
                </div>
               <div class="g-col-lg-3 g-col-md-6  mb-4 mb-md-0   text-start ">
                    <ul className=" list-unstyled  " >
                        <li><a href={""} className="text-decoration-none text-dark fw-bold" >Collaborate with us </a></li>                
                        <li><a href={""} className="text-decoration-none text-dark" >partnerships</a></li>
                        <li><a href={""} className="text-decoration-none text-dark" >Affiliate program</a></li>
                        <li><a href={""} className="text-decoration-none text-dark" >DS Center</a></li>
                        <li><a href={""} className="text-decoration-none text-dark" >Take our feedback</a></li>
                        <li><a href={""} className="text-decoration-none text-dark" >Transaction Service Agreement</a></li>
                    </ul>
                </div>
               <div class="g-col-lg-3 g-col-md-6 mb-4 mb-md-0     text-start  ">
                    <ul className=" list-unstyled  ">
                        <li><a href={""} className="text-decoration-none text-dark fw-bold " >Download Our App</a></li>                
                        <li><a href={""} className="text-decoration-none text-dark" >service</a></li>
                        <li><a href={""} className="text-decoration-none text-dark" >service</a></li>             
                    </ul></div>
            </div>
            </div>

            <div class="text-center p-3 text-dark w-100 d-flex justify-content-center mx-auto " style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
              © 2020 Copyright:
    
            </div>
        </footer>
                   
    )
}
export default Footer