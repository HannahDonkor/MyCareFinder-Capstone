import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SharedLayout from '../Pages/SharedLayout/SharedLayout'
import About from '../Pages/About/About'
import Home from '../Pages/Home/Home'

const Content = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<SharedLayout/>}>
                <Route path='/about' element={<About/>}/>
                <Route index element={<Home/>}/>
                

            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Content