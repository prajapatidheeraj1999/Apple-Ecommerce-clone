import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../Pages/Home'
import Mac from '../Pages/Mac'
import Store from '../Pages/Store'
import IPad from '../Pages/iPad'
import Login from '../Pages/Login'
import Logout from '../Pages/Logout'

function AllRotes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/store' element={<Store/>}/>
        <Route path='/mac' element={<Mac/>}/>
        <Route path='/ipad' element={<IPad/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/logout' element={<Logout/>}/>

    </Routes>
    
  )
}

export default AllRotes