import React from 'react'
import './home.css'
import { data } from '../../data/data'
import City from '../City/City'

import { Link } from "react-router-dom"

const Home = () => {
    const color = "#041073";
    return (
        <div>
            <div className="container section1">
                <h1 style={{ color: color }}>Book My PG</h1>
                <p style={{ fontSize: 20 }}>India's Largest PG Network to Book your PG Online</p>
            </div>

            <div className='container input-group mb-3'>
                <div className='d-flex serachsection container'>
                    <input type="text" placeholder='Enter city name, area etc..' className='searchtext' /> <i class="fa-solid fa-magnifying-glass serachion"></i>
                    <button type="button" id="search" class="search-submit"><i class="fa-solid fa-location-dot px-2"></i>Near me</button>
                </div>
            </div>

            <div className='container d-flex city'>
                {
                    data.map(data => {
                        return (
                            <City img={data.img} name={data.name} />
                        )
                    })
                }
            </div>
            {/* Long Image */}
            <div className='longimg'>
                <img className='longimg' src="https://bookmypg.co.in/assets/front/images/city-slider.png" alt="" />
            </div>
            {/* About Us Section */}
            <div className='container d-flex about'>

                <div className='leftabout'>

                    <h2 className="h2 anim-left-title my-5" style={{ color: color }}>About Book My PG</h2>
                    <p className='tex'>"Book Your PG, is fastest-growing network of managed Paying Guest (PG) rentals. We hope to provide you with the best renting solutions with the help of our designs and technology.Our services across the country will help you find and book Paying Guest (PG) rental homes."</p>

                    <Link type="button" class="btn" to='/about'>Read More</Link>
                </div>

                <div className='img_about'>
                    <div class="col-md-6 wow fadeIn animated rightabout" >
                        <img src="https://bookmypg.co.in/assets/front/images/about.png" alt="" class="img-responsive" /> </div>
                </div>
            </div>

            {/* How Work */}
            <div>
                <hr className='my-5' />
                <h1 style={{ color: color }} className='my-5 text-center'>How it's Work</h1>

                <div className='container tex2'>
                    <p>Our process is simple and very different from those of others in this industry. The search process is streamlined by the locality or landmark of your choice. This allows you to find the right PG or Room.</p>
                </div>

                <div className='d-flex w_div'>
                    <div className=''>
                        <div className='w_logo'>
                            <img src="https://bookmypg.co.in/assets/front/images/hiw-icon-01.png" alt="" class="w100" />
                        </div>
                        <p className='worktex'>Search </p>
                        <p className='texdesc my-2'>Find PG Easily Using Filters</p>
                    </div>
                    <div>

                        <div className='w_logo'>
                            <img src="https://bookmypg.co.in/assets/front/images/hiw-icon-02.png" alt="" class="w100" />
                        </div>
                        <p className='worktex'>Make Payment</p>
                        <p className='texdesc my-2'>Choose Your PG and Pay Online</p>
                    </div>
                    <div>

                        <div className='w_logo'>
                            <img src="https://bookmypg.co.in/assets/front/images/hiw-icon-03.png" alt="" class="w100" />
                        </div>
                        <p className='worktex'>Booking Confirmation</p>
                        <p className='texdesc my-2'>Get Confirmed booking date </p>
                    </div>
                </div>
            </div>

            {/* What we Offer */}
            <div>
                <hr className='my-5'/>
                <h1 style={{ color: color }} className='my-5 text-center'>What We Offer</h1>

                <div className='container tex2'>
                    <p>The listed services are offered to all our customers. We assure you the best deals in all our properties and the chance to live a more luxurious life with lesser cost.</p>
                    
                </div>

                <div className='d-flex w_div'>
                    <div>
                        <div className='o_logo'>
                            <img src="https://bookmypg.co.in/assets/front/images/find-pgs-icon.png" alt="" height={63} width={63}/>                        </div>
                        <p className='worktex'>Find PG Near You</p>
                        <p className='texdesc my-2'>Find Your PG By Selecting Your Location</p>
                        
                    </div>
                    <div>

                        <div className='o_logo'>
                        <img src="https://bookmypg.co.in/assets/front/images/book-online-icon.png" alt="" height={63} width={63}/>
                        </div>
                        <p className='worktex'>Book Online</p>
                        <p className='texdesc my-2'>Book your PG online Through Our web</p>
                    </div>

                    <div className='my-5'>
                        <div className='o_logo'>
                        <img src="https://bookmypg.co.in/assets/front/images/best-deals-icon.png" alt="" height={63} width={63}/>
                        </div>
                        <p className='worktex'>Best Deals On PGs</p>
                        <p className='texdesc my-2'>We have tie ups with PGs in every city. We make sure that You Can get the best deals for PGs. </p>
                    </div>
                </div>
            </div>


        </div >

    )
}

export default Home