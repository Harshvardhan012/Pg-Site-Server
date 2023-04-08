import React from 'react'
import './header.css'
import { Link, useNavigate } from "react-router-dom";
import logo from '../../img/logo.png'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Header = () => {

  const color = "#041073";

  let Navigator = useNavigate();

  // eslint-disable-next-line
  const handlelogout = () => {
    localStorage.removeItem('token');
    Navigator('/');
    toast.success(`Logout Successfully`, {
      position: "top-center",
      autoClose: 1200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }




  return (
    <nav className="navbar navbar-expand-lg  bg-dark newbar sticky " style={{ zIndex: 999, position: 'sticky' }} data-bs-theme="light">
      <div className="container-fluid nav_color">
      <ToastContainer
                        position="top-center"
                        autoClose={2000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                    />
        <Link className="navbar-brand logotext " to="/"><img src={logo} alt="Logo Loading" className='logo' /><b style={{ color: color }} >Find My PG</b></Link>


        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
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
          {!localStorage.getItem('token') ? <form className="d-flex btn_div" role="search">
            <Link className="btn btn-primary mx-2" to="/login">Login</Link>
            <Link className="btn btn-primary" to="/signup">Sign Up</Link>
          </form> : <form className="d-flex btn_logout" role="search">
            <button onClick={handlelogout} className="btn btn-primary" >Logout</button>
          </form>
          }
        </div>

      </div>
    </nav>
  )
}

export default Header;

