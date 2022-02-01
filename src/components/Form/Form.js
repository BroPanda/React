import React from 'react';
import {useForm} from "react-hook-form";


const Form = () => {
    const {register, handleSubmit, watch, reset,formState:{errors}} = useForm();
    return (
        <div>
            <form>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>

            </form>
        </div>
    );
};

export default Form;