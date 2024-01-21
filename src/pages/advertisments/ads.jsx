import React from "react"



function Ads(){


  return(
     
    <div> 
        <div className="container w-75 d-flex h-75  justify-content-around bg-info mb-5 row mx-auto py-5 ">
               <div className="col text-center d-flex align-items-center justify-content-center  ">
                 <img className="img-fluid my-auto" src={require('./—Pngtree—iphone 15 blue_13289457.png')} style={{width:"250px" }}></img>
               </div> 
               <div className="col text-start  " >
                 <h6>
                  Limited Offer
                 </h6>
                 <h1>
                  30% off for perfume <br></br> product only this friday <br></br> and get special gift  
                 </h1>
                 <button className="btn btn-danger"> shop now</button>
               </div>
        </div>

    </div>
  )


}

export default Ads