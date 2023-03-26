import React from 'react'
import { data } from '../../data/result'
import './pgcites.css'

const Pgcites = () => {
    return (
        <>
            <div className='d-flex'>

                <div className='filter'>

                </div>


                <div>
                    <div className='upper'>
                        <b>{data.length} Result Found </b>

                        <div>
                            <div>Lower Price </div>
                            <div>Higher Price </div>

                        </div>
                    </div>

                    <div className='container data'>
                        {
                            data.map((data, k) => {
                                return (
                                    <>

                                        <div className='pg_details'>

                                            <div className='pg_div container'>
                                                <div className='div_img'>
                                                    <img src={data.src1} alt="lodaing" className='pg_img' />
                                                </div>

                                                {/*pg name and gender logo  */}
                                                <div className='div_name_logo d-flex' >
                                                    <div className='div_name'>
                                                        <p>{data.pg_name}</p>
                                                    </div>
                                                    <div className='div_logo'>
                                                        <img src="https://bookmypg.co.in/assets/front/images//male-c.svg" alt="male" height={30} width={30} />
                                                    </div>
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
                                                    <button className='btn'>View PG Details</button>
                                                </div>
                                            </div>

                                        </div>
                                    </>
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