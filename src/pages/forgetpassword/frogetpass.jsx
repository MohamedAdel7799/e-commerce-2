
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BiChevronRight } from "react-icons/bi";
import Swal from "sweetalert2";




function Forgetpass(){

    const[userdata,Setuserdata]=useState({

        nwepassword:"",
        confirmpassword:""

    })

    const navigate =useNavigate()
    
 let collectdata= (e)=>{
    let myuser = {...userdata}
    myuser[e.target.name] =e.target.value
    Setuserdata(myuser)

    
 }

 const senddata=()=>{

   localStorage.setItem("forgetpass" , JSON.stringify(userdata) )
   navigate('/login')

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
    <div className="form text-center vh-100 d-grid  py-5 ">
        <div className=" d-block w-25 mx-auto shadow-lg my-auto  w-sm-75     rounded-4  ">
            <div className=" text-center bg-success text-light py-4 rounded-top-4   "> <h4> Reset your password </h4> </div>
            <div className=" d-block  py-5 text-center ">
                <div>
                <input className=" w-75 rounded-4 py-1  border-1  " onChange={collectdata} name="newpassword" type="password" placeholder="  new password"></input>
                </div>
                <div>
                <input className=" w-75 rounded-4 py-1 mt-4 border-1  " onChange={collectdata} type="password" name="confirmpassword" placeholder="   confirm Password"></input>
                </div>
            
                <div>
                    <button className="btn btn-success py-2  mt-5  w-75 rounded-2" onClick={senddata} > Reset password </button>
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