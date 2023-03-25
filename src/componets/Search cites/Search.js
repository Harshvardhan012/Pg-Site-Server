import React from 'react'
import './search.css'


const Search = (props) => {
    return (

        <div className='pg_details'>

            <div className='pg_div container'>
                <div className='div_img'>
                    <img src={props.img} alt="lodaing" className='pg_img' />
                </div>

                {/*pg name and gender logo  */}
                <div className='div_name_logo d-flex' >
                    <div className='div_name'>
                        <p>{props.pg_name}</p>
                    </div>
                    <div className='div_logo'>
                        <img src="https://bookmypg.co.in/assets/front/images//male-c.svg" alt="male" height={30} width={30} />
                    </div>
                </div>

                <div>
                    {/* Addrress */}
                    <p>
                        <b>Location</b> : {props.Address} 
                        
                    </p>
                </div>

                {/*Rent Details*/}
                <div>
                    <p>

                        <b>Rent</b> : {props.price}
                    </p>
                </div>

                {/* View Pg Details Button */}
                <div className='div_btn'>
                    <button className='btn'>View PG Details</button>
                </div>
            </div>

        </div>


    )
}

export default Search;

