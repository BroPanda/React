import React from 'react';

const Form = ({form, setForm, getFiltered}) => {

    const formHandler = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
        getFiltered({...form, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <form>
                <label>name
                    <div><input type="text" name={`name`} onChange={formHandler}/></div>
                </label>
                <label>username
                    <div><input type="text" name={`username`} onChange={formHandler}/></div>
                </label>
                <label>email
                    <div><input type="text" name={`email`} onChange={formHandler}/></div>
                </label>
            </form>
        </div>
    );
};

export default Form;