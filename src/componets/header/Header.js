import React from 'react'
import './header.css'
import { Link } from "react-router-dom";
import logo from '../../img/logo.png'

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg col">
        <div className="container-fluid">
          <Link className="navbar-brand logotext" to="/"><img src={logo} alt="Logo Loading" className='logo' /><b>Book My PG</b></Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mx-4">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              <Link className="nav-link" to="/">Blog </Link>

              <Link className="nav-link" to="/">Contact Us</Link>
              <Link className="nav-link" to="/">About Us</Link>
              <Link className="nav-link" to="/">For PG Owners</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header;

