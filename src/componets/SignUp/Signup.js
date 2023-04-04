import React, {useState } from 'react'
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = (req, res) => {

    const Navigate = useNavigate();
    const [details, setdetails] = useState({ name: "", email: "", password: "" })

    const onhandler = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: details.name, email: details.email, password: details.password })
        })

        try {
            const json = await response.json();
            if (json.success) {
                // save the token and redirect 
                localStorage.setItem('token', json.token);

                // To show Alert 
                toast.success('Account Created Successfully ', {
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
                if (json.error) {
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
                else
                {
                    toast.error('Enter a Vaild Email', {
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
        }
        catch (error) {
            toast.error(' Invalid Details', {
                position: "top-center",
                autoClose: 1200,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            return res.send("error");
        }
    }


    // When value of email or password changes
    const changehandler = (e) => {
        setdetails({ ...details, [e.target.name]: e.target.value });
    }

    return (
        <div className='container mx-10 my-5'>
            <h1 style={{ marginBottom: 25 }}>Create Account For Find My PG</h1>
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
            <form onSubmit={onhandler} >
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Enter Your Name</label>
                    <input type="text" className="form-control" value={details.name} id="name" name="name" onChange={changehandler} aria-describedby="emailHelp" required autoComplete='none' />
                </div>

                <div className="mb-3">


                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" value={details.email} onChange={changehandler} required />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" value={details.password} onChange={changehandler} name="password" minLength={5} required />
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp