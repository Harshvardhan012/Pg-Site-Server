import { useState } from "react";
import DataContext from "./datacontext";


const Data = (props) => {
  const host = "http://localhost:5000"
  const initialnotes = []
  const [dbdata, setdbdata] = useState(initialnotes);


  // Fetching New Note
  const getNote = async () => {
  
    // Api call
    const response = await fetch(`${host}/api/details/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "token": localStorage.getItem('token')
      }
    });
    const json = await response.json();
    setdbdata(json);
  }



  return (
    <DataContext.Provider value={{ dbdata, getNote }}>
      {props.children}
    </DataContext.Provider>
  )
}

export default Data;