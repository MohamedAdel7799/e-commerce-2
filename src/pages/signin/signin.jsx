import React, { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"

function Login(){

    const[userdata,Setuserdata]=useState({

        username:"",
        password:""

    })
    
 let collectdata= (e)=>{
    let myuser = {...userdata}
    myuser[e.target.name] =e.target.value
    Setuserdata(myuser)
    console.log(myuser)
 }

 let senddata =()=>{
    console.log(userdata)
    localStorage.setItem(userdata.name,userdata.password)


 }

    return(
        <div className=" ">
             <div className=" form text-center mt-5 py-5   "  >
             <div className=" d-block w-25 mx-auto shadow-lg my-auto  w-sm-75     rounded-4  ">
                <div className=" text-center bg-success text-light py-4 rounded-top-4   "> <h4> Sign In </h4> </div>
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
                        <button className="btn btn-success py-2  mt-3  w-75 rounded-2 " onClick={senddata} > Sign In </button>
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