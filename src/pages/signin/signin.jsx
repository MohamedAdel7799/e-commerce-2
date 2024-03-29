import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

function Login(){

    const navigate=useNavigate()

    const[userdata,Setuserdata]=useState({

        username:"",
        password:""

    })
    
 let collectdata= (e)=>{
    let myuser = {...userdata}
    myuser[e.target.name] =e.target.value
    Setuserdata(myuser)

 }

 const  senddata=()=>{

    localStorage.setItem("signin" , JSON.stringify(userdata) )
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
        <div className=" container-fluid   d-grid  vh-100  ">
            <div className=" form text-center  my-auto  "  >
                <div className=" d-block w-25 mx-auto shadow-lg    w-sm-75 rounded-4  my-auto ">
                    <div className=" text-center bg-info text-light py-4 rounded-top-4 "> <h4> Sign In </h4> </div>
                        <div className=" d-block  py-5 text-center ">
                            <div>
                            <input className=" w-75 rounded-4 py-1  border-1  "  onChange={collectdata} type="text" placeholder="  User Name" name="username"></input>
                            </div>
                            <div>
                            <input className=" w-75 rounded-4 py-1 mt-4 border-1  " onChange={collectdata} type="password" placeholder="    Password" name="password"></input>
                            </div>
                            <div className="w-75  py-1  mt-3 text-center mx-auto  ">
                                <h6> Don't Have Account ? <Link to='/register'> Register</Link></h6>
                            </div>
                            <div>
                                <button className="btn btn-info py-2  mt-3  w-75 rounded-2 " onClick={senddata} > Sign In </button>
                            </div>
                            <div className=" mt-5 ">
                                <Link to='/forgetpass'>forgetpass</Link>
                        </div>            
                    </div>
                </div>
            </div>

        </div>
        
        
    )
}

export default Login