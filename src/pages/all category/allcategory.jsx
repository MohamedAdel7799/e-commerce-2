import React from "react";
import"./allcatregory.css"



function AllCategory(){

    return(
       <div className=" container-fluid mt-5 w-75  py-3  rounded-4 bg-light ">
         <div className="grid row row-cols-lg-4 row-cols-sm-2 row-cols-md-2 d-flex g-sm-3  mx-auto   rounded-5 ">
            
            <div className=" col gx-3 gy-2 ">
                <ul className=" list-unstyled  ">
                    <li className=" mt-2 ">  <a href={""} className=" text-decoration-none text-dark " > Men's Fashion</a>   </li>
                    <li className=" mt-2 ">  <a href={""}  className=" text-decoration-none text-dark "> Women's Fashion</a>   </li>
                    <li className=" mt-2 ">  <a href={""} className=" text-decoration-none text-dark "> Bages & Shoes</a>  </li>
                    <li className=" mt-2 ">  <a href={""} className=" text-decoration-none text-dark "> Jewelry & Watches</a>  </li>
                    <li className=" mt-2 ">  <a href={""} className=" text-decoration-none text-dark "> Computer , Office & Security </a>  </li>
                    <li className=" mt-2 ">  <a href={""} className=" text-decoration-none text-dark "> Tools & Home Improvement </a> </li>
                    <li className=" mt-2 ">  <a href={""} className=" text-decoration-none text-dark ">Home , Pet & Application </a> </li>
                    <li className=" mt-2 ">  <a href={""} className=" text-decoration-none text-dark ">Outdoor Fun & Support </a> </li>
                    <li className=" mt-2 ">  <a href={""} className=" text-decoration-none text-dark "> Consumer Electronics </a> </li>
                </ul>
            </div>

            <div className="col  gx-3 gy-2  d-flex rounded-2    align-items-center  ">
                <div className=" card rounded-5  h-100  w-100 ">
                    <div className="row  h-25  ">
                        <div className="d-flex align-items-center mx-3  ">
                            <button className="btn btn-light rounded-4 ">Treanding </button>
                        </div>
                    </div>
                    <div className="row gx-3   h-75  ">
                       <div className="d-flex align-items-center mx-auto  justify-content-center  ">
                       <img className="img-fluid" src={require('./kisspng-clothing-used-good-retail-shopping-sales-clothes-in-the-closet-5a68d2b365ab25.9901540215168191234164.png')} style={{width:"200px" }} />
                       </div>
                    </div>
                </div>    
            </div > 

            <div className="col gx-3 gy-2 ">
                <div className="row  h-50  ">
                       <div className="row w-75 h-25 mx-auto my-auto  ">
                         <button className="btn btn-info rounded-5 ">shop now </button>
                       </div>
                       <div className="row w-75  h-25 mx-auto ">
                         <button className="btn btn-outline-info  rounded-5 ">explore more products </button>
                       </div>
                </div>
                <div className="row p-0 ">
                <div className="d-flex  mx-auto  justify-content-center  ">
                       <img className="img-fluid" src={require('./kisspng-black-friday-discounts-and-allowances-sales-coupon-5b357e4fae9247.1529347915302323997151.png')} style={{width:"160px" }} />
                       </div>
                </div>
                
            </div>

            <div className="col gx-3 gy-2  d-flex rounded-2  align-items-center  ">
                <div className=" card rounded-5   h-100  w-100 ">          
                    <div className="row  h-75 my-auto ">
                       <div className="d-flex align-items-center mx-auto  justify-content-center  ">
                       <img className="img-fluid my-auto " src={require('./kisspng-cosmetics-makeup-brush-mirror-toiletry-bag-makeup-department-5a694bbbba16a6.4984696415168501077622.png')} style={{width:"200px" }} />
                       </div>
                    </div>
                </div>
            
            </div > 
          
         </div>
       </div>
    )
};

export default AllCategory;
