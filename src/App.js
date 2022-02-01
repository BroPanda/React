import React, {useState} from 'react';
import Cars from "./components/Cars/Cars";
import Form from "./components/Form/Form";

const App = () => {
    const [flag, setFlag] = useState('');
    const [updateId, setUpdateId] = useState(null);

    const getIdUpdateCar = (id) => {
        setUpdateId(id);
    }

    return (<>
        <Form flag={flag} setFlag={setFlag} updateId={updateId} setUpdateId={setUpdateId}/>
        <Cars flag={flag} setFlag={setFlag} getIdUpdateCar={getIdUpdateCar}/>
    </>);
};

export default App;