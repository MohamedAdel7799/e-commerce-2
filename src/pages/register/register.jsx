import React from "react"
import { Link } from "react-router-dom"

function Register() {



    return(
        <div className="form text-center   d-grid vh-100    mx-auto     ">
        <div className=" d-block w-25 mx-auto shadow-lg my-auto  rounded-4    ">
            
            <div className=" text-center bg-success text-light py-4 rounded-top-4   "> <h4> Create Your Account </h4> </div>
             <div className=" d-block  py-5 text-center ">
                <div>
                   <input className=" w-75 rounded-4 py-1  border-1  " type="text" placeholder="  User Name"></input>
                </div>
                 <div>
                   <input className=" w-75 rounded-4 py-1 mt-4 border-1  " type="email" placeholder="   email"></input>
                </div>
              
                <div>
                   <input className=" w-75 rounded-4 py-1 mt-4 border-1  " type="password" placeholder="    Password"></input>
                </div>
                <div className="w-75  py-1  mt-3 text-center mx-auto  ">
                    <h6> Already have account <Link to='/login'> Login </Link></h6>
                </div>
                <div>
                    <button className="btn btn-success py-2  mt-3  w-75 rounded-2 " > Register </button>
                </div>
               
                
             </div>

            
            
           
        </div>
    </div>


    )
}


export default Register