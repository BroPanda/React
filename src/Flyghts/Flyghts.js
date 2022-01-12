import React, {useEffect, useState} from 'react';

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
            {flights.map(flight =>
                <div>
                    {flight.flight_number} {flight.mission_name} {flight.launch_year}
                    <img src={flight.mission_patch} alt="mission_patch"/>
                    <hr/>
                </div>
            )}
        </div>
    );
};

export default Flights;