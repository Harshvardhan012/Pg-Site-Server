import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { data } from '../../data/pgdata'
import './details.css'

const Details = () => {

    let { id } = useParams();

    let pg = data.filter(function (e) {
        // eslint-disable-next-line 
        return (e.id == `${id}`);
    });


    let sliderContainer;
    let images;
    let index = 0;

    const previous = () => {
        console.log(sliderContainer);
        index--;
        if (index < 0) {
            index = images.length - 1;
        }
        if (sliderContainer)
            sliderContainer[0].style.left = "-" + index * 100 + "%";
    };

    const next = () => {
        index++;
        if (index >= images.length) {
            index = 0;
        }
        if (sliderContainer)
            sliderContainer[0].style.left = "-" + index * 100 + "%";
    };
    useEffect(() => {
        // eslint-disable-next-line
        sliderContainer = document.getElementsByClassName("slider-container");
        // eslint-disable-next-line
        images = document.querySelectorAll(".slider-container img");
    }, [previous, next])




    return (

        <>
            {/* Upper section */}
            <div className='upper_section d-flex'>

                <div className='upperrent '>
                    <p> Rent/Bed</p>
                    <b style={{ fontSize: 20, paddingRight: 3 }}>₹{pg[0].Price}</b>onwards
                </div>

                <div className='upperright'>
                    <div>
                        <h2 className='upper_name'>{pg[0].pg_name.substring(0, 40)}</h2>
                        <p className='local_area'>in <Link style={{ textDecoration: 'none' }}>{pg[0].area}</Link></p>
                    </div>

                    <div className='occupcy'>
                        <span className='gender' style={{ fontSize: 14 }}>
                            For {pg[0].Gender.toUpperCase()}
                        </span>
                    </div>

                    <div className='phone_no_div'>
                        <button className='contact'>View Phone No</button>
                    </div>
                </div>
            </div>
            {/* Lower  */}
            <nav className="navbar navbar-expand-lg bg-body-tertiary" >
                <div className="container-fluid" >
                    <div className="collapse2 navbar-collapse" id="navbarNav" >
                        <ul className="navbar-nav" >
                            <li className="nav-item">
                                <Link className="nav-link" to="">Details</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="">House Rules</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="">Other charges</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="">Common Amentites</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Details Section */}

            <div className='pg_deatils container d-flex'>
                <div className='left_part'>
                    <div className="slider">
                        <div className="slider-container">
                            <img src={pg[0].src1} alt="1" />
                            <img src={pg[0].src3} alt="2" />
                            <img src={pg[0].src2} alt="3" />
                            <img src={pg[0].src4} alt="4" />
                            <img src={pg[0].src5} alt="5" />
                            <img src={pg[0].src6} alt="6" />
                        </div>
                        <div className="slider-controls">
                            <button className="prev-button" onClick={previous}><i class="fa-solid fa-chevron-left"></i></button>
                            <button className="next-button" onClick={next}><i class="fa-solid fa-chevron-right" ></i></button>
                        </div>
                    </div>
                    <div className='d-flex my-4 mx-4' >
                        <button className='contact'>View Phone No</button>
                        <button className='contact mx-4'>Contact Owner</button>
                    </div>
                </div>

                <div className='right_section'>
                    <div>
                        <h3 className='pg_name my-3'>{pg[0].pg_name.substring(0, 50)}</h3>
                        <p className='pg_desc'>{pg[0].desc.substring(0, 410)}</p>
                    </div>

                    <hr />

                    <div class="container">
                        <div class="row">
                            <div class="col small_div">Deposit Amount</div>
                            <div class="col small_div">Maintenance</div>
                            <div class="col small_div">Notice Period</div>
                            <div class="col small_div">Water Charges</div>
                        </div>
                        <div class="row">
                            <div class="col"><span className='small_val'>{pg[0].deposit}</span></div>
                            <div class="col"> <span className='small_val'>{pg[0].maintenance.charAt(0).toUpperCase() + pg[0].maintenance.slice(1)}</span></div>
                            <div class="col"> <span className='small_val'>{pg[0].notice_period} Month</span></div>
                            <div class="col"> <span className='small_val'>{pg[0].water_charges.charAt(0).toUpperCase() + pg[0].water_charges.slice(1)}</span></div>
                        </div>

                    </div>

                    <hr />
                    <div class="container">
                        <div class="row">
                            <div class="col small_div">Food Availability</div>
                            <div class="col small_div">AC Rooms</div>
                            <div class="col small_div">Parking</div>
                            <div class="col small_div">Power Backup</div>
                        </div>
                        <div class="row">
                            <div class="col"><span className='small_val'>{pg[0].Food_available.charAt(0).toUpperCase() + pg[0].Food_available.slice(1)}</span></div>
                            <div class="col"> <span className='small_val'>{pg[0].ac_room.charAt(0).toUpperCase() + pg[0].ac_room.slice(1)}</span></div>
                            <div class="col"> <span className='small_val'>{pg[0].parking.charAt(0).toUpperCase() + pg[0].parking.slice(1)}</span></div>
                            <div class="col"> <span className='small_val'>{pg[0].power_backup.charAt(0).toUpperCase() + pg[0].power_backup.slice(1)}</span></div>
                        </div>

                    </div>
                    <hr />

                    <div class="container">
                        <div class="row">
                            <div class="col small_div">Available For</div>
                            <div class="col small_div">Total Room Available</div>
                            <div class="col small_div">Preferred Tenants</div>
                            <div class="col small_div">Operating Since</div>
                        </div>
                        <div class="row">
                            <div class="col"><span className='small_val'>{pg[0].available_for.charAt(0).toUpperCase() + pg[0].available_for.slice(1)}</span></div>
                            <div class="col"> <span className='small_val'>{pg[0].no_of_beds}</span></div>
                            <div class="col"> <span className='small_val'>{pg[0].preferred_tenants.charAt(0).toUpperCase() + pg[0].preferred_tenants.slice(1)}</span></div>
                            <div class="col"> <span className='small_val'>{pg[0].opertaing_since}</span></div>
                        </div>
                    </div>
                    <div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Details