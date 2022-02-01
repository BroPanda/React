import React, {useState} from 'react';
import Cars from "./components/Cars/Cars";
import Form from "./components/Form/Form";

const App = () => {
    const [flag, setFlag] = useState(true);
    console.log(flag);

    return (<>
        <Form flag={flag} setFlag={setFlag}/>
        <Cars flag={flag} setFlag={setFlag}/>
    </>);
};

export default App;