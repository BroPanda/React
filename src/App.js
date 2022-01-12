import React from 'react';

import './App.css';
import Simpson from "./Components/Simpson";

const App = () => {
    return (
        <div>

            <Simpson name={`lisa`} age={11}/>
            <Simpson name={`bart`} age={1111111}/>



        </div>
    );
};

export default App;