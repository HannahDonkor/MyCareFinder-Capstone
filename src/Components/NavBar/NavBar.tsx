import React from 'react'
import "./NavBar.css"
import Link from '../Link/Link'

const NavBar = () => {

  const links = [{id:1, name:"home", path:'/'}, {id:2, name:"about", path:'/about'}, {id:3, name:"Find Hospital", path:'/find'}, {id:4, name:"login", path:'/login'}, {id:5, name:"sign up", path:'/sign'}]
  return (
    
    
      <nav>
        <h3>The CareFinder</h3>
        <div className='links'>{links.map(link => <Link key={link.id} name = {link.name} path = {link.path}/>)}</div>
      </nav>
    
    

    
    
  )
}

export default NavBar