import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.png'


const Navbar = ({ isAdmin, isUser }) => {
    
  return (
    <div>
    <header>
    <nav>
            <div className="navBar">
                <div className="navLogo">
                    <Link to="/"><img src={Logo} alt="Logo"/></Link>
                </div>
                <div className="nav-sections">
                    <ul>
                        
                        <li><Link to="/budget-package">Budget Package</Link></li>
                        <li><Link to="/gold-packages">Gold Packages</Link></li>
                        <li><Link to="/destinations">Destinations</Link></li>
                        <li><Link to="/contact-us">Contact Us</Link></li>
                       
                    </ul>
                </div>
                <div className="login-signup">
                    <ul>
                        {isAdmin ? (
                            <>
                            <li><Link to="/admin-dashboard">Admin</Link></li>
                            <li><Link to="/admin-customization">Customization</Link></li>
                            </>
                        ):
                        (  isUser ? (
                            <>
                            <li><Link to="/user">User</Link></li>
                            <li><Link to="/customer-customization">Customization</Link></li>
                            </>
                        ) : (
                            <>
                        
                        <li><Link to="/login">Log in</Link></li>
                        <li><Link to="/sign-up">Sign-up</Link></li>
                        </>
                        )
                        )}
                    </ul>
                </div>

            </div>

        </nav>
    </header>
    </div>
  )
}

export default Navbar
