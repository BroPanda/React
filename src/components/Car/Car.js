import React from 'react';
import {carService} from "../../services/car.service";

const Car = ({car: {id, model, year, price}, flag, setFlag, getIdUpdateCar}) => {

    const deleteCar = () => {
        carService.deleteById(id).then(value => setFlag(!flag))
    }


    return (
        <div>
            <div>id: {id}</div>
            <div> model: {model} year: {year} price: {price}</div>
            <button onClick={deleteCar}>Delete byID {id}</button>
            <button onClick={()=> getIdUpdateCar(id)}>Update byID {id}</button>
            <hr/>
        </div>
    );
};

export default Car;