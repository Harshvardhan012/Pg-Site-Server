import React, { useState } from 'react'
import './home.css'
import './responsive.css'
import { city_data } from '../../data/citydata'
import { data } from '../../data/pgdata'
import { Link } from "react-router-dom"

const Home = () => {
    const color = "#041073";
    let search_data = data;
    let [text, settext] = useState('');
    const onchange = (text) => {
        settext(text);
    }


    const cleartext = (e) => {
        console.log("working");
        settext('');
    }

    return (

        <div>
            <div className="container section1">
                <h1 style={{ color: color }}>Find My PG</h1>
                <p style={{ fontSize: 20 }}>India's Largest PG Network to Find your PG Online</p>
            </div>

            {/* Search data */}
            <div className='container input-group mb-3 d-flex'>

                <div className='d-flex serachsection container'>
                    <input type="text" placeholder='Enter city name, area etc..' className='searchtext' name="search" value={text} onChange={(e) => onchange(e.target.value)} autoComplete='off'/>
                    <i className="fa-solid fa-xmark  serachion" onClick={cleartext}></i>
                    <button type="button" id="search" className="search-submit"><i className="fa-solid fa-location-dot px-2"></i>Near me</button>
                </div>
            </div>

                {/* search results */}
            <div >
                {
                    text &&
                    <ul className='search_result list-group'>
                        {
                            search_data.filter(search => search.Address.toLowerCase().includes(text.toLowerCase())).map(search => (
                                <Link to={`pgdetails/${search.id}`} style={{textDecoration:'none'}}>
                                    <li className='list_item list-group-item '>
                                        <i className="fa-sharp fa-solid fa-location-dot fa-beat-fade location_icon" style={{ color: "#ee1b65" }}>
                                        </i>
                                        {search.Address.substring(0, 55)}   
                                    </li>
                                </Link>
                            ))
                        }
                    </ul>
                }
            </div>


            {/* Citys */}

            <div className='container d-flex city'>
                {
                    city_data.map((data, k) => {
                        return (
                            <Link to={`search/${data.name}`} style={{ textDecoration: 'none', color: 'black' }} key={k}>
                                <div className='component'>
                                    <div>
                                        <img src={data.img} alt="" className='img' />
                                    </div>
                                    <h5 className='imgs my-1'>{data.name}</h5>
                                </div>

                            </Link>
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

                    <h2 className="h2 anim-left-title my-5" style={{ color: color }}>About Find My PG</h2>
                    <p className='tex'>"Find Your PG, is fastest-growing network of managed Paying Guest (PG) rentals. We hope to provide you with the best renting solutions with the help of our designs and technology.Our services across the country will help you find and book Paying Guest (PG) rental homes."</p>

                    <Link type="button" className="btn" to='/about'>Read More</Link>
                </div>

                <div className='img_about'>
                    <div className="col-md-6 wow fadeIn animated rightabout" >
                        <img src="https://bookmypg.co.in/assets/front/images/about.png" alt="" className="img-responsive" /> </div>
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
                            <img src="https://bookmypg.co.in/assets/front/images/hiw-icon-01.png" alt="" className="w100" />
                        </div>
                        <p className='worktex'>Search </p>
                        <p className='texdesc my-2'>Find PG Easily Using Filters</p>
                    </div>
                    <div>

                        <div className='w_logo'>
                            <img src="https://bookmypg.co.in/assets/front/images/hiw-icon-02.png" alt="" className="w100" />
                        </div>
                        <p className='worktex'>Make Payment</p>
                        <p className='texdesc my-2'>Choose Your PG and Pay Online</p>
                    </div>
                    <div>

                        <div className='w_logo'>
                            <img src="https://bookmypg.co.in/assets/front/images/hiw-icon-03.png" alt="" className="w100" />
                        </div>
                        <p className='worktex'>Booking Confirmation</p>
                        <p className='texdesc my-2'>Get Confirmed booking date </p>
                    </div>
                </div>
            </div>

            {/* What we Offer */}
            <div>
                <hr className='my-5' />
                <h1 style={{ color: color }} className='my-5 text-center'>What We Offer</h1>

                <div className='container tex2'>
                    <p>The listed services are offered to all our customers. We assure you the best deals in all our properties and the chance to live a more luxurious life with lesser cost.</p>

                </div>

                <div className='d-flex w_div'>
                    <div>
                        <div className='o_logo'>
                            <img src="https://bookmypg.co.in/assets/front/images/find-pgs-icon.png" alt="" height={63} width={63} />                        </div>
                        <p className='worktex'>Find PG Near You</p>
                        <p className='texdesc my-2'>Find Your PG By Selecting Your Location</p>

                    </div>
                    <div>

                        <div className='o_logo'>
                            <img src="https://bookmypg.co.in/assets/front/images/book-online-icon.png" alt="" height={63} width={63} />
                        </div>
                        <p className='worktex'>Book Online</p>
                        <p className='texdesc my-2'>Book your PG online Through Our web</p>
                    </div>

                    <div className='my-5'>
                        <div className='o_logo'>
                            <img src="https://bookmypg.co.in/assets/front/images/best-deals-icon.png" alt="" height={63} width={63} />
                        </div>
                        <p className='worktex'>Best Deals On PGs</p>
                        <p className='texdesc my-2'>We have tie ups with PGs in every city. We make sure that You get the best deals for PGs. </p>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Home