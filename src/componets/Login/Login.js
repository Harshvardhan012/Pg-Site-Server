import React, { useState } from 'react'
import { useNavigate } from 'react-router';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

    const [details, setdeatils] = useState({ email: "", password: "" });
    let Navigate = useNavigate();



    // This will work when we sumbit form it use the fetch api at given url
    const clickhandler = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: details.email, password: details.password })
        })
        const json = await response.json();
        if (json.success) {
            // save the token and redirect 
            console.log("Success");
            localStorage.setItem('token', json.token);

            toast.success('Login Successfully', {
                position: "top-center",
                autoClose: 1200,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });

            // this is used to Navigate to home page
            Navigate('/');
           
            
        }
        else {
            // To show Alert 
            toast.error(`${json.error}`, {
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
    }

    // When value of email or password changes
    const changehandler = (e) => {
        setdeatils({ ...details, [e.target.name]: e.target.value });
    }

    return (
        <div className='container mx-7 my-5'>
            <h1 style={{ marginBottom: 25 }}>Login To Continue With Find My PG</h1>
            <form onSubmit={clickhandler}>
                <div className="mb-3">
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
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" value={details.email} onChange={changehandler} name="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label" >Password</label>
                    <input type="password" className="form-control" value={details.password} onChange={changehandler} id="password" name="password" />
                </div>
                <button type="submit" className="btn btn-primary button">Login</button>
            </form>
        </div>
    )
}

export default Login