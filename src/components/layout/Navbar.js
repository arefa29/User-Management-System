import React from "react";
import {Link} from "react-router-dom"
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                
                <Link className="navbar-brand" href="/">React User</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 mr-auto">
                    <li className="nav-item">
                    <Link className="nav-link " aria-current="page" exact to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" exact to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link " exact to="/contact">Contact</Link>
                    </li>
                    
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
                <Link className="btn btn-outline-light" to="/users/add">Add user</Link>
            </div>
            
  
        </nav>
    )
}

export default Navbar;