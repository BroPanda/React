import React, {useState} from 'react';
import {useForm} from "react-hook-form";

import {carService} from "../../services/car.service";

const Form = ({flag, setFlag}) => {
    const {register, handleSubmit, watch, reset, formState: {errors}} = useForm();
    const [err, setErr] = useState({});


    const submit = (data) => {
        setErr({})
        carService.create(data).then(value => console.log(value)).catch(errors => setErr(errors.response.data));
        setFlag(!flag)
        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label> MODEL <input type="text" {...register('model')}/>
                    <div>
                        {err.model && <div>{err.model[0]}</div>}
                    </div>
                </label>
                <label> YEAR <input type="text" {...register('year')}/>
                    <div>
                        {err.model && <div>{err.year[0]}</div>}
                    </div>
                </label>
                <label> PRICE <input type="text" {...register('price')}/>
                    <div>
                        {err.model && <div>{err.price[0]}</div>}
                    </div>
                </label>
                <button>Save</button>
            </form>
        </div>
    );
};

export default Form;