import React from 'react'
import { createContext,useState} from 'react'

export let AuthContext=createContext()

function AuthContextProvider({children}) {
    let [isAuth,setisAuth]=useState(false)
    let [usename,setusername]=useState("")

    let loginUser =(name)=>{
        setisAuth(true)
        console.log(name)
        setusername(name)
    }
    let logoutUser =()=>{
        setisAuth(false)

    }
  return (
     <AuthContext.Provider value={{isAuth,loginUser,logoutUser,usename}}>{children}</AuthContext.Provider>
    
  )
}

export default AuthContextProvider