
import React from "react"
import { Link } from "react-router-dom"
import { BiChevronRight } from "react-icons/bi";




function Forgetpass(){


return(
    <div className="form text-center vh-100 d-grid  py-5   ">
    <div className=" d-block w-25 mx-auto shadow-lg my-auto  w-sm-75     rounded-4  ">
        <div className=" text-center bg-success text-light py-4 rounded-top-4   "> <h4> Reset your password </h4> </div>
         <div className=" d-block  py-5 text-center ">
            <div>
               <input className=" w-75 rounded-4 py-1  border-1  " type="password" placeholder="  new password"></input>
            </div>
            <div>
               <input className=" w-75 rounded-4 py-1 mt-4 border-1  " type="password" placeholder="   confirm Password"></input>
            </div>
          
            <div>
                <button className="btn btn-success py-2  mt-5  w-75 rounded-2 " > Reset password </button>
            </div>
            <div>
                <button className="btn btn-success py-2   mt-2  w-75 rounded-2 " > <Link className=" fw-bold   text-decoration-none text-light   " to='/login'>Back <i>{<BiChevronRight/>}</i></Link> </button>
            </div>
        
        
            
         </div>
    </div>
</div>


)
  

}

export default Forgetpass