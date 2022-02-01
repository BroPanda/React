import React, {useEffect, useState} from 'react';

import {carService} from "../../services/car.service";
import Car from "../Car/Car";

const Cars = ({flag, setFlag, getIdUpdateCar}) => {
    const [cars, setCars] = useState([])

    useEffect(() => {
        carService.getAll().then(value => setCars(value))
    }, [flag])

    return (
        <div>
            {cars && cars.map(car => <Car key={car.id} car={car} flag={flag} setFlag={setFlag} getIdUpdateCar={getIdUpdateCar}/> )}
        </div>
    );
};

export default Cars;