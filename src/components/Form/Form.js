import React from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services/car.service";


const Form = () => {
    const {register, handleSubmit, watch, reset, formState: {errors}} = useForm();

    const submit = (data) => {
        // console.log(data);
        carService.create(data).then(value => console.log(value)).catch(errors => console.log(errors.response.data));
        reset();
    }

    // watch(e => console.log(e))

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label> MODEL <input type="text" {...register('model',)}/></label>
                <label> YEAR <input type="text" {...register('year',)}/></label>
                <label> PRICE <input type="text" {...register('price',)}/></label>
                <button>Save</button>
            </form>
        </div>
    );
};

export default Form;