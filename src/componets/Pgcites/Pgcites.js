import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../../data/result'
import './pgcites.css'



const Pgcites = () => {
    let { city } = useParams();

    // let [citydata, setcitydata] = useState(data);
    let citydata = data;

    citydata = citydata.filter(function (a) {
        return a.city === `${city}`;
    });

    return (
        <>
            <div className='d-flex'>

                <div className='filter'>

                </div>


                <div>
                    <div className='upper'>
                        <b style={{ color: '#041073', fontSize: 20 }}>{citydata.length} Result Found </b>

                        <div>
                            <div>Lower Price </div>
                            <div>Higher Price </div>

                        </div>
                    </div>

                    <div className='container data'>
                        {
                            citydata.map((data, k) => {
                                return (
                                    <div className='pg_details' key={k}>

                                        <div className='pg_div container'>
                                            <div className='div_img'>
                                                <img src={data.src1} alt="lodaing" className='pg_img' />
                                            </div>

                                            {/*pg name and gender logo  */}
                                            <div className='div_name_logo d-flex' >
                                                <div className='div_name'>
                                                    <p>{data.pg_name}</p>
                                                </div>
                                            </div>

                                            {/* Gender   */}
                                            <div className='d-flex my-2'>
                                                   <b>Gender : </b> 
                                                {(data.Gender === "male") && <div className='div_logo'>
                                                    <img src="https://bookmypg.co.in/assets/front/images//male-c.svg" alt="male" height={30} width={30} /></div>
                                                }
                                                {(data.Gender === "female") && <div className='div_logo'>
                                                    <img src="https://bookmypg.co.in/assets/front/images//female-c.svg" alt="male" height={30} width={30} /></div>
                                                }
                                                {(data.Gender === "unisex") &&
                                                    <div className='div_logo'>
                                                        <img src="https://bookmypg.co.in/assets/front/images//female-c.svg" alt="male" height={30} width={30} />
                                                        <img src="https://bookmypg.co.in/assets/front/images//male-c.svg" className='mx-1' alt="male" height={30} width={30} />
                                                    </div>

                                                }
                                            </div>


                                            <div>
                                                {/* Addrress */}
                                                <p>
                                                    <b>Location</b> : {data.Address}
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
                                                <button className='btn'>View Details</button>
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