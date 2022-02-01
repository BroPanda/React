import React from 'react';

const Car = ({car}) => {
    console.log(car);
    return (
        <div>
            <div>id: {car.id} model: {car.model}</div>
            <div>year: {car.year} price: {car.price}</div>
            <hr/>
        </div>
    );
};

export default Car;