import React, {useEffect, useState} from 'react';
import '../App.css'
import Flight from "./Flight";

const Flights = () => {

    let [flights, setFlights] = useState([]);

    useEffect(() => {
        fetch(`https://api.spacexdata.com/v3/launches/`)
            .then(data => data.json())
            .then(value => {
                setFlights(value.filter(item => item.launch_year !== `2020`))
                // console.log(flights);
            })
    }, [])

    return (
        <div>
            {flights.map(flight =><Flight key={flight.flight_number} flight={flight}/>)}
        </div>
    );
};

export default Flights;