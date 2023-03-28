import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../../data/pgdata'
import './details.css'

const Details = () => {

    let { id } = useParams();

    let pg = data.filter(function (e) {
        return (e.id == `${id}`);
    });
    return (
        <>
            {/* Upper section */}
            <div className='upper_section'>
                <div>
                    <p> Rent : {pg[0].Price} </p>
                </div>
            </div>


            <div>
                <div>
                    {/* left section */}
                </div>

                <div>
                    {/* right section */}
                </div>
            </div>

            <div>
                {/* Food and kitcken */}
            </div>

            <div>
                {/* other charges */}
            </div>

            <div>
                {/* House Rule */}
            </div>

        </>
    )
}

export default Details