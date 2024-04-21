import React from "react"
import Logo from './images/github-logo.png'
import './App.css'

const Navbar = () => {
  return (
    <>
    <nav>

    <div className="logo">
        <img src={Logo} />
        <h2>GitHub</h2>
     </div>
     
     <div>
        <ul className='nav-item'>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    </>
   
  )
}

export default Navbar
