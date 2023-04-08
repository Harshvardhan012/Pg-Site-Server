import React from 'react'
import { Link } from "react-router-dom"
import './footer.css'

const Footer = () => {
    return (
        <>

            <footer className="bg-light text-center text-black border footer" style={{marginTop:100 }}>
                <div className="container p-4 pb-0 ">
                    <h3 className='my-4' style={{color:'#041073'}}>Find My PG </h3>
                    <section className="mb-2">
                        <Link
                            className="btn text-white btn-floating m-1 media"
                            style={{ backgroundColor: '	#4267B2' }}
                            to="/"
                            role="button"
                        ><i className="fab fa-facebook-f"></i
                        ></Link>

                        <Link
                            className="btn text-white btn-floating m-1 media"
                            style={{ backgroundColor: '#1DA1F2' }}
                            to="/"
                            role="button"
                        ><i className="fab fa-twitter"></i
                        ></Link>

                        <Link
                            className="btn text-white btn-floating m-1 media"
                            style={{ backgroundColor: '#DB4437' }}
                            to="/"
                            role="button"
                        ><i className="fab fa-google"></i
                        ></Link>

                        <Link
                            className="btn text-white btn-floating m-1 media"
                            style={{ backgroundColor: '#d62976' }}
                            to="/"
                            role="button"
                        ><i className="fab fa-instagram"></i
                        ></Link>

                        <Link
                            className="btn text-white btn-floating m-1 media"
                            style={{ backgroundColor: '#0A66C2' }}
                            to="/"
                            role="button"
                        ><i className="fab fa-linkedin-in"></i
                        ></Link>
                        <Link
                            className="btn text-white btn-floating m-1 media"
                            style={{ backgroundColor: '#171515' }}
                            to="/"
                            role="button"
                        ><i className="fab fa-github"></i
                        ></Link>
                    </section>

                    <section class="">
                        <form action="">
                            <div class="row d-flex justify-content-center">
                                <div class="col-auto">
                                    <p class="pt-2">
                                        <strong>Sign up for our newsletter</strong>
                                    </p>
                                </div>

                                <div class="col-md-5 col-12">
                                    <div class="form-outline mb-4">
                                        <input type="email" id="form5Example2" class="form-control" placeholder='Enter Your Email'/>
                                        
                                    </div>
                                </div>

                                <div class="col-auto">

                                    <button type="submit" class="btn btn-primary mb-4 button">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </form>
                    </section>


                    <section class="mb-4">
                        <p>
                        Find Your PG, is fastest-growing network of managed Paying Guest (PG) rentals. We hope to provide you with the best renting solutions with the help of our Designs and Technology.
                        </p>
                    </section>
                </div>
                {/* <!-- Copyright --> */}
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2023 Copyright:
                    <Link className="text-black" to="/">FindMyPg.com</Link>
                </div>
            </footer>

        </>
    )
}

export default Footer;