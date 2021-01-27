import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

export default function Navbar(){
    return(
    <div className="Navbar-container">
        <ul className="navbar-list">
           <Link to="/home">
               <li>Home</li>
               </Link> 
           <Link to="/products">
               <li>Products</li>
               </Link> 
           <Link to="/signin">
               <li>Signin</li>
               </Link> 
            
            
        </ul>

    </div>
    )
}