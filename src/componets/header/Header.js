import React from 'react'
import './header.css'
import { Link } from "react-router-dom";
import logo from '../../img/logo.png'

const Header = () => {

  const color = "#041073";


  const handlelogout = () => {
    localStorage.removeItem('token');
    Navigator('/');
    // context.showAlert(' Logout Successfully ', 'success');
  }


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark" style={{ zIndex: 999 }}>
        <Link className="navbar-brand logotext" to="/"><img src={logo} alt="Logo Loading" className='logo' /><b style={{ color: color }}>Find My PG</b></Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/">Blog </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/">Contact Us</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>

            <li className="nav-item">

              <Link className="nav-link" to="/">For PG Owners</Link>
            </li>
          </ul>
          {/* {!localStorage.getItem('token') ? <form className="d-flex buttons" role="search">
                <Link className="btn btn-info mx-2" to="/login">Login</Link>
                <Link className="btn btn-info" to="/signup">Sign up</Link>
              </form> : <button onClick={handlelogout} className="btn btn-primary" >Logout</button>
              } */}
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </>
  )
}

export default Header;

