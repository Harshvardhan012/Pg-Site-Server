import React from 'react'
import './home.css'
import { data } from '../../data/data'
import City from '../City/City'

const Home = () => {
    return (
        <div>
            <div className="container section1">
                <h1 style={{ color: "#041073" }}>Book MY PG</h1>
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

                <div>

                    <h2 className="h2 anim-left-title">About Book My PG</h2>
                    <p className='tex'>"We, at Book My PG, are India's fastest-growing network of managed Paying Guest (PG) rentals. We hope to provide you with the best renting solutions with the help of our designs and technology.Our services across the country will help you find and book Paying Guest (PG) rental homes."</p>
                </div>


                <div class="col-md-6 wow fadeIn animated" > 
                <img src="https://bookmypg.co.in/assets/front/images/about.png" alt="" class="img-responsive w100" /> </div>

        </div>

        </div >

    )
}

export default Home