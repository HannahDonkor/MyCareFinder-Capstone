import React from 'react'
import "./NavBar.css"
import { BsFillHeartPulseFill } from "react-icons/bs";
import { TbDental } from "react-icons/tb";
import { CiStethoscope } from "react-icons/ci";
import Link from '../Link/Link'

const NavBar = () => {

  const links = [{id:1, name:"home", path:'/'}, {id:2, name:"about", path:'/about'}, {id:3, name:"Find Hospital", path:'/find'}, {id:4, name:"login", path:'/login'}, {id:5, name:"sign up", path:'/sign'}]
  return (
    
    
      <nav>
        <div className='logo-container'>
          <div className='icons'>
            <BsFillHeartPulseFill color='rgb(26, 63, 232)'/>
            <CiStethoscope color='rgb(26, 63, 232)'/>
            <TbDental color='rgb(26, 63, 232)'/>
          </div>
          <h3 className='logo-name'>MenZuZu</h3>
        </div>
        <div className='links'>
          {links.map(link => <Link key={link.id} name = {link.name} path = {link.path}/>)}
        </div>

      </nav>
    
    

    
    
  )
}

export default NavBar