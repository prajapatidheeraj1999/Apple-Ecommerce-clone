import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../AuthContext/AuthContext'
import {Navigate } from 'react-router-dom'
import { useEffect } from 'react'

function Logout() {

  let {isAuth,loginUser,logoutUser,usename}=useContext(AuthContext)

  useEffect(()=>{
    logoutUser()
    
  },[])
  console.log("logout page is render")

  return (
    <Navigate to="/"/>
  )
}
  export default Logout