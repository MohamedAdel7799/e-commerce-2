import React from "react";
import"./allcatregory.css"



function AllCategory(){

    return(
       <div className=" container-fluid mt-5 w-75 bg-light py-3  rounded-4   ">
         <div className="grid row row-cols-lg-4 row-cols-sm-2 row-cols-md-2 d-flex g-sm-3  mx-auto   rounded-5 ">
            
            <div className=" col-3 gx-3  ">
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

            <div className="col-3  gx-3  d-flex rounded-2    align-items-center  ">
                <div className=" card rounded-5 bg-info h-100  w-100 ">
                    <div className="row  h-25  ">
                        <div className="d-flex align-items-center mx-3  ">
                            <button className="btn btn-light rounded-4 ">Treanding </button>
                        </div>
                    </div>
                    <div className="row gx-3   h-75  ">
                       <div className="d-flex align-items-center mx-auto  justify-content-center  ">
                       <img className="img-fluid" src={require('./house-painter-and-decorator-material-interior-design-services-furniture-wallpaper-png-favpng-4xcSZR7Zzu1Z35FUryStGVKsn.jpg')} style={{width:"200px" }} />
                       </div>
                    </div>
                </div>    
            </div > 

            <div className="col-3 gx-3  ">
                <div className="row  h-50  ">
                       <div className="row w-75 h-25 mx-auto my-auto  ">
                         <button className="btn btn-info rounded-5 ">shop now </button>
                       </div>
                       <div className="row w-75  h-25 mx-auto ">
                         <button className="btn btn-outline-info  rounded-5 ">explore more products </button>
                       </div>
                </div>
                <div className="row  h-50  ">
                <div className="d-flex align-items-center mx-auto  justify-content-center  ">
                       <img className="img-fluid" src={require('./house-painter-and-decorator-material-interior-design-services-furniture-wallpaper-png-favpng-4xcSZR7Zzu1Z35FUryStGVKsn.jpg')} style={{width:"200px" }} />
                       </div>
                </div>
                
            </div>

            <div className="col-3 gx-3   d-flex rounded-2  align-items-center  ">
                <div className=" card rounded-5 bg-info  h-100  w-100 ">          
                    <div className="row  h-75  ">
                       <div className="d-flex align-items-center mx-auto  justify-content-center  ">
                       <img className="img-fluid my-auto " src={require('./house-painter-and-decorator-material-interior-design-services-furniture-wallpaper-png-favpng-4xcSZR7Zzu1Z35FUryStGVKsn.jpg')} style={{width:"200px" }} />
                       </div>
                    </div>
                </div>
            
            </div > 
          
         </div>
       </div>
    )
};

export default AllCategory;
