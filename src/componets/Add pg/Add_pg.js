import React, { useState } from "react";
import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// available_for
// Power

const Add_Pg = () => {
  const [details, setdeatils] = useState({
    id: "",
    pg_name: "",
    Address: "",
    city: "",
    desc: "",
    area: "",
    pincode: "",
    maintenance: "",
    water_charges: "",
    deposit: "",
    Notice_period: "",
    Gate_timing: "",
    Price: "",
    no_of_beds: "",
    opertaing_since: "",
  });

  const [drop, setdrop] = useState({
    Gender: "Unisex",
    Food_available: "Vegetarien",
    ac_room: "Available",
    parking: "Available",
    power_backup: "Available",
    available_for: "Unisex",
    preferred_tenants: "Available",
    laundry: "Available",
    Visitor_Entry: "Allowed",
    Non_veg: "Allowed",
    opposite_gender: "Allowed",
    Smoking: "Allowed",
    Drinking: "Allowed",
    Loud_Music: "Allowed",
    Party: "Allowed",
    wifi: "Available",
    Power: "Available",
    Room_cleaning: "Available",
    Water_cooler: "Available",
    Gym: "Available",
    Lift: "Available",
    Warden: "Available",
  });

  const dropchange = async (e) => {
    let id = document.getElementById(`${e.target.id}`).value;
    e.target.value = id;
    setdrop({ ...drop, [e.target.name]: e.target.value });
  };

  const changehandler = (e) => {
    setdeatils({ ...details, [e.target.name]: e.target.value });
  };

  const [image, setImage] = useState("");
  const upload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", details.id);
    formData.append("pg_name", details.pg_name);
    formData.append("Address", details.Address);
    formData.append("city", details.city);
    formData.append("desc", details.desc);
    formData.append("area", details.area);
    formData.append("pincode", details.pincode);
    formData.append("maintenance", details.maintenance);
    formData.append("water_charges", details.water_charges);
    formData.append("deposit", details.deposit);
    formData.append("Notice_period", details.Notice_period);
    formData.append("Gate_timing", details.Gate_timing);
    formData.append("Price", details.Price);
    formData.append("no_of_beds", details.no_of_beds);
    formData.append("opertaing_since", details.opertaing_since);

    formData.append("Gender", drop.Gender);
    formData.append("Food_available", drop.Food_available);
    formData.append("ac_room", drop.ac_room);
    formData.append("parking", drop.parking);
    formData.append("power_backup", drop.power_backup);
    formData.append("available_for", drop.available_for);
    formData.append("preferred_tenants", drop.preferred_tenants);
    formData.append("laundry", drop.laundry);
    formData.append("Visitor_Entry", drop.Visitor_Entry);
    formData.append("Non_veg", drop.Non_veg);
    formData.append("opposite_gender", drop.opposite_gender);
    formData.append("Smoking", drop.Smoking);
    formData.append("Drinking", drop.Drinking);
    formData.append("Loud_Music", drop.Loud_Music);
    formData.append("Party", drop.Party);
    formData.append("wifi", drop.wifi);
    formData.append("Power", drop.Power);
    formData.append("Room_cleaning", drop.Room_cleaning);
    formData.append("Water_cooler", drop.Water_cooler);
    formData.append("Gym", drop.Gym);
    formData.append("Lift", drop.Lift);
    formData.append("Warden", drop.Warden);

    for (let i = 0; i < image.length; i++) {
      const file = image[i];
      formData.append("image", file);
    }

    await axios.post("http://localhost:5000/api/upload/image", formData);
  };

  return (
    <>
      <div className="container my-4">
        <h1>Fill Pg Details</h1>
      </div>

      <div className="container">
        <form onSubmit={upload}>
          {/* Id */}
          <div>
            <label htmlFor="id" className="form-label mt-3 owner_details">
              <b>Enter Id</b>
            </label>

            <input
              type="number"
              className="form-control"
              id="ownerid"
              name="id"
              value={details.id}
              onChange={changehandler}
              required
            ></input>
          </div>

          {/* Pg_name */}

          {/* <div className="mb-3">
            <label htmlFor="pg_name" className="form-label mt-3 owner_details">
              <b>Enter PG Name</b>
            </label>

            <input
              type="name"
              minLength="5"
              className="form-control"
              id="ownername"
              name="pg_name"
              value={details.pg_name}
              onChange={changehandler}
              required
            />
          </div> */}

          {/* Address */}
          {/* <div className="mb-3">
            <label htmlFor="Address" className="form-label owner_details">
              <b>Enter Pg Address</b>
            </label>
            <textarea
              className="form-control"
              id="Textarea1"
              value={details.Address}
              onChange={changehandler}
              name="Address"
              rows="2"
              required
            ></textarea>
          </div> */}

          {/* City */}
          {/* <div className="mb-3">
            <label htmlFor="city" className="form-label mt-3 owner_details">
              <b>Enter PG City</b>
            </label>
            <input
              type="name"
              minLength="5"
              className="form-control"
              id="citys"
              name="city"
              value={details.city}
              onChange={changehandler}
              required
            />
          </div> */}

          {/* Description */}
          {/* <div className="mb-3">
            <label htmlFor="desc" className="form-label owner_details">
              <b>Enter Pg Description</b>
            </label>
            <textarea
              className="form-control"
              id="Textarea2"
              value={details.desc}
              onChange={changehandler}
              name="desc"
              rows="3"
              required
            ></textarea>
          </div> */}

          {/* Area */}
          {/* <div className="mb-3">
            <label htmlFor="area" className="form-label owner_details">
              <b>Enter Area</b>
            </label>
            <input
              className="form-control"
              id="Textarea2"
              type="text"
              value={details.area}
              onChange={changehandler}
              name="area"
              required
            ></input>
          </div> */}

          {/* Pincode */}

          {/* <div className="mb-3">
            <label htmlFor="pincode" className="form-label">
              <b>Enter Pincode</b>
            </label>

            <input
              id="teladdhar"
              name="pincode"
              className="form-control contact_no"
              type="tel"
              size="6"
              minLength="6"
              maxLength="6"
              value={details.pincode}
              onChange={changehandler}
              pattern="[0-9]{6}"
              required
            />
          </div> */}

          {/* Uplode Images */}
          <input
            onChange={(e) => setImage(e.target.files)}
            type="file"
            multiple
            required
          ></input>

          {/* PG Rules */}
          <div class="container text-center">
            <h4 className="text-centre">PG Rules</h4>
            <div class="row align-items-start">
              <div class="col">
                {/* Gender */}
                <div>
                  <div>
                    <label
                      htmlFor="Gender"
                      className="form-label label_contact"
                    >
                      <b>Pg For Gender</b>
                    </label>
                  </div>
                  <select
                    id="select1"
                    name="Gender"
                    className="mb-3 dropbox_contact"
                    value={drop.Gender}
                    onChange={dropchange}
                  >
                    <option value="Unisex">Unisex</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>

              <div class="col">
                {/* party */}
          <div>
            <div>
              <label htmlFor="Party" className="form-label label_contact">
                <b>Party</b>
              </label>
            </div>
            <select
              id="select15"
              name="Party"
              value={drop.Party}
              onChange={dropchange}
              className="mb-3 dropbox_contact"
            >
              <option value="Allow">Allowed</option>
              <option value="Not-Allow">Not-Allowed</option>
            </select>
          </div>
              </div>

              <div class="col">
                {/*Drinking */}
                <div>
                  <div>
                    <label
                      htmlFor="Drinking"
                      className="form-label label_contact"
                    >
                      <b>Drinking</b>
                    </label>
                  </div>
                  <select
                    id="select13"
                    name="Drinking"
                    className="mb-3 dropbox_contact"
                    value={drop.Drinking}
                    onChange={dropchange}
                  >
                    <option value="Allow">Allowed</option>
                    <option value="Not-Allow">Not-Allowed</option>
                  </select>
                </div>
              </div>

              <div class="col">
                {/*Music */}

                <div>
                  <div>
                    <label
                      htmlFor="Loud_Music"
                      className="form-label label_contact"
                    >
                      <b>Loud Music</b>
                    </label>
                  </div>
                  <select
                    id="select14"
                    name="Loud_Music"
                    className="mb-3 dropbox_contact"
                    value={drop.Loud_Music}
                    onChange={dropchange}
                  >
                    <option value="Allow">Allowed</option>
                    <option value="Not-Allow">Not-Allowed</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="row align-items-start">
              <div className="col">
                {/* Visitor */}
                <div>
                  <div>
                    <label
                      htmlFor="Visitor_Entry"
                      className="form-label label_contact"
                    >
                      <b>Visitor</b>
                    </label>
                  </div>
                  <select
                    id="select9"
                    name="Visitor_Entry"
                    className="mb-3 dropbox_contact"
                    value={drop.Visitor_Entry}
                    onChange={dropchange}
                  >
                    <option value="Allow">Allowed</option>
                    <option value="Not-Allow">Not-Allowed</option>
                  </select>
                </div>
              </div>

              <div className="col">
                {/* Non veg */}
                <div>
                  <div>
                    <label
                      htmlFor="Non_veg"
                      className="form-label label_contact"
                    >
                      <b>Non Veg</b>
                    </label>
                  </div>
                  <select
                    id="select10"
                    name="Non_veg"
                    value={drop.Non_veg}
                    onChange={dropchange}
                    className="mb-3 dropbox_contact"
                  >
                    <option value="Allow">Allowed</option>
                    <option value="Not-Allow">Not-Allowed</option>
                  </select>
                </div>
              </div>

              <div className="col">
                {/*Opposite Gender */}
                <div>
                  <div>
                    <label
                      htmlFor="opposite_gender"
                      className="form-label label_contact"
                    >
                      <b>Opposite Gender</b>
                    </label>
                  </div>
                  <select
                    id="select11"
                    name="opposite_gender"
                    className="mb-3 dropbox_contact"
                    value={drop.opposite_gender}
                    onChange={dropchange}
                  >
                    <option value="Allow">Allowed</option>
                    <option value="Not-Allow">Not-Allowed</option>
                  </select>
                </div>
              </div>

              <div className="col">
                {/*Smoking */}
                <div>
                  <div>
                    <label
                      htmlFor="Smoking"
                      className="form-label label_contact"
                    >
                      <b>Smoking</b>
                    </label>
                  </div>
                  <select
                    id="select12"
                    name="Smoking"
                    value={drop.Smoking}
                    onChange={dropchange}
                    className="mb-3 dropbox_contact"
                  >
                    <option value="Allow">Allowed</option>
                    <option value="Not-Allow">Not-Allowed</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Common Area and Amenities */}
          <div class="container text-center my-5">
            <h4 className="text-centre">Common Area and Amenities</h4>
            <div class="row align-items-start">
              <div class="col">
                {/* Wifi */}
                <div>
                  <div>
                    <label htmlFor="wifi" className="form-label label_contact">
                      <b>Wifi</b>
                    </label>
                  </div>
                  <select
                    id="select16"
                    name="wifi"
                    value={drop.wifi}
                    onChange={dropchange}
                    className="mb-3 dropbox_contact"
                  >
                    <option value="Available">Available</option>
                    <option value="Not-Available">Not-Available</option>
                  </select>
                </div>
              </div>

              <div class="col">
                {/* power backup */}
                <div>
                  <div>
                    <label
                      htmlFor="power_backup"
                      className="form-label label_contact"
                    >
                      <b>Power Backup </b>
                    </label>
                  </div>

                  <select
                    id="select5"
                    name="power_backup"
                    className="mb-3 dropbox_contact"
                    onChange={dropchange}
                    value={drop.power_backup}
                  >
                    <option value="Available">Available</option>
                    <option value="Not-Available">Not-Available</option>
                  </select>
                </div>
              </div>

              <div class="col">
                {/* Room Cleaning */}
                <div>
                  <div>
                    <label
                      htmlFor="Room_cleaning"
                      className="form-label label_contact"
                    >
                      <b>Room Cleaning</b>
                    </label>
                  </div>
                  <select
                    id="select18"
                    name="Room_cleaning"
                    value={drop.Room_cleaning}
                    onChange={dropchange}
                    className="mb-3 dropbox_contact"
                  >
                    <option value="Available">Available</option>
                    <option value="Not-Available">Not-Available</option>
                  </select>
                </div>
              </div>

              <div class="col">
                {/* Water Cooler */}
                <div>
                  <div>
                    <label
                      htmlFor="Water_cooler"
                      className="form-label label_contact"
                    >
                      <b>Water Cooler</b>
                    </label>
                  </div>
                  <select
                    id="select19"
                    name="Water_cooler"
                    value={drop.Water_cooler}
                    onChange={dropchange}
                    className="mb-3 dropbox_contact"
                  >
                    <option value="Available">Available</option>
                    <option value="Not-Available">Not-Available</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="row align-items-start">
              <div className="col">
                {/* Gym */}
                <div>
                  <div>
                    <label htmlFor="Gym" className="form-label label_contact">
                      <b>Gym</b>
                    </label>
                  </div>
                  <select
                    id="select20"
                    name="Gym"
                    value={drop.Gym}
                    onChange={dropchange}
                    className="mb-3 dropbox_contact"
                  >
                    <option value="Available">Available</option>
                    <option value="Not-Available">Not-Available</option>
                  </select>
                </div>
              </div>

              <div className="col">
                {/* Lift */}
                <div>
                  <div>
                    <label htmlFor="Lift" className="form-label label_contact">
                      <b>Lift</b>
                    </label>
                  </div>
                  <select
                    id="select21"
                    name="Lift"
                    value={drop.Lift}
                    onChange={dropchange}
                    className="mb-3 dropbox_contact"
                  >
                    <option value="Available">Available</option>
                    <option value="Not-Available">Not-Available</option>
                  </select>
                </div>
              </div>

              <div className="col">
                {/* Warden */}
                <div>
                  <div>
                    <label
                      htmlFor="Warden"
                      className="form-label label_contact"
                    >
                      <b>Warden</b>
                    </label>
                  </div>
                  <select
                    id="select22"
                    name="Warden"
                    value={drop.Warden}
                    onChange={dropchange}
                    className="mb-3 dropbox_contact"
                  >
                    <option value="Available">Available</option>
                    <option value="Not-Available">Not-Available</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          

          {/* Todo available_for */}
          <div>
            {/* <div className="d-none">
            <label htmlFor="power_backup" className="form-label label_contact">
              <b>available_for </b>
              </label>
          </div>

          <select
          id="select6"
            name="Gender"
            className="mb-3 dropbox_contact d-none"
            >
            <option value="Available">unisex</option>
            <option value="Not-Available">Male</option>
            <option value="Not-Available">female</option>
        </select> */}
          </div>

          {/* Preferred  Tenants */}
          <div>
            <div>
              <label
                htmlFor="preferred_tenants"
                className="form-label label_contact"
              >
                <b>Preferred Tenants </b>
              </label>
            </div>

            <select
              id="select7"
              name="preferred_tenants"
              className="mb-3 dropbox_contact"
              value={drop.preferred_tenants}
              onChange={dropchange}
            >
              <option value="Students">Students</option>
              <option value="Working individuals">Working individuals</option>
              <option value="Family">Family</option>
              <option value="All">All</option>
            </select>
          </div>

          {/* Laundry */}
          <div>
            <div>
              <label htmlFor="laundry" className="form-label label_contact">
                <b>Laundry </b>
              </label>
            </div>

            <select
              id="select8"
              name="laundry"
              className="mb-3 dropbox_contact"
              onChange={dropchange}
              value={drop.laundry}
            >
              <option value="Available">Available</option>
              <option value="Not-Available">Not-Available</option>
            </select>
          </div>

          {/* Ac Room  */}
          <div>
            <div>
              <label htmlFor="ac_room" className="form-label label_contact">
                <b>Ac Room </b>
              </label>
            </div>

            <select
              id="select3"
              name="ac_room"
              className="mb-3 dropbox_contact"
              onChange={dropchange}
              value={details.ac_room}
            >
              <option value="Available">Available</option>
              <option value="Not-Available">Not-Available</option>
            </select>
          </div>

          {/* Parking */}
          <div>
            <div>
              <label htmlFor="parking" className="form-label label_contact">
                <b>Parking</b>
              </label>
            </div>

            <select
              id="select4"
              name="parking"
              className="mb-3 dropbox_contact"
              onChange={dropchange}
              value={drop.parking}
            >
              <option value="Available">Available</option>
              <option value="Not-Available">Not-Available</option>
            </select>
          </div>

          {/* Food_available */}
          <div>
                  <div>
                    <label
                      htmlFor="Food_available"
                      className="form-label label_contact"
                    >
                      <b>Food Available</b>
                    </label>
                  </div>

                  <select
                    id="select2"
                    name="Food_available"
                    className="mb-3 dropbox_contact"
                    onChange={dropchange}
                    value={drop.Food_available}
                  >
                    <option value="Vegetarien">Vegetarien</option>
                    <option value="Non-Vegetarien">Non-Vegetarien</option>
                    <option value="Both">Both</option>
                  </select>
                </div>

          {/* power */}
          <div>
            <div className="d-none">
              <label
                htmlFor="power_backup"
                className="form-label label_contact"
              >
                <b>Power</b>
              </label>
            </div>
            <select
              id="select17"
              name="power_backup"
              value={drop.power_backup}
              onChange={dropchange}
              className="mb-3 dropbox_contact d-none"
            >
              <option value="Available">Available</option>
              <option value="Not-Available">Not-Available</option>
            </select>
          </div>

          {/* To Do  maintence */}
          {/* <div>
            <label htmlFor="city" className="form-label label_contact">
              <b>Maintenance Charges(TODO)</b>
            </label>
          </div>

          <select id="select" className="mb-3 dropbox_contact">
            <option value="Available">Available</option>
            <option value="Not-Available">Not-Available</option>
          </select> */}

          {/* To Do  water */}
          {/* <div>
            <label htmlFor="city" className="form-label label_contact">
              <b>Water Charges(todo)</b>
            </label>
          </div>

          <select id="select" className="mb-3 dropbox_contact">
            <option value="Available">Available</option>
            <option value="Not-Available">Not-Available</option>
          </select> */}

          {/* Changes in amount */}
          {/* <div>
            <label htmlFor="city" className="form-label label_contact">
              <b>Deposite Amount (todo)</b>
            </label>
          </div>

          <input type="number" /> */}

          {/* changes */}
          {/* <div>
            <label htmlFor="city" className="form-label label_contact">
              <b>Notice Period (todo)</b>
            </label>
          </div>
          <input type="number" placeholder="Enter value in Month" /> */}

          {/* Gate Timing changes */}
          {/* <div>
            <label htmlFor="city" className="form-label label_contact">
              <b>Gate Timing (todo)</b>
            </label>
          </div>
          <input type="number" placeholder="Enter value in Month" />

         
       
          <div className="mb-3">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label owner_details"
            >
              <b>PG Name</b>
            </label>
            <input
              type="text"
              className="form-control"
              id="pg_name"
              required
              name="pg_name"
              minLength={5}
              value={details.pg_name}
              onChange={changehandler}
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label owner_details"
            >
              <b>Email address</b>
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
              name="email"
              value={details.email}
              onChange={changehandler}
            />
          </div> */}

          <button type="submit" className="btn btn-primary my-5">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Add_Pg;
