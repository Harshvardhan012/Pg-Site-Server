import React, { useState,useEffect } from 'react'
import { data } from '../data/pgdata'



// Fetching New Note

const Fun = () => {

    
                const initialnotes = []
                const [notes, setnotes] = useState(initialnotes);
                const host = "http://localhost:5000"

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
            console.log(json);
            //   setnotes(json);
            //   console.log(notes);
        }

        useEffect(() => {
            console.log(data);
        //   GetNotes();
        }, [])
        

        return (
            <button onClick={GetNotes}> Click</button>
        )

}


export default Fun

