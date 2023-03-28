import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { data } from '../../data/pgdata'
import './pgcites.css'



const Pgcites = () => {
    let { city } = useParams();
    const [citydata, setcitydata] = useState(data);
    const [sort, setsort] = useState(false);

    useEffect(() => {
        var newdata = citydata.filter(function (a) {
            return a.city.toLowerCase() === `${city.toLowerCase()}`;
        })
        console.log("run0");
        setcitydata(newdata);
    }, [])

    let navi = useNavigate();


    const onselectl = () => {
        setsort(true);
    }

    const onselecth = () => {
        setsort(false);
    }

    const handleclick = (e) => {
    }

    return (
        <>
            <div className='d-flex'>

                <div className='filter'>

                </div>


                <div >
                    <div className='sort_by_div'>
                        <div className='upper d-flex'>
                            <b style={{ color: '#041073', fontSize: 20 }}>{citydata.length} Result Found </b>
                            <div>
                                <div className="dropdown sort_button">
                                    <button className=" dropdown-toggle drop " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <b>Sort By</b>
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-dark">
                                        <button className="dropdown-item" onClick={onselectl}>Price : Low to High {sort ? <i className="fa-solid fa-circle-check mx-2" style={{ color: "#39b329" }}></i> : " "}</button>
                                        <button className="dropdown-item" onClick={onselecth}>Price : High to Low   {!sort ? <i className="fa-solid fa-circle-check mx-2" style={{ color: "#39b329" }}></i> : " "}</button>
                                    </ul>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className='container data'>
                        {
                            citydata &&
                            sort ? citydata.sort(function (a, b) {
                                return parseFloat(a.Price) - parseFloat(b.Price);
                            }).map((data, k) => {
                                return (
                                    <div className='pg_details' key={k}>

                                        <div className='pg_div container'>
                                            <div className='div_img'>
                                                <img src={data.src1} alt="lodaing" className='pg_img' />
                                            </div>

                                            {/*pg name and gender logo  */}
                                            <div className='div_name_logo d-flex' >
                                                <div className='div_name'>
                                                    <p>{data.pg_name.substring(0, 65)}</p>
                                                </div>
                                            </div>

                                            {/* Gender   */}
                                            <div className='d-flex my-2'>
                                                <b>Gender : </b>
                                                {(data.Gender.toLowerCase() === "male") && <div className='div_logo'>
                                                    <img src="https://bookmypg.co.in/assets/front/images//male-c.svg" alt="male" height={30} width={30} /></div>
                                                }
                                                {(data.Gender.toLowerCase() === "female") && <div className='div_logo'>
                                                    <img src="https://bookmypg.co.in/assets/front/images//female-c.svg" alt="male" height={30} width={30} /></div>
                                                }
                                                {(data.Gender.toLowerCase() === "unisex") &&
                                                    <div className='div_logo'>
                                                        <img src="https://bookmypg.co.in/assets/front/images//female-c.svg" alt="male" height={30} width={30} />
                                                        <img src="https://bookmypg.co.in/assets/front/images//male-c.svg" className='mx-1' alt="male" height={30} width={30} />
                                                    </div>

                                                }
                                            </div>


                                            <div className=' d-flex div_location'>
                                                {/* Addrress */}
                                                <p>
                                                    <b>Location</b> : {data.Address.substring(0, 80)}
                                                </p>
                                            </div>

                                            {/*Rent Details*/}
                                            <div>
                                                <p>
                                                    <b>Rent</b> : {data.Price}
                                                </p>
                                            </div>

                                            {/* View Pg Details Button */}
                                            <div className='div_btn'>
                                                <button className='btn' onClick={(e) => handleclick(navi(`/pgdetails/${data.id}`))}>View Details</button>
                                            </div>
                                        </div>

                                    </div>
                                )
                            }) :
                                citydata.sort(function (a, b) {
                                    return parseFloat(b.Price) - parseFloat(a.Price);
                                }).map((data, k) => {
                                    return (
                                        <div className='pg_details' key={k}>

                                            <div className='pg_div container'>
                                                <div className='div_img'>
                                                    <img src={data.src1} alt="lodaing" className='pg_img' />
                                                </div>

                                                {/*pg name and gender logo  */}
                                                <div className='div_name_logo d-flex' >
                                                    <div className='div_name'>
                                                        <p>{data.pg_name.substring(0, 65)}</p>
                                                    </div>
                                                </div>

                                                {/* Gender   */}
                                                <div className='d-flex my-2'>
                                                    <b>Gender : </b>
                                                    {(data.Gender.toLowerCase() === "male") && <div className='div_logo'>
                                                        <img src="https://bookmypg.co.in/assets/front/images//male-c.svg" alt="male" height={30} width={30} /></div>
                                                    }
                                                    {(data.Gender.toLowerCase() === "female") && <div className='div_logo'>
                                                        <img src="https://bookmypg.co.in/assets/front/images//female-c.svg" alt="male" height={30} width={30} /></div>
                                                    }
                                                    {(data.Gender.toLowerCase() === "unisex") &&
                                                        <div className='div_logo'>
                                                            <img src="https://bookmypg.co.in/assets/front/images//female-c.svg" alt="male" height={30} width={30} />
                                                            <img src="https://bookmypg.co.in/assets/front/images//male-c.svg" className='mx-1' alt="male" height={30} width={30} />
                                                        </div>

                                                    }
                                                </div>


                                                <div className=' d-flex div_location'>
                                                    {/* Addrress */}
                                                    <p>
                                                        <b>Location</b> : {data.Address.substring(0, 80)}
                                                    </p>
                                                </div>

                                                {/*Rent Details*/}
                                                <div>
                                                    <p>
                                                        <b>Rent</b> : {data.Price}
                                                    </p>
                                                </div>

                                                {/* View Pg Details Button */}
                                                <div className='div_btn'>
                                                    <button className='btn' onClick={(e) => handleclick(navi(`/pgdetails/${data.id}`))}>View Details</button>
                                                </div>
                                            </div>

                                        </div>
                                    )
                                })

                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pgcites