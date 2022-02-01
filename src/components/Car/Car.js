import React from 'react';
import {carService} from "../../services/car.service";

const Car = ({car: {id, model, year, price},flag, setFlag}) => {

    const deleteCar = () => {
        carService.deleteById(id)
        setFlag(!flag)

    }

    return (
        <div>
            <div>id: {id} </div>
            <div> model: {model} year: {year} price: {price}</div>
            <button onClick={deleteCar}>Delete byID {id}</button>
            <hr/>
        </div>
    );
};

export default Car;