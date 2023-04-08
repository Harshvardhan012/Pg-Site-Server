import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { data } from '../../data/pgdata'
import './pgcites.css'



const Pgcites = () => {
    let { city } = useParams();
    const [citydata, setcitydata] = useState(data);
    const [sort, setsort] = useState(false);
    const [genderfilter, setgenderfilter] = useState('all');
    let pin = document.getElementById('pin');
    
    
    
    //  changes
    const host = "http://localhost:5000";
    const initialnotes = []
    const [notes, setnotes] = useState(initialnotes);
    // const [citydata, setcitydata] = useState(data);
    // console.log(notes);
    // let data = notes;
  
  
      const GetNotes = async () => {
  
          // Api call
          const response = await fetch(`${host}/api/details/fetchallnotes`, {
              method: "GET",
              headers: {
                  "Content-Type": "application/json",
                  "token": localStorage.getItem('token')
              }
          });
          const json = await response.json();
          setnotes(json);
        //   console.log(json);
      }
  
      useEffect(() => {
          GetNotes();
          setcitydata(notes);
      }, [])
  
      //  changes
  











    // silde



    const clearfilter = () => {
        const btn = [];
        btn[0] = document.getElementById('flexRadioDisabled1');
        btn[1] = document.getElementById('flexRadioDisabled2');
        btn[2] = document.getElementById('flexRadioDisabled3');
        btn[3] = document.getElementById('flexRadio1');
        btn[4] = document.getElementById('flexRadio2');
        btn[5] = document.getElementById('flexRadio3');
        btn[6] = document.getElementById('flexRadio4');

        for (var i = 0; i < 7; i++) {
            btn[i].checked = false;
        }
        var newdata = data.filter(function (a) {
            return a.city.toLowerCase() === `${city.toLowerCase()}`;
        });

        pin.value = "";
        setcitydata(newdata);
    }

    useEffect(() => {
        var newdata = citydata.filter(function (a) {
            return a.city.toLowerCase() === `${city.toLowerCase()}`;
        })
        setcitydata(newdata);
        // eslint-disable-next-line
    }, []);

    let navi = useNavigate();


    const onselectl = () => {
        setsort(true);
    }

    const onselecth = () => {
        setsort(false);
    }

    const handleclick = (e) => {
    }

    const renttogenderfilterswitch = () => {
        var btn = [];
        pin.value = "";
        btn[0] = document.getElementById('flexRadio1');
        btn[1] = document.getElementById('flexRadio2');
        btn[2] = document.getElementById('flexRadio3');
        btn[3] = document.getElementById('flexRadio4');

        for (var i = 0; i < 4; i++) {
            btn[i].checked = false;
        }
    }

    const malefilter = () => {
        var pincode = pin.value.toString();

        var newdata = data.filter(function (a) {
            return a.Gender.toLowerCase() === 'male' && a.city.toLowerCase() === `${city.toLowerCase()}` && a.pincode.match(pincode);
        })
        setgenderfilter("male");
        setcitydata(newdata);
        renttogenderfilterswitch();
    }

    const femalefilter = () => {
        var pincode = pin.value.toString();
        var newdata = data.filter(function (a) {
            return a.Gender.toLowerCase() === 'female' && a.city.toLowerCase() === `${city.toLowerCase()}` && a.pincode.match(pincode);
        })
        setgenderfilter("female");
        setcitydata(newdata);
        renttogenderfilterswitch();
    }

    const unisexfilter = () => {
        var pincode = pin.value.toString();
        var newdata = data.filter(function (a) {
            return a.Gender.toLowerCase() === 'unisex' && a.city.toLowerCase() === `${city.toLowerCase()}` && a.pincode.match(pincode);
        })
        setgenderfilter("unisex");
        setcitydata(newdata);
        renttogenderfilterswitch();
    }

    const under5000filter = () => {
        var pincode = pin.value.toString();
        var newdata;
        if (genderfilter === 'male') {
            newdata = data.filter(function (a) {
                return a.Gender.toLowerCase() === 'male' && a.city.toLowerCase() === `${city.toLowerCase()}` && a.Price < 5000 && a.pincode.match(pincode)
            });
        }
        else if (genderfilter === 'female') {
            newdata = data.filter(function (a) {
                return a.Gender.toLowerCase() === 'female' && a.city.toLowerCase() === `${city.toLowerCase()}` && a.Price < 5000 && a.pincode.match(pincode)
            });
        }

        else if (genderfilter === 'unisex') {
            newdata = data.filter(function (a) {
                return a.Gender.toLowerCase() === 'unisex' && a.city.toLowerCase() === `${city.toLowerCase()}` && a.Price < 5000 && a.pincode.match(pincode)
            });
        }
        else if (genderfilter === 'all') {
            newdata = data.filter(function (a) {
                return a.city.toLowerCase() === `${city.toLowerCase()}` && a.Price < 5000 && a.pincode.match(pincode)
            });
        }
        setcitydata(newdata);
    }

    const val5000to7500filter = () => {
        var pincode = pin.value.toString();
        var newdata;
        if (genderfilter === 'male') {
            newdata = data.filter(function (a) {
                return a.Gender.toLowerCase() === 'male' && a.city.toLowerCase() === `${city.toLowerCase()}` && a.Price >= 5000 && a.Price < 7500 && a.pincode.match(pincode)
            });
        }
        else if (genderfilter === 'female') {
            newdata = data.filter(function (a) {
                return a.Gender.toLowerCase() === 'female' && a.city.toLowerCase() === `${city.toLowerCase()}` && a.Price >= 5000 && a.Price < 7500 && a.pincode.match(pincode)
            });
        }

        else if (genderfilter === 'unisex') {
            newdata = data.filter(function (a) {
                return a.Gender.toLowerCase() === 'unisex' && a.city.toLowerCase() === `${city.toLowerCase()}` && a.Price >= 5000 && a.Price < 7500 && a.pincode.match(pincode)
            });
        }
        else if (genderfilter === 'all') {
            newdata = data.filter(function (a) {
                return a.city.toLowerCase() === `${city.toLowerCase()}` && a.Price >= 5000 && a.Price < 7500 && a.pincode.match(pincode)
            });
        }
        setcitydata(newdata);
    }

    const val7500to10000filter = () => {
        var pincode = pin.value.toString();
        var newdata;
        if (genderfilter === 'male') {
            newdata = data.filter(function (a) {
                return a.Gender.toLowerCase() === 'male' && a.city.toLowerCase() === `${city.toLowerCase()}` && a.Price >= 7500 && a.Price < 10000 && a.pincode.match(pincode)
            });
        }
        else if (genderfilter === 'female') {
            newdata = data.filter(function (a) {
                return a.Gender.toLowerCase() === 'female' && a.city.toLowerCase() === `${city.toLowerCase()}` && a.Price >= 7500 && a.Price < 10000 && a.pincode.match(pincode)
            });
        }

        else if (genderfilter === 'unisex') {
            newdata = data.filter(function (a) {
                return a.Gender.toLowerCase() === 'unisex' && a.city.toLowerCase() === `${city.toLowerCase()}` && a.Price >= 7500 && a.Price < 10000 && a.pincode.match(pincode)
            });
        }
        else if (genderfilter === 'all') {
            newdata = data.filter(function (a) {
                return a.city.toLowerCase() === `${city.toLowerCase()}` && a.Price >= 7500 && a.Price < 10000 && a.pincode.match(pincode)
            });
        }
        setcitydata(newdata);
    }

    const morethan10000filter = () => {
        var pincode = pin.value.toString();
        var newdata;
        if (genderfilter === 'male') {
            newdata = data.filter(function (a) {
                return a.Gender.toLowerCase() === 'male' && a.city.toLowerCase() === `${city.toLowerCase()}` && a.Price >= 10000 && a.pincode.match(pincode)
            });
        }
        else if (genderfilter === 'female') {
            newdata = data.filter(function (a) {
                return a.Gender.toLowerCase() === 'female' && a.city.toLowerCase() === `${city.toLowerCase()}` && a.Price >= 10000 && a.pincode.match(pincode)
            });
        }

        else if (genderfilter === 'unisex') {
            newdata = data.filter(function (a) {
                return a.Gender.toLowerCase() === 'unisex' && a.city.toLowerCase() === `${city.toLowerCase()}` && a.Price >= 10000 && a.pincode.match(pincode)
            });
        }
        else if (genderfilter === 'all') {
            newdata = data.filter(function (a) {
                return a.city.toLowerCase() === `${city.toLowerCase()}` && a.Price >= 10000 && a.pincode.match(pincode)
            });
        }
        setcitydata(newdata);
    }

    const search_by_pin = () => {
        var pincode = pin.value.toString();
        var newdata;
        console.log(genderfilter);
        if (pincode.length > 0 && genderfilter === 'all') {
            newdata = data.filter(function (a) {
                return a.pincode.match(pincode) && a.city.toLowerCase() === `${city.toLowerCase()}`
            })
        }
        else {
            newdata = data.filter(function (a) {
                return a.pincode.match(pincode) && a.Gender.toLowerCase() === genderfilter;
            })
        }
        setcitydata(newdata);

    }


    return (
        <>
            <div className='d-flex'>

                <div className='filter heading'>
                    {/* Filter */}
                    <div className='heading d-flex'>
                        <h3 style={{ color: '#041073', fontSize: 22 }}>Filters</h3>
                        <button type="button" className="btn btnclearfilter" onClick={clearfilter}>Clear Filters <i className="fa-solid fa-xmark fa-beat mx-1"></i></button>

                    </div>

                    <hr />

                    {/* Gender Filter */}
                    <div className='filter1'>
                        <h3 style={{ color: '#041073', fontSize: 20 }} className='my-3'>Gender</h3>

                        <div className="form-check">
                            <input className="form-check-input " type="radio" name="flexRadioDisabled" id="flexRadioDisabled1" onClick={malefilter} />
                            <label className="form-check-label" htmlFor="flexRadioDisabled" style={{ color: '#041073', fontSize: 18 }}>
                                Male
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled2" onClick={femalefilter} />
                            <label className="form-check-label" htmlFor="flexRadioDisabled2" style={{ color: '#041073', fontSize: 18 }}>
                                Female
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled3" onClick={unisexfilter} />
                            <label className="form-check-label" htmlFor="flexRadioDisabled3" style={{ color: '#041073', fontSize: 18 }}>
                                Unisex
                            </label>
                        </div>

                    </div>

                    <hr />

                    {/* Rent Filter */}
                    <div className='filter1'>
                        <h3 style={{ color: '#041073', fontSize: 20 }} className='my-3'>Monthly rent</h3>

                        <div className="form-check my-2">
                            <input className="form-check-input" type="radio" name="flexRadio" id="flexRadio1" onClick={under5000filter} />
                            <label className="form-check-label" htmlFor="flexRadio1" style={{ color: '#041073', fontSize: 18 }}>
                                &lt;  5000
                            </label>
                        </div>

                        <div className="form-check my-2">
                            <input className="form-check-input" type="radio" name="flexRadio" id="flexRadio2" onClick={val5000to7500filter} />
                            <label className="form-check-label" htmlFor="flexRadio2" style={{ color: '#041073', fontSize: 18 }}>
                                5,000 - 7,500
                            </label>
                        </div>

                        <div className="form-check my-2">
                            <input className="form-check-input" type="radio" name="flexRadio" id="flexRadio3" onClick={val7500to10000filter} />
                            <label className="form-check-label" htmlFor="flexRadio3" style={{ color: '#041073', fontSize: 18 }}>
                                7,500 - 10,000
                            </label>
                        </div>

                        <div className="form-check my-2">
                            <input className="form-check-input" type="radio" name="flexRadio" id="flexRadio4" onClick={morethan10000filter} />
                            <label className="form-check-label" htmlFor="flexRadio4" style={{ color: '#041073', fontSize: 18 }}>
                                &gt; 10,000
                            </label>
                        </div>

                    </div>

                    <hr />
                    {/* Todo*/}

                    <div className='filter1'>
                        <label htmlFor="number" style={{ color: '#041073', fontSize: 16 }}><b>Search by Pincode</b></label>
                        <div className='pin_div'>
                            <input name="pincode" id='pin' type="number" inputMode="numeric" maxLength="4" autoComplete='false' className='pin_enter' placeholder='Enter Pincode' /><i className="fa-solid fa-magnifying-glass pin_search" onClick={search_by_pin}></i>
                        </div>
                    </div>



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
                            citydata.length > 0 ?
                                sort ?
                                    citydata.sort(function (a, b) {
                                        return parseFloat(a.Price) - parseFloat(b.Price);
                                    }).map((data, k) => {
                                        return (
                                            <div className='pg_details' key={k}>


                                                <div className='pg_div container'>
                                                    <div className='div_img'>
                                                        <img src={data.src12} alt="lodaing" className='pg_img' />
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
                                                        {/* Address */}
                                                        <p>
                                                            <b>LocatAion</b> : {data.Address.substring(0, 80)}
                                                        </p>
                                                    </div>



                                                    {/*Rent Details*/}
                                                    <div>
                                                        <p>
                                                            <b>Rent</b> : {data.Price}

                                                        </p>
                                                    </div>

                                                    <div >
                                                        {/* pincode */}
                                                        <p>
                                                            <b>Pincode</b> : {data.pincode}
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
                                    :
                                    citydata.sort(function (a, b) {
                                        return parseFloat(b.Price) - parseFloat(a.Price);
                                    }).map((data, k) => {
                                        return (
                                            <div className='pg_details' key={k}>

                                                <div className='pg_div'>
                                                    <div className='div_img'>

                                                        <img src={data.src3} alt="lodaing" className='pg_img' />

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
                                                            <b>Pincode</b> : {data.pincode}
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
                                // todo 
                                <div>
                                    No Result Found
                                </div>

                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pgcites