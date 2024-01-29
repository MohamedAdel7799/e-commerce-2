import { createContext, useState } from "react";


export const authcontext=createContext()

function Authcontext({children}){

     const[user,Setuser]=useState(null)

        const login =()=>{

            Setuser(user)

        }

        const logout =()=>{
            Setuser(null)
        }



    return(

        <authcontext.Provider value={{user , login , logout}}>
                {{children}}
        </authcontext.Provider>
    )
 } 

 export default Authcontext




