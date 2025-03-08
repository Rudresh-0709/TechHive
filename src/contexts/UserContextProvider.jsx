"use client"
import React from "react";
import UserContext from "./UserContext";
import { useState, useEffect} from "react";

const UserContextProvider = ({children})=>{
    const [user, setUser] = useState(null)
    useEffect(() => {
      const storedUser=localStorage.getItem("user")
      if(storedUser){
        setUser(JSON.parse(storedUser))
      }
    }, [])
    const saveUser =(userData)=>{
        setUser(userData)
        localStorage.setItem('user',JSON.stringify(userData))
    }
    return(
        <>
            <UserContext.Provider value={{user,setUser:saveUser}}>
                {children}
            </UserContext.Provider>
        </>
    )
}

export default UserContextProvider