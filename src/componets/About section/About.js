import React from 'react'
import Search from '../Search cites/Search'
import { data } from '../../data/result'
import './about.css'

const About = () => {
    return (
        <>

            <div className='d-flex'>

                <div className='filter'>

                </div>


                <div>
                    <div className='upper'>
                        <b>93 Result Found </b>

                        <div>
                            <div>Lower Price </div>
                            <div>Higher Price </div>

                        </div>
                    </div>


                    <div className='container data'>
                        {
                            data.map(data => {
                                return (
                                    <Search img={data.src1} pg_name={data.pg_name} Address={data.Address} Gender={data.Gender} price={data.Price} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default About