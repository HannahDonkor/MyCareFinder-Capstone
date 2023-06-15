import React from 'react'
import "./Link.css"

interface LinkProps {
    name: string;
    path: string
  }
  
  const Link: React.FC<LinkProps> = ({name, path}) => {

  return (
    <span>
      <a href={path}>
        {name}
      </a>
      </span>
  )
}

export default Link