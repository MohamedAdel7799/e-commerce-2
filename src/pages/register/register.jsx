import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

function Register() {

    const[userdata,Setuserdata]=useState({

        username:"",
        password:"",
        email:""

    })

    const navigate=useNavigate()

   
    
 let collectdata= (e)=>{
    let myuser = {...userdata}
    myuser[e.target.name] =e.target.value
    Setuserdata(myuser)

 }

 const senddata=()=>{

   localStorage.setItem("register" ,userdata)

   navigate('/')

   const Toast = Swal.mixin({
       toast: true,
       position: "top-end",
       showConfirmButton: false,
       timer: 2000,
       timerProgressBar: true,
       didOpen: (toast) => {
         toast.onmouseenter = Swal.stopTimer;
         toast.onmouseleave = Swal.resumeTimer;
       }
     });
     Toast.fire({
       icon: "success",
       title: "Signed in successfully"
     });
 }




    return(
        <div className="form text-center   d-grid vh-100    mx-auto     ">
        <div className=" d-block w-25 mx-auto shadow-lg my-auto  rounded-4    ">
            
            <div className=" text-center bg-success text-light py-4 rounded-top-4   "> <h4> Create Your Account </h4> </div>
             <div className=" d-block  py-5 text-center ">
                <div>
                   <input className=" w-75 rounded-4 py-1  border-1  " name="username" onChange={collectdata} type="text" placeholder="  User Name"></input>
                </div>
                 <div>
                   <input className=" w-75 rounded-4 py-1 mt-4 border-1  " name="email" onChange={collectdata} type="email" placeholder="   email"></input>
                </div>
              
                <div>
                   <input className=" w-75 rounded-4 py-1 mt-4 border-1  " type="password" onChange={collectdata} name="password" placeholder="    Password"></input>
                </div>
                <div className="w-75  py-1  mt-3 text-center mx-auto  ">
                    <h6> Already have account <Link to='/login'> Login </Link></h6>
                </div>
                <div>
                    <button className="btn btn-success py-2  mt-3  w-75 rounded-2 " onClick={senddata} > Register </button>
                </div>
               
                
             </div>

            
            
           
        </div>
    </div>


    )
}


export default Register