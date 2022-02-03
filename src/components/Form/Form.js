import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";

import {carService} from "../../services/car.service";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/car.validator";

const Form = ({flag, setFlag, updateId, setUpdateId}) => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: {errors},
        getValues
    } = useForm({resolver: joiResolver(carValidator)});

    const [err, setErr] = useState({});

    const value = getValues();

    useEffect(() => {
        if (updateId) {
            carService.updateById(updateId, value).then(value => setFlag(!flag))
            setUpdateId(null)
        }
    }, [updateId])

    const submit = (data) => {
        setErr({})
        carService.create(data).then(value => setFlag(!flag)).catch(errors => setErr(errors.response.data));
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