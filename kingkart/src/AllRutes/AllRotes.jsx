import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../Pages/Home'
import Mac from '../Pages/Mac'
import Store from '../Pages/Store'
import IPad from '../Pages/iPad'
import Login from '../Pages/Login'
import Logout from '../Pages/Logout'
import SignupCard from "../Pages/SignUp"
import Success from '../Pages/Success'

function AllRotes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/store' element={<Store/>}/>
        <Route path='/mac' element={<Mac/>}/>
        <Route path='/ipad' element={<IPad/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignupCard/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/success' element={<Success/>}/>

    </Routes>
    
  )
}

export default AllRotes