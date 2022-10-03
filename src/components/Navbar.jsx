import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  

  return (
    
      <div className="navbar">
        <Link to="/" className="links"><p>Home</p></Link>
        <Link to="/Students"  className="links"><p>Students</p></Link>
        <Link to="/Contact"  className="links"><p>Contact Us</p></Link>
      </div>
    
  )
}


export default Navbar;